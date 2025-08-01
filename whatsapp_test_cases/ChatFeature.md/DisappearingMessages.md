# Disappearing Messages

## Description
Disappearing messages allow users to automatically remove messages from a chat after a selected duration. This enhances privacy and helps manage storage.

---

## Platforms
- Android
- iOS
- Web/Desktop

---

## Entry Points
- Open an individual or group chat
- Tap on contact/group name to open Chat Info
- Select **Disappearing Messages**

---

## Default Behavior
- Default setting is **Off**
- Once turned on, only new messages will disappear after the selected time

---

## Available Durations
- 24 hours
- 7 days
- 90 days

---

## Core Functional Test Cases

| TC# | Description | Steps | Expected Result |
|-----|-------------|-------|-----------------|
| 1 | Enable disappearing messages | Open chat > Tap name > Select Disappearing Messages > Choose 24 hours | Setting is updated, confirmation toast/message appears |
| 2 | Verify message expiration | Send a message in chat after enabling 24hr duration > Wait 24hrs | Message disappears after set time |
| 3 | Change duration | Go to Disappearing Messages > Switch from 24 hrs to 7 days | Setting updates, new messages follow updated duration |
| 4 | Disable disappearing messages | Toggle setting Off | No further messages disappear after that point |
| 5 | Check notification in chat | Enable/disable or change setting | System message appears in chat showing action taken |

---

## Negative Test Cases

| TC# | Description | Steps | Expected Result |
|-----|-------------|-------|-----------------|
| N1 | Send message before enabling | Send message before activating Disappearing Messages | Message persists after enabling feature |
| N2 | User changes phone timezone | Enable 24hr disappearing > Change device time | Disappearance still aligns to server timestamp, not local time |

---

## Notes
- Both sender and receiver are notified when disappearing messages are turned on or off.
- Admins in group chats can restrict who can change this setting.
