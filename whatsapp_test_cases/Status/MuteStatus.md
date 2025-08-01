# WhatsApp – Mute/Unmute Status Updates

This module documents the functionality of muting and unmuting status updates from specific contacts.

---

## Application Specifications

| Feature         | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| Mute Status     | Allows users to hide status updates from selected contacts                 |
| Unmute Status   | Allows users to unhide status updates from previously muted contacts       |
| Access Path     | Status tab > Long press contact > Mute OR scroll to “Muted updates” > Unmute |

- Muted statuses move to a separate section at the bottom.
- Muted contacts’ statuses are not shown in the main status feed.
- Unmuted contacts’ statuses are restored to visibility.
- Mute/unmute is a local setting only; contacts are not notified.

---

## Test Cases

| Test Case ID     | Module         | Test Case Description                                                    | Expected Result                                                          | Status | Priority | Notes                     |
|------------------|----------------|---------------------------------------------------------------------------|--------------------------------------------------------------------------|--------|----------|---------------------------|
| STC_TC_013       | Mute Status    | User long-presses a contact’s status and selects “Mute”                  | Contact’s status moves to “Muted updates” section                        | Pass   | High     |                           |
| STC_TC_014       | Mute Status    | Muted contact posts new status                                           | Status does not appear in main feed; only under “Muted updates”         | Pass   | High     |                           |
| STC_TC_015       | Unmute Status  | User scrolls to muted section and selects “Unmute” for a contact         | Contact’s future statuses appear in the main status feed again           | Pass   | Medium   |                           |
| STC_TC_016       | Mute Status    | User tries to mute a contact not in contact list                         | Option to mute is unavailable                                            | Pass   | Low      | Contact list restriction applies |
| STC_TC_017       | Mute Status    | User mutes multiple contacts consecutively                               | All selected contacts’ statuses are grouped under “Muted updates”       | Pass   | Medium   |                           |

---

## Platform Behavior Notes

| Platform       | Mute Status | Unmute Status | Notes                                                      |
|----------------|-------------|----------------|------------------------------------------------------------|
| Android        |  Supported |  Supported    | Long press or overflow menu on contact status              |
| iOS            |  Supported |  Supported    | Swipe actions or menu options available                    |
| Web/Desktop    |  Partial   |  Partial      | Some versions may not support mute/unmute functionality fully |

---

## Notes

- Muting does not block the contact or affect chat conversations.
- Muted statuses can still be viewed manually from the “Muted updates” section.
- Useful for reducing noise from frequently updated but unimportant statuses.
