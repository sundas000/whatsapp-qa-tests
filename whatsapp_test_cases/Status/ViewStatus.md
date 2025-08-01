# WhatsApp – Viewing Status Updates

This module includes test cases for viewing WhatsApp Status updates from contacts and related interactions.

---

## Application Specifications

| Feature           | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| View Status       | Allows users to see status updates posted by their contacts                 |
| View Order        | Statuses are sorted based on contact and time, with unread shown first      |
| View Feedback     | Viewers can react or reply to a status directly                             |
| Indicators        | Unseen statuses have a colored ring around profile; seen statuses are faded |
| Read Receipts     | Determines whether your view is visible to the other person (if enabled)    |

- Tapping on a contact's profile in Status tab opens their latest update.
- Multiple updates from the same contact play sequentially.
- Read receipts off = anonymous status viewing.

---

## Test Cases

| Test Case ID     | Module         | Test Case Description                                                  | Expected Result                                                                | Status | Priority | Notes                                     |
|------------------|----------------|------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------|----------|-------------------------------------------|
| STC_TC_026       | View Status    | User views a contact's status                                          | Status opens full-screen; advances on tap or auto after duration              | Pass   | High     |                                           |
| STC_TC_027       | View Status    | User sees ring indicator around contact profile                        | Ring is colored for unseen; faded for seen statuses                           | Pass   | Medium   |                                           |
| STC_TC_028       | View Status    | User taps back during a status                                         | Status closes and returns to status list                                      | Pass   | Medium   |                                           |
| STC_TC_029       | View Status    | User replies to a status update                                        | Chat opens with the reply linked to the status snapshot                       | Pass   | High     |                                           |
| STC_TC_030       | View Status    | User swipes to next/previous contact status                            | Status from next/previous contact plays                                       | Pass   | Medium   |                                           |
| STC_TC_031       | View Status    | Contact posts multiple statuses                                        | All statuses play in sequence automatically                                   | Pass   | High     |                                           |
| STC_TC_032       | View Status    | User has disabled read receipts and views a status                     | Contact will not see the user in viewer list                                  | Pass   | Medium   |                                           |
| STC_TC_033       | View Status    | Status expires after 24 hours                                          | Status should no longer be visible in view list                               | Pass   | High     |                                           |
| STC_TC_034       | View Status    | User opens Status tab with no updates available                        | Empty state message is shown (“No status updates”)                            | Pass   | Low      |                                           |

---

## Platform Behavior Notes

| Platform       | View Status Support | Notes                                                                 |
|----------------|---------------------|-----------------------------------------------------------------------|
| Android        | ✅ Supported         | Full interaction and animation support                               |
| iOS            | ✅ Supported         | Same behavior as Android with slight animation differences            |
| Web/Desktop    | 🔸 Partial           | Can view status updates but some features (replies, reactions) limited|

---

## Notes

- Status views are logged unless read receipts are disabled.
- Replies to status open as direct messages with preview bubble.
- Status playback stops if user switches to another app.
