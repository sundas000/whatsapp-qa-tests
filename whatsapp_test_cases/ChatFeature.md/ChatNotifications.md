# Chat Feature: Notification Settings (Mute/Alert)

## Description
Allows the user to manage notification preferences for individual chats or groups, including muting alerts for a set duration or turning them back on.

---

## Platforms
- Android
- iOS
- Web/Desktop

---

## Pre-conditions
- User is logged in
- At least one active chat exists

---

## Functional Test Cases

| TC ID | Test Scenario | Steps to Execute | Expected Result |
|-------|----------------|------------------|------------------|
| CN-01 | Mute chat notifications | 1. Open any chat <br> 2. Tap chat header to view info <br> 3. Tap “Mute notifications” <br> 4. Select duration (e.g., 8 hours) | Chat is muted for the selected duration, bell icon with a line appears |
| CN-02 | Unmute chat notifications | 1. Open chat info where notifications are muted <br> 2. Tap “Unmute notifications” | Notifications are re-enabled for the chat |
| CN-03 | Muted chat still receives messages silently | 1. Mute a chat <br> 2. Ask sender to send message <br> 3. Observe incoming message | Message appears in chat without notification sound/popup |
| CN-04 | Mute notifications from main chat list | 1. Long press a chat on main screen <br> 2. Tap mute icon from top action bar | Chat is muted successfully from list view |

---

## Notes
- Muting a chat affects only notification alerts; messages still appear in the chat normally.
- The mute setting can be overridden by custom notification tones (Android).
