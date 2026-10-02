# Validation — 30 domain apps

Verified 2026-09-05T18:07:29.405788+00:00.

All 30 apps passed lint (zero warnings in final checks), TypeScript, production builds and real PostgreSQL integration tests. All 30 are running on localhost ports 5700–5729 with database-backed readiness checks. Each current build is newer than its source files.

- **541 unit tests passed**, including per-app calculation reference results, invalid inputs, evidence citations, provider arguments, relationships, geographic bounds and CSV protection.
- **2308 integration assertions passed** against 30 isolated PostgreSQL databases. Tests exercise actual routes and transactions; sessions and outbound providers use synthetic fixtures. Test databases were removed after success.
- **240 AI workflow screens** and **720 example-fill button clicks** passed browser checks. Every example filled all eight inputs, including optional fields (5,760 field-value comparisons).
- All 30 real administrator logins, record dialogs, reports, task calendars, AI settings and saved example calculations passed browser checks. No browser page errors were observed.
- All three real AI input-fill styles and all eight AI draft routes were exercised per app using provider fixtures. One app additionally passed live OpenRouter field filling and a complete source-cited saved draft using only fictional seeded records. The shared copied model was `openai/gpt-5.6-terra`. A separate 45-token synthetic readiness request also succeeded. Real provider success was not independently tested 30 times; the key/model configuration matches across all apps.
- `.env` files have mode `0600`, are Git-ignored, and have unique database credentials, authentication secrets and administrator passwords. The authorized OpenRouter key/model/base were copied from BeautyHQ. The provider key was absent from scanned source and browser bundles.
- Production dependency audit: **0 reported vulnerabilities**. All 30 lockfiles share the audited dependency graph.

The live apps contain clearly labeled fictional seed records. Browser calculator checks saved example results; one app also contains the synthetic live AI validation drafts. Existing project source and BeautyHQ customer data were not altered.

## Per-app results

