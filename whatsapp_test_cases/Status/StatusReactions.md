# WhatsApp – Status Reactions

This module includes test cases for reacting to a contact’s status using emojis or quick reactions, similar to message reactions.

---

## Application Specifications

| Feature           | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| Status Reactions | Allows users to respond to a contact’s status with a predefined emoji       |
| Quick Access      | Emoji reactions appear when swiping up on a status or tapping reaction icon |
| Delivery          | Reaction is sent as a direct message in the chat with that contact         |

---

## Test Cases

| Test Case ID     | Module           | Test Case Description                                                       | Expected Result                                                                  | Status | Priority | Notes                                         |
|------------------|------------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|--------|----------|-----------------------------------------------|
| STS_TC_016       | Status Reactions | User swipes up on a status and selects an emoji reaction                    | Reaction is sent as a message to the contact                                     | Pass   | High     | Applies to text, image, and video statuses    |
| STS_TC_017       | Status Reactions | User taps emoji icon and selects from available reactions                   | Selected emoji is sent to contact via chat                                       | Pass   | High     |                                                |
| STS_TC_018       | Status Reactions | User selects reaction and then cancels before sending                       | No reaction is sent; no message appears                                          | Pass   | Low      |                                                |
| STS_TC_019       | Status Reactions | User reacts to an expired status                                            | Reaction is not allowed; user is notified                                        | Pass   | Medium   |                                                |
| STS_TC_020       | Status Reactions | User receives reaction from another contact                                 | Reaction appears as an incoming message in personal chat                         | Pass   | High     |                                                |
| STS_TC_021       | Status Reactions | User attempts to react in offline mode                                      | Reaction is queued and sent once connection is restored                          | Pass   | Medium   |                                                |
| STS_TC_022       | Status Reactions | User’s reaction does not send due to app crash                              | Reaction is lost; no message is delivered                                        | Pass   | Low      |                                                |

---

## Platform Behavior Notes

| Platform       | Status Reactions | Notes                                                           |
|----------------|------------------|-----------------------------------------------------------------|
| Android        | ✅ Supported     | Quick swipe up or emoji icon tap brings up reaction menu       |
| iOS            | ✅ Supported     | Similar swipe and tap behavior                                  |
| Web/Desktop    | 🔸 Partially     | Emoji reaction support may be limited or unavailable            |

---

## Notes

- Reactions are always sent as messages in the 1:1 chat with the contact.
- There is no way to view aggregate reactions on a status like in Instagram.
- The list of available emojis is predefined and not user-customizable.
