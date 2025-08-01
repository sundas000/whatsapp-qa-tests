# WhatsApp – Status Privacy Settings

This module documents the functionality and test cases related to managing the privacy of WhatsApp Status updates.

---

## Application Specifications

| Feature                   | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| Status Privacy Settings   | Allows users to control who can view their status updates                   |
| Options Available         | "My Contacts", "My Contacts Except...", and "Only Share With..."            |
| Access Path               | Status tab > More options (⋮ / gear icon) > Privacy                        |

- Changes to privacy settings affect future statuses only.
- The selected privacy option is persistent until manually changed.
- Status privacy does not affect visibility of other features (e.g., last seen).

---

## Test Cases

| Test Case ID     | Module                 | Test Case Description                                                     | Expected Result                                                                 | Status | Priority | Notes                                         |
|------------------|------------------------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|-----------------------------------------------|
| STC_TC_018       | Status Privacy         | User navigates to status privacy settings                                  | All three privacy options should be visible                                     | Pass   | High     |                                               |
| STC_TC_019       | Status Privacy         | User selects “My Contacts” and posts a status                              | Status is visible to all saved contacts                                         | Pass   | High     | Default setting                              |
| STC_TC_020       | Status Privacy         | User selects “My Contacts Except...” and excludes specific users            | Excluded users should not see the status                                        | Pass   | High     |                                               |
| STC_TC_021       | Status Privacy         | User selects “Only Share With...” and chooses 1–2 contacts                  | Status is visible only to selected contacts                                     | Pass   | High     |                                               |
| STC_TC_022       | Status Privacy         | User changes privacy setting and posts a new status                        | New status reflects the updated setting; previous statuses remain unaffected   | Pass   | Medium   |                                               |
| STC_TC_023       | Status Privacy         | User selects no one in “Only Share With…” option                           | No contact should be able to view the status                                    | Pass   | Medium   |                                               |
| STC_TC_024       | Status Privacy         | User checks previously excluded contact after changing setting             | Newly included users should now see statuses                                    | Pass   | Medium   |                                               |
| STC_TC_025       | Status Privacy         | User opens Status > Privacy settings repeatedly                            | Last selected setting remains saved                                             | Pass   | Medium   |                                               |

---

## Platform Behavior Notes

| Platform       | Status Privacy | Notes                                                                 |
|----------------|----------------|-----------------------------------------------------------------------|
| Android        |  Supported   | Full control with clear UI for selecting/excluding contacts          |
| iOS            |  Supported   | Identical functionality to Android, UI adjusted for iOS navigation   |
| Web/Desktop    |  Partial     | Viewing privacy possible; changing settings usually redirects to mobile |

---

## Notes

- Privacy settings do not retroactively apply to already posted statuses.
- If a user is excluded from viewing, they also cannot react to or reply to the status.
- Contacts who are blocked completely cannot see statuses regardless of privacy settings.
