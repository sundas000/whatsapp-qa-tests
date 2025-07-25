# WhatsApp Chat – Message Actions Functionality

## Overview
WhatsApp allows users to perform several actions on individual messages. These include reacting with emojis, forwarding to other chats, replying, starring, copying, deleting, selecting multiple messages, and more.

---

## Test Cases for Message Actions

| Test Case ID   | Module           | Test Case Description                                                         | Expected Result                                                                | Status | Priority | Notes                               |
|----------------|------------------|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------|--------|----------|--------------------------------------|
| MSGACT_TC_001  | Message Actions  | User long-presses a message                                                   | Message action toolbar appears with available options                           | Pass   | High     |                                      |
| MSGACT_TC_002  | Message Actions  | User taps the "reply" icon on a selected message                              | Reply preview appears above input field and links to original message           | Pass   | High     |                                      |
| MSGACT_TC_003  | Message Actions  | User taps the "forward" icon                                                  | Forward message interface opens, allowing contact selection                     | Pass   | High     |                                      |
| MSGACT_TC_004  | Message Actions  | User selects and forwards multiple messages                                   | All selected messages are forwarded in same order                               | Pass   | Medium   |                                      |
| MSGACT_TC_005  | Message Actions  | User taps the "star" icon                                                     | Message gets starred and is accessible from starred messages section            | Pass   | Medium   |                                      |
| MSGACT_TC_006  | Message Actions  | User taps the "delete" icon and chooses “Delete for me”                       | Message is removed from user’s view only                                        | Pass   | High     |                                      |
| MSGACT_TC_007  | Message Actions  | User selects “Delete for everyone” (within allowed time window)               | Message is deleted and replaced with “This message was deleted”                 | Pass   | High     |                                      |
| MSGACT_TC_008  | Message Actions  | User taps the "copy" icon                                                     | Message content is copied to clipboard                                          | Pass   | Medium   |                                      |
| MSGACT_TC_009  | Message Actions  | User selects multiple messages by long-pressing and tapping others            | All selected messages get highlighted with batch actions available              | Pass   | Medium   |                                      |
| MSGACT_TC_010  | Message Actions  | User taps a message and reacts with an emoji                                  | Emoji appears below message and is synced across devices                        | Pass   | Medium   | Supports up to 6 emoji reactions     |
| MSGACT_TC_011  | Message Actions  | User removes a previously added reaction                                      | Reaction disappears from message                                                | Pass   | Medium   |                                      |
| MSGACT_TC_012  | Message Actions  | User edits a sent message (if supported)                                      | Edited message is updated and marked with an “edited” tag                       | Pass   | Medium   | Feature currently limited to latest versions |

---

## Platform Behavior Notes

| Platform     | Behavior Summary                                                                          |
|--------------|--------------------------------------------------------------------------------------------|
| Android      | Full support for all message actions                                                       |
| iOS          | Same as Android                                                                            |
| Web          | All actions supported, reactions appear on hover                                           |
| Desktop      | Matches web behavior                                                                       |

---

## Functional Notes

- "Delete for everyone" is only available within ~2 minutes after sending.
- Reactions are limited to 6 emojis by default but may vary depending on WhatsApp updates.
- Starred messages are accessible via the chat menu or chat info.
- Forwarded messages are labeled as "Forwarded" to recipients.
- Editing messages requires both sender and receiver to be on updated app versions.

---

## Permissions Required

- No additional permissions required for message actions unless clipboard or file storage is accessed (for copying or exporting).

