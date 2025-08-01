# Linked Devices Settings

## Feature Description
The Linked Devices feature allows users to link their WhatsApp account to multiple devices such as desktops or browsers, enabling them to use WhatsApp Web/Desktop independently of their phone (within session limits).

## Feature Specifications

| Item                      | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| View Linked Devices       | Displays all currently linked devices with session info                     |
| Link New Device           | Initiates QR scanner to link another device                                 |
| Remove Linked Device      | Allows manual removal of a previously linked device                         |
| Active Session Details    | Shows last active time, device type, browser used, etc.                     |

## Test Cases

| Test Case ID | Scenario                           | Steps                                                                 | Expected Result                                                           | Platform         |
|--------------|------------------------------------|-----------------------------------------------------------------------|----------------------------------------------------------------------------|------------------|
| TC-LD-01     | View linked devices list           | Settings > Linked Devices                                             | All active sessions are listed with time stamps and device details         | Android, iOS     |
| TC-LD-02     | Link a new device                  | Settings > Linked Devices > Link Device > Scan QR on Web/Desktop     | Device is successfully linked and appears in the session list              | Android, iOS     |
| TC-LD-03     | Remove a linked device             | Settings > Linked Devices > Tap on a session > Log Out                | Device is removed and session is terminated                                | Android, iOS     |
| TC-LD-04     | Check device activity timestamps   | Settings > Linked Devices                                             | Each device displays accurate last active timestamp                        | Android, iOS     |
| TC-LD-05     | Limit on number of devices         | Try linking a 5th device (when 4 are already linked)                  | Shows error or replaces oldest session depending on current policy         | Android, iOS     |

## Platform Behavior

- **Android & iOS**: Accessed via `Settings > Linked Devices`.
- **Web/Desktop**: Requires scanning QR from mobile device during login.
- Sessions persist even when phone is offline (with recent updates).

## Notes
- Each session shows the platform (Windows/Mac/Linux) and browser (if Web).
- Users receive notifications when a new device is linked.
- QR code expires quickly for security.
