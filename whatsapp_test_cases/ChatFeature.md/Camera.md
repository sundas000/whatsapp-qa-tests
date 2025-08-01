# WhatsApp Chat – Camera Functionality

## Test Cases for In-Chat Camera Use

| Test Case ID   | Module      | Test Case Description                                                       | Expected Result                                                                 | Status | Priority | Notes                                 |
|----------------|-------------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|----------------------------------------|
| CAM_TC_001     | Camera      | User taps the camera icon from within a chat                                | Camera interface should open within WhatsApp                                     | Pass   | High     |                                       |
| CAM_TC_002     | Camera      | User takes a photo and taps send                                            | Photo is sent to the selected chat and visible in conversation                   | Pass   | High     |                                       |
| CAM_TC_003     | Camera      | User takes a video and taps send                                            | Video is recorded and sent successfully                                          | Pass   | High     |                                       |
| CAM_TC_004     | Camera      | User adds a caption before sending photo or video                           | Caption is sent along with the media                                             | Pass   | Medium   |                                       |
| CAM_TC_005     | Camera      | User previews media before sending                                          | Preview screen should appear with option to send, edit, or cancel                | Pass   | Medium   |                                       |
| CAM_TC_006     | Camera      | User switches between front and back cameras                               | Camera switches successfully without crash                                       | Pass   | Medium   |                                       |
| CAM_TC_007     | Camera      | User denies camera permission when prompted                                 | App shows proper permission warning and does not crash                          | Pass   | High     | Should be tested across all platforms |
| CAM_TC_008     | Camera      | User reopens camera after granting permissions                              | Camera works normally without needing to restart app                            | Pass   | Medium   |                                       |
| CAM_TC_009     | Camera      | User taps and holds to record a video (if supported)                        | Video recording continues while hold is active and stops when released          | Pass   | Medium   | Android/IOS-specific behavior         |
| CAM_TC_010     | Camera      | User sends media with low network                                           | Media remains in "sending…" state and retries on reconnection                   | Pass   | High     |                                       |

---

## Platform Behavior Notes

| Platform     | Behavior Summary                                                                    |
|--------------|--------------------------------------------------------------------------------------|
| Android      | Full support for in-app camera, toggle, flash, and captioning                       |
| iOS          | Same as Android; UI may vary slightly on capture screen                             |
| Web          | Prompts for browser camera permission; preview and capture available                |
| Desktop      | Supports webcam if connected; camera access controlled by OS-level permissions      |

---

## Functional Notes

- Captured media can be sent to individual and group chats.
- Captions support emojis and plain text.
- Option to add filters, crop, and annotate may vary by platform.
- Tapping gallery icon next to camera can open recent media from device storage.

---

## Required Permissions

- **Camera Access** – Mandatory for capturing new photos or videos.
- **Microphone** – Needed when recording video with audio.
- **Storage (optional)** – For saving captured media locally (Android).

