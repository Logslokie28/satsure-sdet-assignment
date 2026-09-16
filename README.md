# SatSure SDET Practical Assignment - Autocomplete Form Test Suite

This repository contains the complete UI and API test automation suite along with test documentation for the Autocomplete Web Form.

---

## 🛠️ Tech Stack & Prerequisites

* **Framework:** Playwright (Node.js)
* **Language:** JavaScript / ES6+
* **Node.js Version:** v16.x or higher

---

## 📁 Repository Structure

```text
├── docs/
│   ├── 1-requirement-analysis.md    # Top 10 Test Scenarios & Risk Rationale
│   ├── 3-defect-identification.md   # FR-05 Data Contract Discrepancy Analysis
│   ├── 4-test-cases.md              # Detailed UI and API Test Cases
│   └── 7-ai-reflection.md           # AI Tooling Usage, Modifications & Reflection
├── tests/
│   ├── ui/
│   │   ├── pages/
│   │   │   └── AutocompletePage.js  # Page Object Model Class
│   │   └── tests/
│   │       └── autocomplete.spec.js # Playwright UI Test Suite
│   └── api/
│       └── tests/
│           └── api-validation.spec.js # Playwright API Contract & Schema Test Suite
├── package.json                     # Dependency & Command Scripts Config
└── README.md                        # Documentation & Execution Instructions
