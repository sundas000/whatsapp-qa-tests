# WhatsApp – Permissions: Contacts & Media Access

This test suite verifies how WhatsApp handles permission requests for accessing the device's **contacts**, **photos**, **videos**, and **files** during or after setup.

---

## Application Specifications

- **Contacts Access**:
  - Required to display your device contacts who use WhatsApp.
  - Access is requested during first-time setup or when trying to start a chat.

- **Media Access**:
  - Required for sharing files (photos, videos, documents).
  - Access request is triggered when user attempts to upload or share media.

- **Permission prompts** behave differently on Android and iOS:
  - Android: runtime permissions dialog appears.
  - iOS: system popup prompts user.
  - Web/Desktop: browser or OS-level file selector only (no persistent access).

---

## Test Cases

| Test Case ID     | Module             | Test Case Description                                                                 | Expected Result                                                                 | Status | Priority | Notes                                       |
|------------------|--------------------|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|--------------------------------------------|
| PERM_TC_001      | Contacts Permission | User launches chat screen for first time on Android                                   | App should show permission prompt for contacts                                  | Pass   | High     | Android 11+ requires runtime permission     |
| PERM_TC_002      | Contacts Permission | User denies contacts access and opens contacts list                                   | App should show "Allow Access" UI or display empty state with message          | Pass   | High     | All platforms                              |
| PERM_TC_003      | Contacts Permission | User grants contacts permission after initially denying                               | Contacts list should be refreshed and visible                                   | Pass   | High     | User must go to Settings manually on iOS   |
| PERM_TC_004      | Media Permission    | User tries to send photo/video from gallery                                           | App should request media access permission                                      | Pass   | High     | File picker opens after permission granted |
| PERM_TC_005      | Media Permission    | User denies media access and attempts to send a file                                  | App should show "Access Denied" or ask for permissions again                    | Pass   | High     | Web: falls back to manual file picker      |
| PERM_TC_006      | Media Upload        | User selects a valid image and uploads it in chat                                     | Image should be displayed in the chat preview and sent successfully             | Pass   | Medium   | Web/Desktop only allow file picker         |
| PERM_TC_007      | Media Upload        | User tries to upload an unsupported or corrupted media file                           | App should display an appropriate error message                                 | Pass   | Medium   | Format validation required                 |
| PERM_TC_008      | Multiple Permissions| User grants all permissions (contacts, media) in one go on Android                    | All features should work without interruptions                                  | Pass   | High     | Android 13+ may bundle permission dialogs  |
| PERM_TC_009      | System Settings     | User revokes permissions from system settings after granting                          | App should handle it gracefully and prompt user again or show restricted UI     | Pass   | Medium   | OS-dependent behavior                      |
| PERM_TC_010      | iOS Limited Access  | iOS user selects “Limited Photos” instead of “Allow All Photos”                       | WhatsApp should show media selector for selected photos only                    | Pass   | Low      | iOS 14+ feature                            |

---

## Platform Behavior Notes

| Platform       | Notes                                                                 |
|----------------|-----------------------------------------------------------------------|
| Android        | Runtime permission dialogs shown when feature is first used          |
| iOS            | Uses system-level permission UI; "Limited" access possible for media |
| WhatsApp Web   | No contacts access; file access done via browser file picker         |
| Desktop App    | Accesses files using OS file dialog; no contact syncing              |
