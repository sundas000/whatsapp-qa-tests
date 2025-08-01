# WhatsApp – Edit Group Info

This module includes test cases for editing group information including the group name, description, and display picture. Group info edits can be done by admins (or members if permissions allow).

---

## Application Specifications

| Feature               | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| Edit Group Name        | Allows renaming of group name visible to all members                       |
| Edit Group Description | Enables setting or changing the group’s purpose/description                |
| Change Group Picture   | Admins or permitted members can set or update the group’s display image    |
| Permission Settings    | Admins can restrict who is allowed to change info (admins only or everyone)|

- Group info is accessed by tapping on group name at top of the chat.
- Description and image are optional but recommended for clarity.
- Edits are notified in the group chat (e.g., "You changed the group description").

---

## Test Cases

| Test Case ID     | Module           | Test Case Description                                                    | Expected Result                                                                 | Status | Priority | Notes                        |
|------------------|------------------|---------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|------------------------------|
| EGI_TC_001        | Edit Group Info  | Admin changes group name                                                  | Group name is updated and all members see new name                              | Pass   | High     |                              |
| EGI_TC_002        | Edit Group Info  | Admin adds/edits group description                                        | Description is updated and visible to all members                               | Pass   | Medium   |                              |
| EGI_TC_003        | Edit Group Info  | Admin updates group profile image                                         | Group picture is changed and all members see the update                         | Pass   | High     |                              |
| EGI_TC_004        | Edit Group Info  | Admin restricts group info editing to admins only                         | Non-admin members can no longer edit name, description, or picture              | Pass   | Medium   |                              |
| EGI_TC_005        | Edit Group Info  | Non-admin tries to edit info when restrictions are active                 | Edit option is disabled or shows permission error                               | Pass   | Medium   |                              |
| EGI_TC_006        | Edit Group Info  | Group info edit is announced in group chat                                | A system message is posted showing who changed what (e.g., "You updated...")    | Pass   | Low      |                              |
| EGI_TC_007        | Edit Group Info  | Admin re-enables edit permissions for all members                         | Members regain access to change name, description, and image                    | Pass   | Low      |                              |

---

## Platform Behavior Notes

| Platform       | Group Info Editing | Permission Control | Notes                                                       |
|----------------|--------------------|--------------------|-------------------------------------------------------------|
| Android        | ✅ Supported        | ✅ Supported        | Real-time updates and notifications                         |
| iOS            | ✅ Supported        | ✅ Supported        | Same behavior as Android                                    |
| Web/Desktop    | ✅ Supported        | ✅ Supported        | Minor UI layout difference; functionality remains the same  |

---

## Notes

- Profile photo changes may take a few seconds to reflect for all members.
- System notifications about edits can be muted individually by users.
- Edits are reversible at any time by those with appropriate permissions.
