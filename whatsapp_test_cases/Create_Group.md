# WhatsApp – Create a Group

This module covers the process of creating a new WhatsApp group and validating its behavior across supported platforms.

---

## Application Specifications

- A group can include up to 256 participants.
- Users can:
  - Tap the “New Group” button.
  - Select contacts from the contact list.
  - Assign a group subject (title).
  - Optionally set a group display picture.
- Group creation completes after tapping the **Create** button.

---

## Test Cases

| Test Case ID     | Module         | Test Case Description                                                       | Expected Result                                                    | Status | Priority | Notes                          |
|------------------|----------------|------------------------------------------------------------------------------|---------------------------------------------------------------------|--------|----------|--------------------------------|
| GROUP_TC_001     | Create Group   | User taps “New Group” from the chat screen                                  | Contact list should open                                           | Pass   | High     | All platforms                  |
| GROUP_TC_002     | Create Group   | User selects at least 1 contact and taps Next                               | Group subject entry screen should appear                           | Pass   | High     |                               |
| GROUP_TC_003     | Group Subject  | User enters a valid group name and taps “Create”                            | New group should be created and opened                             | Pass   | High     |                               |
| GROUP_TC_004     | Max Limit      | User attempts to add more than 256 participants                             | App should prevent and show an appropriate error                   | Pass   | Medium   | Limit is 256 on all platforms |
| GROUP_TC_005     | Empty Subject  | User tries to create a group without entering a subject                     | App should block group creation and prompt for a subject           | Pass   | Medium   |                               |
| GROUP_TC_006     | Emoji Subject  | User enters only emojis as group subject                                    | Group should be created with emoji-only title                      | Pass   | Low      |                               |
| GROUP_TC_007     | Set Group Icon | User sets a group photo during creation                                     | Group photo should appear in the group chat and group info         | Pass   | Medium   | iOS: Choose from camera/photos |
| GROUP_TC_008     | Group Cancel   | User cancels group creation mid-way                                         | User should be returned to chat screen without group being created | Pass   | Medium   |                               |
| GROUP_TC_009     | Search Contacts| User searches for a contact while creating a group                          | Search results should be filtered accordingly                      | Pass   | Medium   |                               |
| GROUP_TC_010     | Duplicate Add  | User tries to select the same contact twice                                 | App should prevent duplicate contact addition                      | Pass   | Low      |                               |

---

## Platform Behavior Notes

| Platform       | New Group Entry         | Contact Selection        | Group Icon Setup                     | Notes                          |
|----------------|-------------------------|--------------------------|--------------------------------------|--------------------------------|
| Android        | Tap “New Chat” → Group  | Search or scroll list    | Gallery, Camera, or emoji            | Runtime permissions required   |
| iOS            | Tap pencil icon → Group | Contact picker view      | Photo Library or camera              |                               |
| Web/Desktop    | “New Chat” → Group      | Select from synced list  | Upload icon file from system         | No camera access available     |

