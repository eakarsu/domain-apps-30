# 30 standalone domain apps

Each app lives in its own sibling directory under `/Volumes/external/projects`, with a dedicated PostgreSQL database and role, unique administrator login and session secret, and a private OpenRouter `.env`. BeautyHQ’s navigation structure, cards, dialogs and rose accent were used as the visual reference. Existing applications were not modified.

Each app implements 12 related record types, 8 domain AI draft workflows, 3 AI input-fill styles and 3 complete example scenarios per workflow, and 3 saved deterministic tools. Common features include tasks, calendar, reports, search, atomic imports, exports, independent reviews, source evidence, audit history, team management, model settings and configured-connector execution. Per-app FEATURES.md documents the exact scope and integration boundaries.

## Start and stop

```sh
cd /Volumes/external/projects/domain-apps-30
node apps-control.mjs start
node apps-control.mjs status
node apps-control.mjs stop
```

Append an app number (1–30) to control just one app, for example `node apps-control.mjs start 4`. Servers bind to localhost. The controller only stops processes it started and whose command still matches its recorded app. Individual apps also support `npm start` and `npm run dev`.

[Private local logins](LOCAL-LOGINS.md) · [Validation report](VALIDATION.md)

| # | App | Local URL | Folder |
|---|---|---|---|
| 1 | Certified Payroll and Prevailing Wage Control | [5700](http://localhost:5700) | [ai-certified-payroll-and-prevailing-wage-control](../ai-certified-payroll-and-prevailing-wage-control/README.md) |
| 2 | Trade Credit Insurance Policy Operations | [5701](http://localhost:5701) | [ai-trade-credit-insurance-policy-operations](../ai-trade-credit-insurance-policy-operations/README.md) |
| 3 | Underground Storage Tank Compliance | [5702](http://localhost:5702) | [ai-underground-storage-tank-compliance](../ai-underground-storage-tank-compliance/README.md) |
| 4 | Registered Apprenticeship Sponsor Operations | [5703](http://localhost:5703) | [ai-registered-apprenticeship-sponsor-operations](../ai-registered-apprenticeship-sponsor-operations/README.md) |
| 5 | Pet Travel Certificate Coordinator | [5704](http://localhost:5704) | [ai-pet-travel-certificate-coordinator](../ai-pet-travel-certificate-coordinator/README.md) |
| 6 | Air Emissions Permit Operations | [5705](http://localhost:5705) | [ai-air-emissions-permit-operations](../ai-air-emissions-permit-operations/README.md) |
| 7 | Industrial Wastewater Pretreatment Control | [5706](http://localhost:5706) | [ai-industrial-wastewater-pretreatment-control](../ai-industrial-wastewater-pretreatment-control/README.md) |
| 8 | Wetland Mitigation Bank Operations | [5707](http://localhost:5707) | [ai-wetland-mitigation-bank-operations](../ai-wetland-mitigation-bank-operations/README.md) |
| 9 | Water Rights Allocation Ledger | [5708](http://localhost:5708) | [ai-water-rights-allocation-ledger](../ai-water-rights-allocation-ledger/README.md) |
| 10 | Dam and Levee Safety Program | [5709](http://localhost:5709) | [ai-dam-and-levee-safety-program](../ai-dam-and-levee-safety-program/README.md) |
| 11 | Conservation Easement Stewardship | [5710](http://localhost:5710) | [ai-conservation-easement-stewardship](../ai-conservation-easement-stewardship/README.md) |
| 12 | Utility Right-of-Way Acquisition | [5711](http://localhost:5711) | [ai-utility-right-of-way-acquisition](../ai-utility-right-of-way-acquisition/README.md) |
| 13 | Radioactive Waste Lifecycle Records | [5712](http://localhost:5712) | [ai-radioactive-waste-lifecycle-records](../ai-radioactive-waste-lifecycle-records/README.md) |
| 14 | Radiopharmacy Production and Delivery | [5713](http://localhost:5713) | [ai-radiopharmacy-production-and-delivery](../ai-radiopharmacy-production-and-delivery/README.md) |
| 15 | Occupational Radiation Dose Records | [5714](http://localhost:5714) | [ai-occupational-radiation-dose-records](../ai-occupational-radiation-dose-records/README.md) |
| 16 | Donor Milk Bank Traceability | [5715](http://localhost:5715) | [ai-donor-milk-bank-traceability](../ai-donor-milk-bank-traceability/README.md) |
| 17 | Tissue and Eye Bank Operations | [5716](http://localhost:5716) | [ai-tissue-and-eye-bank-operations](../ai-tissue-and-eye-bank-operations/README.md) |
| 18 | Biobank Consent and Specimen Access | [5717](http://localhost:5717) | [ai-biobank-consent-and-specimen-access](../ai-biobank-consent-and-specimen-access/README.md) |
| 19 | Organ Procurement Logistics Coordinator | [5718](http://localhost:5718) | [ai-organ-procurement-logistics-coordinator](../ai-organ-procurement-logistics-coordinator/README.md) |
| 20 | Forensic Laboratory Evidence Operations | [5719](http://localhost:5719) | [ai-forensic-laboratory-evidence-operations](../ai-forensic-laboratory-evidence-operations/README.md) |
| 21 | Academic Transfer Credit Evaluation | [5720](http://localhost:5720) | [ai-academic-transfer-credit-evaluation](../ai-academic-transfer-credit-evaluation/README.md) |
| 22 | Academic Accreditation Evidence Workspace | [5721](http://localhost:5721) | [ai-academic-accreditation-evidence-workspace](../ai-academic-accreditation-evidence-workspace/README.md) |
| 23 | International Student Compliance Operations | [5722](http://localhost:5722) | [ai-international-student-compliance-operations](../ai-international-student-compliance-operations/README.md) |
| 24 | Jury Administration and Service Scheduling | [5723](http://localhost:5723) | [ai-jury-administration-and-service-scheduling](../ai-jury-administration-and-service-scheduling/README.md) |
| 25 | Victim Compensation Case Operations | [5724](http://localhost:5724) | [ai-victim-compensation-case-operations](../ai-victim-compensation-case-operations/README.md) |
| 26 | Commercial Fishing Quota Ledger | [5725](http://localhost:5725) | [ai-commercial-fishing-quota-ledger](../ai-commercial-fishing-quota-ledger/README.md) |
| 27 | Ship Recycling and Hazardous Materials Inventory | [5726](http://localhost:5726) | [ai-ship-recycling-and-hazardous-materials-inventory](../ai-ship-recycling-and-hazardous-materials-inventory/README.md) |
| 28 | Rail Crossing Inventory and Coordination | [5727](http://localhost:5727) | [ai-rail-crossing-inventory-and-coordination](../ai-rail-crossing-inventory-and-coordination/README.md) |
| 29 | Telecom Number Porting Operations | [5728](http://localhost:5728) | [ai-telecom-number-porting-operations](../ai-telecom-number-porting-operations/README.md) |
| 30 | International Funeral Repatriation Coordinator | [5729](http://localhost:5729) | [ai-international-funeral-repatriation-coordinator](../ai-international-funeral-repatriation-coordinator/README.md) |

## Boundaries

This is a documented working scope, not every conceivable feature. External agency, insurer, carrier, court and clinical systems require real configured adapters and authorized human review. AI drafts and example calculations do not establish legal compliance, clinical release, eligibility or professional certification. Sources currently support text/CSV/JSON/Markdown; PDF OCR and automated external submissions are not included. See each app’s FEATURES.md and OPENROUTER.md.
