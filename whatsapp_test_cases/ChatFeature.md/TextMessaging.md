# WhatsApp Chat – Text Messaging Feature

## Test Cases for Text Messaging

| Test Case ID   | Module         | Test Case Description                                               | Expected Result                                                             | Status | Priority | Notes                                   |
|----------------|----------------|----------------------------------------------------------------------|------------------------------------------------------------------------------|--------|----------|------------------------------------------|
| TM_TC_001      | Text Messaging | User sends a plain text message                                     | Message should be sent and delivered to recipient                          | Pass   | High     |                                           |
| TM_TC_002      | Text Messaging | User sends a text message in airplane mode                          | Message should remain in sending state and retry once network is restored  | Pass   | High     |                                           |
| TM_TC_003      | Text Messaging | User edits a sent message                                           | Message content should update with 'edited' label                          | Pass   | High     | Feature available on latest builds only  |
| TM_TC_004      | Text Messaging | User deletes a message for themselves                               | Message should disappear from sender's view only                           | Pass   | Medium   |                                           |
| TM_TC_005      | Text Messaging | User deletes a message for everyone                                 | Message should be removed from both sender and recipient chat              | Pass   | High     | Time-limited feature                     |
| TM_TC_006      | Text Messaging | User sends a message with special characters/emojis                 | Message should be sent and rendered properly                               | Pass   | Low      |                                           |
| TM_TC_007      | Text Messaging | User copies and pastes text into input field                        | Pasted text should appear correctly                                        | Pass   | Medium   |                                           |
| TM_TC_008      | Text Messaging | User replies to a specific message                                  | Quoted message should appear above reply                                   | Pass   | Medium   |                                           |
| TM_TC_009      | Text Messaging | User forwards a message to another contact                          | Message should appear in target chat with 'Forwarded' label                | Pass   | Medium   |                                           |
| TM_TC_010      | Text Messaging | User sends long-form message (multi-line)                           | Message should wrap and display correctly on both sender and receiver side | Pass   | Medium   |                                           |

---

## Platform Behavior Notes

| Platform     | Behavior Summary                                                      |
|--------------|------------------------------------------------------------------------|
| Android      | Full support for all text messaging features                          |
| iOS          | Consistent experience; edit/delete works as expected                  |
| Web          | Clipboard access, reply/forward supported via right-click or hover UI |
| Desktop      | Same as Web; native shortcut keys supported                           |

---

## Functional Notes

- Message status indicators:
  - Single check: Sent
  - Double check: Delivered
  - Blue check: Seen
- Edit functionality is only available within a time window (approx. 15 minutes)
- Delete for everyone may fail if recipient has already read the message

---

## Required Permissions

- None (basic text messaging does not require special permissions)
