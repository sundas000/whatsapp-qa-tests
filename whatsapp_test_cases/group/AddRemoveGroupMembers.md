# WhatsApp – Add/Remove Group Members

This module documents the process of adding new members to a group and removing existing members. These actions are restricted to group admins.

---

## Application Specifications

| Feature                 | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| Add Members              | Admins can add contacts to the group directly                               |
| Invite via Link/QR       | Members can be invited via a group link or QR code                         |
| Remove Members           | Admins can remove any member from the group                                |
| Permissions              | Only admins can perform add/remove operations unless admin rights are shared|

- Group info shows the full list of members with admin labels.
- Notifications appear in the group chat when a member is added or removed.
- Maximum group size limits may apply (e.g., 1024 members as of recent updates).

---

## Test Cases

| Test Case ID     | Module                 | Test Case Description                                                      | Expected Result                                                                 | Status | Priority | Notes                          |
|------------------|------------------------|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|----------------------------------|
| ARM_TC_001        | Add/Remove Members     | Admin adds a contact from their phonebook                                   | Contact is added to group and group chat shows “X added Y” message              | Pass   | High     |                                |
| ARM_TC_002        | Add/Remove Members     | Admin removes a group member                                                | Member is removed and chat displays “X removed Y” message                       | Pass   | High     |                                |
| ARM_TC_003        | Add/Remove Members     | Admin shares group invite link                                              | Link is generated and can be copied/shared                                      | Pass   | Medium   |                                |
| ARM_TC_004        | Add/Remove Members     | Member uses invite link to join group                                       | Member joins and chat shows appropriate system message                          | Pass   | Medium   |                                |
| ARM_TC_005        | Add/Remove Members     | Non-admin attempts to remove a member                                       | Action fails or UI does not show the option                                     | Pass   | Medium   |                                |
| ARM_TC_006        | Add/Remove Members     | Admin revokes invite link                                                   | Old invite link becomes invalid for future use                                  | Pass   | Low      |                                |
| ARM_TC_007        | Add/Remove Members     | Admin adds member beyond group limit                                        | Error message appears (e.g., "Group is full")                                   | Pass   | Low      | Dependent on group size limit  |

---

## Platform Behavior Notes

| Platform       | Add Members | Remove Members | Invite via Link | Notes                                                            |
|----------------|-------------|----------------|------------------|------------------------------------------------------------------|
| Android        | ✅ Supported | ✅ Supported   | ✅ Supported     | Link/QR options in group info panel                              |
| iOS            | ✅ Supported | ✅ Supported   | ✅ Supported     | Same features; slightly different layout                         |
| Web/Desktop    | ✅ Supported | ✅ Supported   | ✅ Supported     | Admin actions available from group info or context menu          |

---

## Notes

- Removed members do not receive a notification but can see they are no longer part of the group.
- Invite links can be disabled at any time by admins.
- Some group types (e.g., communities) may follow slightly different member management rules.
