# WhatsApp – Chat Features

This module covers all core functionalities within a chat conversation, including sending/receiving text, voice, images, files, making calls, and using multimedia tools like emojis, reactions, and stickers. Ensures cross-platform consistency.

---

## Application Specifications

| Feature                 | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| Text Messaging          | Real-time exchange of plain text messages                                   |
| Voice Notes             | Long-press mic icon to send audio messages                                  |
| Media Sharing           | Send photos, videos, documents, contacts, location, and camera captures     |
| Emoji, GIFs & Stickers  | Access via emoji picker                                                     |
| Reactions               | React to messages with emojis                                               |
| Replies/Forwards        | Inline replies and forwarding to other chats                                |
| Audio/Video Calls       | One-on-one and group voice/video calls via call button                      |
| Message Info            | View delivery status (sent, delivered, seen)                                |
| Edit/Delete             | Edit or delete a sent message (with time limit)                             |

---

## Test Cases

| Test Case ID   | Module            | Test Case Description                                               | Expected Result                                                             | Status | Priority | Notes                                 |
|----------------|-------------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------|--------|----------|----------------------------------------|
| CHAT_TC_001    | Text Messaging    | Send a text message to contact                                      | Message appears in chat and shows ✓✓ ticks                                 | Pass   | High     |                                        |
| CHAT_TC_002    | Text Messaging    | Receive a text message                                              | Message appears in user’s chat list                                        | Pass   | High     |                                        |
| CHAT_TC_003    | Text Messaging    | Send long-form text message (multi-paragraph)                       | Full message is preserved and sent                                         | Pass   | Medium   |                                        |
| CHAT_TC_004    | Voice Notes       | Send a voice message by holding mic icon                            | Voice message sends and plays correctly                                    | Pass   | High     |                                        |
| CHAT_TC_005    | Voice Notes       | Playback received voice message                                     | Audio plays with play/pause options                                       | Pass   | High     |                                        |
| CHAT_TC_006    | Media Sharing     | Attach and send photo from gallery                                  | Image is sent and visible in chat                                          | Pass   | High     |                                        |
| CHAT_TC_007    | Media Sharing     | Take photo from camera and send                                     | Captured image is sent with preview                                       | Pass   | High     |                                        |
| CHAT_TC_008    | Media Sharing     | Share video file                                                    | Video sends with playable preview                                          | Pass   | High     | Max size limit enforced               |
| CHAT_TC_009    | Media Sharing     | Send a document (PDF, DOC, etc.)                                    | File is sent with icon and download link                                   | Pass   | High     |                                        |
| CHAT_TC_010    | Media Sharing     | Send contact info from address book                                 | Contact card sends with name/number                                        | Pass   | Medium   |                                        |
| CHAT_TC_011    | Media Sharing     | Share current location                                              | Location card is sent and opens in maps                                    | Pass   | Medium   | Mobile only                           |
| CHAT_TC_012    | Emojis            | Send emojis from emoji panel                                        | Emoji appears correctly in message                                         | Pass   | Medium   |                                        |
| CHAT_TC_013    | Stickers/GIFs     | Send sticker or animated GIF                                        | Sticker/GIF is delivered and animated                                      | Pass   | Medium   |                                        |
| CHAT_TC_014    | Reactions         | React to a message with emoji                                       | Small emoji reaction appears below the message                             | Pass   | Medium   | Desktop/Web: hover to view reactions |
| CHAT_TC_015    | Replies           | Inline reply to a previous message                                  | Quoted text appears above new message                                      | Pass   | High     |                                        |
| CHAT_TC_016    | Forwarding        | Forward a message to another contact                                | Message is sent with “Forwarded” label                                     | Pass   | Medium   |                                        |
| CHAT_TC_017    | Audio Calls       | Make an audio call from chat screen                                 | Call initiates and rings recipient                                         | Pass   | High     | Web/Desktop supported                 |
| CHAT_TC_018    | Video Calls       | Initiate a video call                                               | Video call UI opens and streams live video                                 | Pass   | High     | Not on WhatsApp Web                   |
| CHAT_TC_019    | Group Calls       | Start group voice/video call                                        | Call includes all selected members                                         | Pass   | Medium   | Max participants enforced             |
| CHAT_TC_020    | Message Info      | View sent message info                                              | Shows status: Sent, Delivered, Read                                        | Pass   | Medium   | Long-press > “Info”                  |
| CHAT_TC_021    | Delete for Me     | Delete message for self                                             | Message is removed only from user’s screen                                 | Pass   | Medium   |                                        |
| CHAT_TC_022    | Delete for Everyone | Delete message for everyone within time limit                      | Message replaced with “This message was deleted” for all participants      | Pass   | High     | ~2-minute time limit                  |
| CHAT_TC_023    | Edit Sent Message | Edit a recently sent message                                        | Message updates with “Edited” label                                        | Pass   | Medium   | Available in latest versions          |

---

## Platform Notes

| Feature             | Android | iOS   | Web/Desktop       | Notes                                         |
|---------------------|---------|-------|-------------------|-----------------------------------------------|
| Audio/Video Calls    | ✅       | ✅     | ✅ (Desktop only) | Video calls not on WhatsApp Web              |
| Voice Notes          | ✅       | ✅     | ✅                |                                             |
| Media Sharing        | ✅       | ✅     | ✅                | Web supports drag & drop                     |
| Reactions            | ✅       | ✅     | ✅                | Hover required on Web/Desktop                |
| Edit Message         | ✅       | ✅     | ✅                | Only supported in latest builds              |
| Reply/Forward        | ✅       | ✅     | ✅                |                                             |
| Document Sharing     | ✅       | ✅     | ✅                | Desktop allows direct file drag              |
| Location Sharing     | ✅       | ✅     | ❌                | Not available on Web/Desktop                 |
| GIF/Sticker Support  | ✅       | ✅     | ✅                | Search panel may vary slightly               |

---

## Known Constraints

- Certain features (like location sharing, camera capture) are restricted to mobile platforms.
- Video calls not supported on **WhatsApp Web** but available on Desktop app.
- GIF search engines vary based on region and platform (e.g., Tenor vs GIPHY).
- Large file size uploads may fail silently or with error, depending on network.

---

## Suggestions

- Test call features under both Wi-Fi and mobile data.
- Validate media rendering and download speeds for various file sizes.
- Check message status under airplane mode, flaky internet, or offline recipient.

