# WhatsApp – Reply to a Status

This module outlines test cases for replying to someone’s WhatsApp Status update. Replies appear as direct messages in the chat with the contact.

---

## Application Specifications

| Feature             | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| Reply to Status     | Allows users to send a message in response to a contact's status update     |
| Reply Format        | Replies appear as chat messages quoting the original status content         |
| Media Support       | Replies can include text, emojis, and supported media (images, voice notes) |

---

## Test Cases

| Test Case ID     | Module            | Test Case Description                                                     | Expected Result                                                               | Status | Priority | Notes                                       |
|------------------|-------------------|----------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------|----------|---------------------------------------------|
| STS_TC_006       | Reply to Status   | User replies to a status with text                                        | Message should be sent to the contact quoting the original status             | Pass   | High     | Text should include quoted preview of status |
| STS_TC_007       | Reply to Status   | User replies with image or voice note                                     | Media should be sent in chat, quoted with the status preview                  | Pass   | High     | Depends on media type support               |
| STS_TC_008       | Reply to Status   | Contact has disabled status replies                                       | User should see a message indicating that replies are disabled                | Pass   | Medium   |                                             |
| STS_TC_009       | Reply to Status   | User replies to expired status                                            | Status should no longer be replyable; reply action should be disabled         | Pass   | Medium   |                                             |
| STS_TC_010       | Reply to Status   | Network disconnected during reply                                         | Message remains unsent with error until network restores                      | Pass   | High     | Standard messaging retry behavior applies   |

---

## Platform Behavior Notes

| Platform       | Reply to Status | Notes                                                      |
|----------------|------------------|------------------------------------------------------------|
| Android        | ✅ Supported     | Replies sent directly to chat thread                       |
| iOS            | ✅ Supported     | Same as Android                                            |
| Web/Desktop    | 🔸 Partially     | Reply option visible but limited to text-only in some cases |

---

## Notes

- Replies appear as regular chat messages but include a “Replied to Status” label.
- The status preview in reply may be limited for video/photo statuses on Web/Desktop.
- Status replies respect individual chat privacy settings (e.g., blocked users can’t reply).
