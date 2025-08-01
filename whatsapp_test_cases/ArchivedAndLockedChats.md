# WhatsApp – Archived & Locked Chats

This module includes test cases for the following two features:

1. **Archived Chats** – Chats that are hidden from the main view but stored for later access
2. **Chat Lock (Locked Chats)** – Sensitive chats can be locked behind device authentication (passcode, biometrics)

---

## Application Specifications

| Feature           | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| Archived Chats    | Users can archive any chat to remove it from the main list without deleting |
| Locked Chats      | Selected chats can be locked via fingerprint/passcode and hidden in a secure section |

- Archived and Locked chats are accessed from the top or dropdown (varies by platform).
- Notifications for locked chats can be hidden.
- Locked chats require reauthentication to open.
- Both features can be accessed through chat long press > options.

---

## Test Cases

| Test Case ID     | Module             | Test Case Description                                                     | Expected Result                                                                 | Status | Priority | Notes                                      |
|------------------|--------------------|----------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|--------------------------------------------|
| ARC_TC_001       | Archived Chats     | User archives a chat from chat list                                       | Chat should move to “Archived” section and disappear from main list              | Pass   | High     |                                            |
| ARC_TC_002       | Archived Chats     | User navigates to “Archived” section                                      | All archived chats should be visible                                            | Pass   | High     |                                            |
| ARC_TC_003       | Archived Chats     | User receives new message in archived chat (notifications ON)            | Chat should reappear in main chat list                                          | Pass   | Medium   | Platform dependent (can be changed in settings) |
| ARC_TC_004       | Archived Chats     | User disables “Keep archived chats muted”                                 | Archived chat pops up to main list on new message                               | Pass   | Low      |                                            |
| ARC_TC_005       | Archived Chats     | User unarchives a chat                                                    | Chat should reappear in main chat list                                          | Pass   | High     |                                            |
| LOCK_TC_001      | Locked Chats       | User enables lock for a chat                                              | Chat should move to locked section and require authentication to open           | Pass   | High     |                                            |
| LOCK_TC_002      | Locked Chats       | User tries to access locked chat                                          | System prompt for biometrics or passcode appears                                | Pass   | High     |                                            |
| LOCK_TC_003      | Locked Chats       | User fails authentication                                                 | Access is denied and chat is not opened                                         | Pass   | High     |                                            |
| LOCK_TC_004      | Locked Chats       | User disables lock from chat settings                                     | Chat moves back to regular list                                                 | Pass   | Medium   |                                            |
| LOCK_TC_005      | Locked Chats       | Notifications for locked chat are hidden                                  | Message content does not appear in notification area                            | Pass   | Medium   |                                            |
| LOCK_TC_006      | Locked Chats       | Locked chats section visible only with successful auth                    | “Locked Chats” view does not open until verified                                | Pass   | High     |                                            |
| LOCK_TC_007      | Locked Chats       | App switcher does not expose locked content visually                      | Locked chat contents are hidden in recent app previews                          | Pass   | Medium   | Applies to mobile platforms only           |

---

## Platform Behavior Notes

| Platform       | Archived Chats | Locked Chats | Notes                                                                 |
|----------------|----------------|--------------|-----------------------------------------------------------------------|
| Android        | ✅ Supported   | ✅ Supported  | Full functionality including biometric locks                          |
| iOS            | ✅ Supported   | ✅ Supported  | Biometric/FaceID support, consistent behavior with Android            |
| Web/Desktop    | ✅ Supported   | 🔸 Partially  | Archived supported; Locked Chats not yet supported in all versions    |

---

## Notes

- Biometric fallback is passcode if unavailable.
- Locked Chats are protected even after app restarts.
- Archived chats can be configured not to unarchive on new messages.
