# WhatsApp Chat – Message Delete, Edit, and Info

## Overview
WhatsApp allows users to delete and edit sent messages within specific time constraints. Additionally, users can view detailed message delivery information such as sent, delivered, and read timestamps through the "Message Info" option.

---

## Test Cases for Message Delete, Edit, and Info

| Test Case ID    | Module               | Test Case Description                                                           | Expected Result                                                                 | Status | Priority | Notes                                      |
|-----------------|----------------------|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|---------------------------------------------|
| MSGDEL_TC_001   | Message Delete       | User deletes message using “Delete for me”                                      | Message is removed only from the user's chat                                     | Pass   | High     |                                              |
| MSGDEL_TC_002   | Message Delete       | User deletes message using “Delete for everyone” within time window             | Message is removed for all and replaced with “This message was deleted”         | Pass   | High     | ~2-minute limit for delete for everyone     |
| MSGDEL_TC_003   | Message Delete       | User tries to delete message for everyone after time window                     | Only “Delete for me” option is available                                         | Pass   | High     |                                              |
| MSGDEL_TC_004   | Message Delete       | User selects and deletes multiple messages                                      | All selected messages are deleted as per the chosen option                      | Pass   | Medium   |                                              |

| MSGEDT_TC_001   | Message Edit         | User taps and edits a recently sent message                                     | Message updates with “Edited” tag                                               | Pass   | High     | Edit allowed within ~15 minutes             |
| MSGEDT_TC_002   | Message Edit         | User tries editing a message after allowed time limit                          | Edit option no longer appears                                                    | Pass   | High     |                                              |
| MSGEDT_TC_003   | Message Edit         | Recipient views the edited message                                              | Message appears updated and tagged as "Edited"                                  | Pass   | High     | Requires updated app version on recipient   |

| MSGINF_TC_001   | Message Info         | User long-presses a message and taps "Info"                                     | Info screen opens showing Sent, Delivered, and Read status                      | Pass   | Medium   | May vary depending on recipient's privacy   |
| MSGINF_TC_002   | Message Info         | Info screen shows "Read by" with timestamp (in group chat)                      | Correct read time and names are displayed                                       | Pass   | Medium   | Group read receipts must be enabled         |
| MSGINF_TC_003   | Message Info         | Info screen shows “Delivered” but not “Read”                                    | Indicates message was received but not read                                     | Pass   | Medium   |                                              |
| MSGINF_TC_004   | Message Info         | Info shows "Played" for voice note                                              | Status updates to "Played" once user hears the voice note                       | Pass   | Medium   |                                              |

---

## Platform Behavior Notes

| Platform     | Behavior Summary                                                                 |
|--------------|-----------------------------------------------------------------------------------|
| Android      | Fully supports delete, edit, and message info                                    |
| iOS          | Fully supported                                                                   |
| Web          | Edit and Info are supported. Message Info shows in side drawer                   |
| Desktop      | Same as Web                                                                       |

---

## Functional Notes

- “Delete for everyone” works only if both sender and receiver are using supported WhatsApp versions.
- Edited messages remain editable only for a limited time (~15 minutes).
- Message Info is not available for all messages, especially if chat participants have disabled read receipts.

---

## Permissions

- No special permissions required for these features.