| # | App | Unit tests | Integration assertions | Example buttons | Build / browser / database |
|---|---|---|---|---|---|
| 1 | [Certified Payroll and Prevailing Wage Control](http://localhost:5700) | 18 | 77 | 24 | Pass |
| 2 | [Trade Credit Insurance Policy Operations](http://localhost:5701) | 18 | 77 | 24 | Pass |
| 3 | [Underground Storage Tank Compliance](http://localhost:5702) | 18 | 77 | 24 | Pass |
| 4 | [Registered Apprenticeship Sponsor Operations](http://localhost:5703) | 18 | 77 | 24 | Pass |
| 5 | [Pet Travel Certificate Coordinator](http://localhost:5704) | 18 | 77 | 24 | Pass |
| 6 | [Air Emissions Permit Operations](http://localhost:5705) | 18 | 77 | 24 | Pass |
| 7 | [Industrial Wastewater Pretreatment Control](http://localhost:5706) | 18 | 77 | 24 | Pass |
| 8 | [Wetland Mitigation Bank Operations](http://localhost:5707) | 18 | 77 | 24 | Pass |
| 9 | [Water Rights Allocation Ledger](http://localhost:5708) | 18 | 77 | 24 | Pass |
| 10 | [Dam and Levee Safety Program](http://localhost:5709) | 18 | 77 | 24 | Pass |
| 11 | [Conservation Easement Stewardship](http://localhost:5710) | 18 | 76 | 24 | Pass |
| 12 | [Utility Right-of-Way Acquisition](http://localhost:5711) | 18 | 77 | 24 | Pass |
| 13 | [Radioactive Waste Lifecycle Records](http://localhost:5712) | 18 | 77 | 24 | Pass |
| 14 | [Radiopharmacy Production and Delivery](http://localhost:5713) | 18 | 77 | 24 | Pass |
| 15 | [Occupational Radiation Dose Records](http://localhost:5714) | 18 | 77 | 24 | Pass |
| 16 | [Donor Milk Bank Traceability](http://localhost:5715) | 18 | 77 | 24 | Pass |
| 17 | [Tissue and Eye Bank Operations](http://localhost:5716) | 18 | 77 | 24 | Pass |
| 18 | [Biobank Consent and Specimen Access](http://localhost:5717) | 18 | 77 | 24 | Pass |
| 19 | [Organ Procurement Logistics Coordinator](http://localhost:5718) | 18 | 77 | 24 | Pass |
| 20 | [Forensic Laboratory Evidence Operations](http://localhost:5719) | 18 | 77 | 24 | Pass |
| 21 | [Academic Transfer Credit Evaluation](http://localhost:5720) | 18 | 77 | 24 | Pass |
| 22 | [Academic Accreditation Evidence Workspace](http://localhost:5721) | 18 | 77 | 24 | Pass |
| 23 | [International Student Compliance Operations](http://localhost:5722) | 18 | 77 | 24 | Pass |
| 24 | [Jury Administration and Service Scheduling](http://localhost:5723) | 18 | 77 | 24 | Pass |
| 25 | [Victim Compensation Case Operations](http://localhost:5724) | 18 | 77 | 24 | Pass |
| 26 | [Commercial Fishing Quota Ledger](http://localhost:5725) | 18 | 77 | 24 | Pass |
| 27 | [Ship Recycling and Hazardous Materials Inventory](http://localhost:5726) | 18 | 77 | 24 | Pass |
| 28 | [Rail Crossing Inventory and Coordination](http://localhost:5727) | 19 | 77 | 24 | Pass |
| 29 | [Telecom Number Porting Operations](http://localhost:5728) | 18 | 77 | 24 | Pass |
| 30 | [International Funeral Repatriation Coordinator](http://localhost:5729) | 18 | 76 | 24 | Pass |

## Evidence and limits

[Machine-readable summary](evidence/summary.json), individual build/test logs in `evidence/`, [desktop screenshot](evidence/dashboard-desktop.png), and [mobile screenshot](evidence/reports-mobile.png).

These checks verify the implemented local scope. They do not certify regulated suitability, clinical validation, insurer acceptance, authority to submit, production load capacity, or every conceivable feature. Source uploads currently support plain text, CSV, JSON and Markdown. External services require real configured adapters and independently approved records. Consult each app's FEATURES.md and OPENROUTER.md for precise boundaries and supported configuration.

## Launcher follow-up

Duplicate-start handling was added to all 30 launch scripts after the initial build. Each `./start.sh` is executable, resolves its own project directory, checks the configured port, and reports the URL of an already healthy matching app with exit code zero. Occupied ports belonging to unrelated or unhealthy services are reported without stopping any process. All 30 duplicate starts passed; unrelated-service, unhealthy-service, free-port and real fresh-start cases were also verified. Application source and production bundles were unchanged by this launcher update.

## Login and AI action follow-up

All 30 apps now include a local-only **Fill credentials** button. It fills both fields without submitting and verifies that the configured initial password still matches an active account. The helper requires explicit enablement, a loopback binding and matching local origin; public, cross-site and headerless credential requests are denied. Passwords are fetched on demand, never embedded in client bundles.

AI drafts now accept entered fields without requiring a saved subject record. Saved records and documents remain optional. Input-only drafts preserve and cite an explicitly unverified input snapshot. The three AI field suggestion buttons can prepare an empty form. The draft button explains why it is disabled and becomes enabled after entering text or loading an example. Analyst permissions and evidence association checks remain enforced.

All 30 apps passed lint, type checking and production builds, **721 unit tests**, and **2458 real-database integration assertions**. Browser checks verified credential fill and actual login in every app, plus enable/disable behavior across **240 AI workflow screens**. A live OpenRouter browser test on Academic Accreditation saved an input-only draft and filled all eight fields from an empty form. No saved domain record was required. All 30 updated servers passed database readiness checks.

[Follow-up evidence](evidence/login-and-ai-actions/summary.json). The initial test counts above describe the original build; these are the latest checks.
