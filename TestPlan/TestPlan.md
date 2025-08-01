# Test Plan – WhatsApp Application

---

## 1. Overview

This document outlines the test plan for manually validating the core features of the WhatsApp application. The purpose is to ensure all functionalities perform as expected across supported platforms and under various user scenarios. This plan serves as a roadmap for executing, tracking, and improving test coverage.

---

## 2. Scope of Testing

### In Scope:
- Login & OTP Verification
- Chat Functionality (1-to-1 and Groups)
- Media Sharing (Images, Videos, Audio, Documents)
- Status Posting and Viewing
- Voice and Video Calls
- Settings and Preferences
- Notifications and Permissions
- Blocked User Handling
- UI/UX Validation
- Performance Checks
- Multi-device Usage

### Out of Scope:
- WhatsApp Business-specific features
- Backend infrastructure or encryption protocols
- Internal development APIs

---

## 3. Testing Types

- Functional Testing  
- UI Testing  
- Regression Testing  
- Exploratory Testing  
- Smoke & Sanity Testing  
- Negative Testing  
- Cross-Platform Validation (Mobile, Desktop, Web)

---

## 4. Platforms to be Tested

- Android (Manual)  
- iOS (Limited exploratory)  
- WhatsApp Web  
- Desktop App (Windows/macOS)

---

## 5. Test Deliverables

- `TestCases/` directory with modular test case files  
- `BugReports/` with sample bugs and templates  
- `TestPlan/TestPlan.md` (this file)  
- Summary Report (to be added after execution)

---

## 6. Roles & Responsibilities

| Role              | Responsibility                      |
|-------------------|--------------------------------------|
| QA Engineer       | Test case creation, execution, reporting |
| Repository Owner  | Review documentation, accept issues  |

*Note: Currently a single-tester project led by Sundas Shafi.*

---

## 7. Risk Assessment

| Risk                                 | Impact | Mitigation                      |
|--------------------------------------|--------|----------------------------------|
| Incomplete platform coverage         | Medium | Prioritize Android and Web       |
| Features updated during testing      | High   | Version lock or staged rollout   |
| Limited access to real devices       | Low    | Use emulators and browser tools  |

---

## 8. Entry & Exit Criteria

### Entry Criteria
- WhatsApp app is installed and accessible
- Test environment is stable (device or browser)
- Test cases are reviewed and approved

### Exit Criteria
- All critical modules tested
- All high-severity bugs logged
- Final test summary documented

---

## 9. Tools to Be Used

- Manual Testing
- GitHub (for version control)
- Markdown (for documentation)
- Appium (planned for future automation)
- Google Sheets or Notion (optional reporting)

---

## 10. Timeline (Tentative)

| Phase             | Duration          |
|------------------|-------------------|
| Planning          | 1 day             |
| Test Case Writing | 3–5 days          |
| Execution         | 5–7 days          |
| Bug Logging       | Parallel to execution |
| Review & Closure  | 1–2 days          |

---

## 11. Status Tracking

All test modules will be tracked via a summary table in `README.md` and module-level checklists.

---

## 12. Approval

This document is self-maintained and reviewed by the author as part of an independent QA portfolio project.

Prepared by: **Sundas Shafi**  
Role: Software Test Engineer  
Date: 23 July 2025

