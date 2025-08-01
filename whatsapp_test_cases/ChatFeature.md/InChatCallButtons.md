# Test Cases – In-Chat Audio & Video Call Buttons

## Description
Covers the functionality of audio and video call buttons available in the top right corner of an open chat. These buttons initiate direct calls with the contact (or group) from within a conversation screen.

## Platforms Covered
- Android
- iOS
- WhatsApp Desktop/Web (where applicable)

## Preconditions
- User is logged into WhatsApp
- Chat (individual or group) is open
- Network connectivity is available

| Test Case ID       | Module                   | Test Case Description                                               | Expected Result                                                       | Status | Priority | Notes                                 |
|--------------------|--------------------------|----------------------------------------------------------------------|------------------------------------------------------------------------|--------|----------|---------------------------------------|
| ICCB_TC_001        | In-Chat Call Buttons      | Verify visibility of audio and video call icons in an individual chat | Both icons are present and tappable                                  | Pass   | High     |                                       |
| ICCB_TC_002        | In-Chat Call Buttons      | Tap on audio call icon                                               | Audio call is initiated with the contact                             | Pass   | High     |                                       |
| ICCB_TC_003        | In-Chat Call Buttons      | Tap on video call icon                                               | Video call is initiated with the contact                             | Pass   | High     |                                       |
| ICCB_TC_004        | In-Chat Call Buttons      | Tap audio/video call while no internet                               | Appropriate error message shown                                      | Pass   | High     |                                       |
| ICCB_TC_005        | In-Chat Call Buttons      | Check if call buttons appear in a group chat                         | Only video call icon appears in some versions or based on permissions | Pass   | Medium   | Depends on group policy               |
| ICCB_TC_006        | In-Chat Call Buttons      | Long-press on call button (if supported)                             | No context menu or haptic feedback unless intended                   | Pass   | Low      | Platform-specific behavior            |
| ICCB_TC_007        | In-Chat Call Buttons      | Audio call icon leads to WhatsApp call log after completion          | Call appears in call history                                         | Pass   | Medium   |                                       |
| ICCB_TC_008        | In-Chat Call Buttons      | Audio/video call icon disabled when contact is blocked               | Buttons are greyed out or non-functional                             | Pass   | High     |                                       |
