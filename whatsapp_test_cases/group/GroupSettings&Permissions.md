# WhatsApp – Group Settings & Permissions

This module documents the settings available to group admins for managing participation, message permissions, and group info visibility.

---

## Application Specifications

| Setting/Feature                  | Description                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| Edit Group Info                  | Admins can restrict who can edit group name, icon, and description          |
| Send Messages                    | Admins can set whether only admins or all participants can send messages   |
| Approve New Participants         | Admins can enable/disable participant approval for joining via invite link |
| Group Invite Link                | Group can be joined via a shareable invite link (admin can reset it)       |
| Disappearing Messages            | Set timer for auto-deletion of group messages (optional)                   |
| Community Additions (if linked) | Community admins can manage group-level visibility and info                |

- These settings are accessible from the Group Info > Group Settings section.
- Only admins have access to modify these settings.

---

## Test Cases

| Test Case ID     | Module                   | Test Case Description                                                                 | Expected Result                                                           | Status | Priority | Notes                      |
|------------------|---------------------------|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------|--------|----------|----------------------------|
| GSP_TC_001        | Group Settings            | Restrict editing of group info to admins only                                         | Non-admins cannot change group name, photo, or description                | Pass   | High     |                            |
| GSP_TC_002        | Group Settings            | Set group to “Only Admins Can Send Messages”                                          | Non-admins cannot send messages                                           | Pass   | High     |                            |
| GSP_TC_003        | Group Settings            | Allow all participants to send messages                                               | All participants can send messages                                        | Pass   | High     |                            |
| GSP_TC_004        | Group Settings            | Enable participant approval                                                           | Admins are prompted to approve or reject join requests                    | Pass   | Medium   |                            |
| GSP_TC_005        | Group Settings            | Generate and share group invite link                                                  | Invite link is created and can be copied/shared                           | Pass   | Medium   |                            |
| GSP_TC_006        | Group Settings            | Reset group invite link                                                               | Old link becomes invalid; new link is generated                           | Pass   | Medium   |                            |
| GSP_TC_007        | Group Settings            | Apply Disappearing Messages with 24-hour interval                                     | Messages disappear automatically after 24 hours                           | Pass   | Medium   | Check for all timer ranges |

---

## Platform Behavior Notes

| Platform       | Group Settings Access | Permissions Editable | Notes                                             |
|----------------|------------------------|-----------------------|---------------------------------------------------|
| Android        | ✅ Supported           | ✅ Admins only        | Accessed via Group Info > Group Settings          |
| iOS            | ✅ Supported           | ✅ Admins only        | Same functionality with slight UI differences     |
| Web/Desktop    | ✅ Supported           | ✅ Admins only        | Fewer setting icons, but behavior is consistent   |

---

## Notes

- When “Only Admins Can Send” is enabled, a banner is shown in the group chat for non-admins.
- Changes to group settings appear in the chat as system messages.
- Group invite link can be revoked anytime, instantly invalidating prior shared links.
- Disappearing messages setting applies to all participants equally.
