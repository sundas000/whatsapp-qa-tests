# WhatsApp – Missed Call Notifications

This module documents the behavior and testing of missed call notifications in WhatsApp across platforms.

---

## Application Specifications

| Feature                  | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| Missed Call Alert        | Notifies the user when a call is missed (audio/video)                       |
| Notification Channels    | Push notification, in-app badge, call tab indication                        |
| Red Call Icon            | Missed calls are displayed in red in the Call History                       |
| Cross-device Sync        | Missed calls are synced and marked viewed if checked from any device        |
| Notification Dismissal   | Dismissing a notification doesn’t clear the missed status in call log       |

---

## Test Cases

| Test Case ID   | Module                  | Test Case Description                                                   | Expected Result                                                     | Status | Priority | Notes                        |
|----------------|-------------------------|--------------------------------------------------------------------------|----------------------------------------------------------------------|--------|----------|------------------------------|
| CALL_TC_032    | Missed Call Notifications | Verify user receives a push notification for a missed call              | Notification appears with contact name, call type, and time         | Pass   | High     |                              |
| CALL_TC_033    | Missed Call Notifications | Tap on missed call notification                                         | WhatsApp opens on call history or relevant chat                     | Pass   | High     |                              |
| CALL_TC_034    | Missed Call Notifications | Missed call appears red in call log                                     | Red icon and "Missed" label shown                                   | Pass   | Medium   |                              |
| CALL_TC_035    | Missed Call Notifications | Check if notification disappears when call is answered on another device| No notification is triggered or it gets auto-dismissed              | Pass   | Medium   |                              |
| CALL_TC_036    | Missed Call Notifications | Open WhatsApp on second device after missing call on first              | Missed call appears synced across both devices                      | Pass   | High     | Cross-device sync validation |
| CALL_TC_037    | Missed Call Notifications | Clear notification without opening app                                  | Missed indicator remains in app                                     | Pass   | Low      |                              |

---

## Platform Behavior Notes

| Platform     | Notification Behavior                   | Sync Status       | Badge/Icon on App     |
|--------------|------------------------------------------|-------------------|------------------------|
| Android      | Push + Icon + Call Tab highlight         | ✅ Yes            | ✅ Yes (numeric badge) |
| iOS          | Push + Red Badge + Missed call screen    | ✅ Yes            | ✅ Yes (badge count)   |
| Web/Desktop  | In-app banner only                       | 🔸 Partial        | 🔸 Limited             |

---

## Notes

- Notification may persist until app is opened even if device is unlocked.
- iOS delivers missed call alerts via system callkit as well.
- Mute/Do Not Disturb may suppress the notification but not the call log entry.

