# WhatsApp – Video Call Initiation

This module covers the functionality for initiating one-on-one video calls within WhatsApp across supported platforms.

---

## Application Specifications

| Feature           | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| Video Calling     | Allows users to start real-time video conversations with WhatsApp contacts |
| Availability      | Accessible from chat screen, contact profile, and Calls tab                |
| Requirements      | Internet access, camera and microphone permissions                         |
| UI Behavior       | Camera preview and switch camera options shown during call                 |

- Video calls are initiated using the camera icon in a chat or contact profile.
- Users must allow camera and microphone access.
- Video call switches to voice-only if camera is turned off mid-call.

---

## Test Cases

| Test Case ID      | Module                | Test Case Description                                                       | Expected Result                                                            | Status | Priority | Notes                         |
|-------------------|-----------------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------------|--------|----------|-------------------------------|
| CALL_TC_009        | Video Call Initiation | User initiates a video call from one-on-one chat                            | Video call starts with camera preview and connects if recipient accepts    | Pass   | High     |                               |
| CALL_TC_010        | Video Call Initiation | Recipient accepts video call                                                | Both users see live camera feed                                            | Pass   | High     |                               |
| CALL_TC_011        | Video Call Initiation | User denies camera permission                                               | App prompts for camera access; call downgraded or blocked if denied        | Pass   | High     |                               |
| CALL_TC_012        | Video Call Initiation | Internet disconnected during video call                                     | Call ends or is paused with reconnect attempts                             | Pass   | High     |                               |
| CALL_TC_013        | Video Call Initiation | User switches camera (front ↔ back) during call                             | Camera toggles successfully in real-time                                   | Pass   | Medium   |                               |
| CALL_TC_014        | Video Call Initiation | User turns off video during call                                            | Call continues in audio mode                                               | Pass   | Medium   |                               |
| CALL_TC_015        | Video Call Initiation | Call initiated via Calls tab history                                        | Video call reconnects to selected contact                                  | Pass   | Low      |                               |
| CALL_TC_016        | Video Call Initiation | Call attempt to blocked contact                                             | Video call is not initiated and user is informed                           | Pass   | Medium   |                               |

---

## Platform Behavior Notes

| Platform     | Video Call Support | Notes                                                    |
|--------------|--------------------|----------------------------------------------------------|
| Android      | ✅ Supported       | Picture-in-picture and camera switching supported        |
| iOS          | ✅ Supported       | iOS CallKit integration and native call interruptions    |
| Web/Desktop  | ✅ Supported       | Requires webcam and camera/mic permissions               |

---

## Notes

- Video resolution may adjust dynamically based on bandwidth.
- Incoming video calls show full-screen UI even when app is in background.
- Privacy settings may restrict incoming calls from unknown contacts.
