# WhatsApp – Group Mentions & Replies

This module covers how users can mention other members in group chats and reply to specific messages, including notifications and restrictions.

---

## Application Specifications

| Feature                 | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| Mention Format          | Type `@` followed by a member’s name to mention them                        |
| Autocomplete Suggestion | Autocomplete list appears when typing `@`                                   |
| Notifications           | Mentioned users receive a special notification                              |
| Replying to Messages    | Long press (mobile) or hover (web) to reply to specific messages            |
| Threaded Context        | Replies include original message context in thread                          |
| Restrictions            | Cannot mention users who left the group or have blocked the sender          |

---

## Test Cases

| Test Case ID   | Module                 | Test Case Description                                                   | Expected Result                                                | Status | Priority | Notes                           |
|----------------|------------------------|---------------------------------------------------------------------------|----------------------------------------------------------------|--------|----------|---------------------------------|
| GMR_TC_001     | Group Mentions & Replies | Mention an active group member using `@`                                 | Mention is inserted correctly and member is notified           | Pass   | High     |                                 |
| GMR_TC_002     | Group Mentions & Replies | Attempt to mention a user who left the group                             | User does not appear in mention list                           | Pass   | Medium   |                                 |
| GMR_TC_003     | Group Mentions & Replies | Reply to a message using long press (mobile) or hover (web)              | Reply is shown with original message reference                 | Pass   | High     |                                 |
| GMR_TC_004     | Group Mentions & Replies | Mention multiple users in a single message                               | All mentioned users are notified                               | Pass   | High     |                                 |
| GMR_TC_005     | Group Mentions & Replies | Mention a user who has blocked you                                       | Mention appears but the user receives no notification          | Pass   | Medium   |                                 |
| GMR_TC_006     | Group Mentions & Replies | View mention suggestions after typing `@`                                | Autocomplete list with members appears                         | Pass   | Medium   |                                 |
| GMR_TC_007     | Group Mentions & Replies | Reply to a reply (nested reply)                                          | Reply contains previous message chain                          | Pass   | Medium   | May not support deep nesting    |

---

## Platform Behavior Notes

| Platform       | Mentions | Autocomplete | Message Replies | Notes                              |
|----------------|----------|---------------|------------------|-------------------------------------|
| Android        | ✅ Yes   | ✅ Yes         | ✅ Yes           | Full support                        |
| iOS            | ✅ Yes   | ✅ Yes         | ✅ Yes           | Same as Android                     |
| Web/Desktop    | ✅ Yes   | ✅ Yes         | ✅ Yes           | Hover to reveal reply button       |

---

## Notes

- Mentions and replies help improve context in busy group conversations.
- If a user disables notifications for a group, mention notifications may still appear.
- All replies and mentions are end-to-end encrypted like normal messages.
