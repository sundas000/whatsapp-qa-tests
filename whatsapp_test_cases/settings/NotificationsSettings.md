# Notifications Settings

## Feature Description
Notifications Settings in WhatsApp allow users to control how they receive alerts for messages, groups, and calls. Users can configure tones, vibration patterns, popup alerts, and notification lights based on their preferences.

## Feature Specifications

| Item                          | Description                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| Message Notifications         | Set tone, vibration pattern, popup notifications, light color, and priority |
| Group Notifications           | Same configuration options as message notifications                        |
| Call Notifications            | Set ringtone and vibration pattern for incoming WhatsApp calls              |
| High Priority Notifications   | Enable/disable heads-up notifications on Android                            |
| Notification Tones (iOS)      | Select notification tones via system sound picker                           |
| In-App Notifications          | Control alerts while using the app (banners, sounds, vibrations)            |
| Reaction Notifications        | Toggle receiving alerts when someone reacts to your message                 |

## Test Cases

| Test Case ID | Scenario                                   | Steps                                                                                         | Expected Result                                                        | Platform       |
|--------------|--------------------------------------------|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------|----------------|
| TC-NS-01     | Change message notification tone           | Settings > Notifications > Message Notifications > Notification Tone                         | Selected tone plays when a new message is received                     | Android, iOS   |
| TC-NS-02     | Turn off vibration for group messages      | Settings > Notifications > Group Notifications > Vibration > Off                             | Group messages are received silently without vibration                 | Android, iOS   |
| TC-NS-03     | Enable high priority notifications         | Settings > Notifications > Enable “High Priority Notifications”                              | Incoming messages appear as heads-up notifications                     | Android        |
| TC-NS-04     | Change in-app notification style           | Settings > Notifications > In-App Notifications > Change alert preferences                   | Notifications behave as per selected alert options during app usage    | Android, iOS   |
| TC-NS-05     | Disable reaction notifications             | Settings > Notifications > Toggle off “Reaction Notifications”                               | No alerts are shown when someone reacts to your message                | Android, iOS   |
| TC-NS-06     | Change call ringtone                       | Settings > Notifications > Call Notifications > Ringtone                                     | Selected ringtone plays for incoming WhatsApp calls                    | Android, iOS   |

## Platform Behavior

- **Android**: Offers detailed customization including notification lights, vibration intensity, popup alerts, and ringtone changes.
- **iOS**: Notification settings are linked more tightly with system notification settings; customization is more limited than Android.
- **Web/Desktop**: Notification settings (sound and preview) must be configured via browser or desktop app settings independently.

## Notes
- Disabling notification sound or vibration does not block message delivery; it only suppresses alerts.
- Reaction notifications are enabled by default and can be toggled off.
- In-app notifications are useful for distinguishing between foreground and background alerts.
