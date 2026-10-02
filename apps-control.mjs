import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawn,spawnSync} from 'node:child_process';
const root=path.dirname(fileURLToPath(import.meta.url)),runtime=path.join(root,'.runtime');fs.mkdirSync(runtime,{recursive:true,mode:0o700});
const apps=JSON.parse(fs.readFileSync(path.join(root,'apps.json'),'utf8'));
const action=process.argv[2]||'status',selected=process.argv[3];
if(!['start','stop','status'].includes(action)||selected&&!apps.some(a=>String(a.number)===selected))throw new Error('Usage: node apps-control.mjs start|stop|status [1–30]');
async function health(a){try{const r=await fetch(a.url+'/api/health',{signal:AbortSignal.timeout(2500)});const d=await r.json();return r.ok&&d.service===a.slug;}catch{return false;}}
for(const app of apps.filter(a=>!selected||String(a.number)===selected)){
 const file=path.join(runtime,`${app.number}.json`),script=path.join(app.folder,'scripts/server.mjs');let state=fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):null;
 const owned=()=>state&&spawnSync('ps',['-p',String(state.pid),'-o','command='],{encoding:'utf8'}).stdout?.includes(script);
 if(action==='status'){console.log(`${app.number}. ${await health(app)?'running':'stopped/unavailable'} ${app.url} ${app.title}`);continue;}
 if(action==='stop'){if(owned()){process.kill(-state.pid,'SIGTERM');console.log(`Stopped ${app.title}`);}else console.log(`No controller-owned process for ${app.title}`);if(fs.existsSync(file))fs.unlinkSync(file);continue;}
 if(await health(app)){console.log(`Already running: ${app.url}`);continue;}
 if(owned()){console.log(`Existing process is not ready: ${app.title}; inspect .runtime/${app.number}.log`);continue;}
 const log=fs.openSync(path.join(runtime,`${app.number}.log`),'a',0o600);
 const child=spawn(process.execPath,[script,'start'],{cwd:app.folder,env:{...process.env,npm_package_name:app.slug},detached:true,stdio:['ignore',log,log]});child.unref();fs.closeSync(log);state={pid:child.pid,folder:app.folder,startedAt:new Date().toISOString()};fs.writeFileSync(file,JSON.stringify(state),{mode:0o600});
 let ready=false;for(let attempt=0;attempt<30;attempt++){if(await health(app)){ready=true;break;}await new Promise(r=>setTimeout(r,500));}
 console.log(`${ready?'Started':'Failed readiness check'}: ${app.url} ${app.title}`);if(!ready)process.exitCode=1;
}
