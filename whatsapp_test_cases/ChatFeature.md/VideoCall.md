# WhatsApp Chat – Video Call Feature

## Test Cases for Video Calling

| Test Case ID     | Module        | Test Case Description                                                  | Expected Result                                                        | Status | Priority | Notes                                    |
|------------------|---------------|------------------------------------------------------------------------|------------------------------------------------------------------------|--------|----------|------------------------------------------|
| VC_TC_001        | Video Call    | User taps the video call icon inside an active chat                   | A video call screen should open, ringing the recipient                 | Pass   | High     |                                          |
| VC_TC_002        | Video Call    | Receiver accepts the video call                                       | Both users should be able to see and talk to each other via camera    | Pass   | High     |                                          |
| VC_TC_003        | Video Call    | User rejects the incoming video call                                  | Call should end and show "Missed video call" in chat                  | Pass   | Medium   |                                          |
| VC_TC_004        | Video Call    | User switches camera during video call                                | Camera should switch between front and rear in real-time              | Pass   | Medium   |                                          |
| VC_TC_005        | Video Call    | User mutes microphone during video call                               | The user’s audio should be turned off; mute icon should display       | Pass   | Medium   |                                          |
| VC_TC_006        | Video Call    | User switches to voice call during ongoing video call                 | Video should turn off and audio-only call should continue             | Pass   | Medium   | Depends on platform support              |
| VC_TC_007        | Video Call    | App is minimized during video call                                    | Call should continue in floating PiP (picture-in-picture) view        | Pass   | Medium   | Platform-dependent behavior              |
| VC_TC_008        | Video Call    | User has no camera permissions                                        | App should show permission dialog or a relevant error message         | Pass   | High     |                                          |
| VC_TC_009        | Video Call    | Network drops during call                                             | Call should auto-reconnect or end gracefully with a retry option      | Pass   | High     |                                          |
| VC_TC_010        | Video Call    | Video call with blocked contact                                       | User should not be able to initiate a video call                      | Pass   | High     |                                          |

---

##  Platform Behavior Notes

| Platform        | Behavior Summary                                                                 |
|----------------|-----------------------------------------------------------------------------------|
| Android         | Full support for video call UI, PiP mode available                              |
| iOS             | Supports all features; PiP behavior may vary with iOS version                   |
| Web             | Requires webcam access, permission prompt shown                                 |
| Desktop         | Same as web, may vary by OS (macOS vs Windows camera permissions)               |

---

## Permissions

- Camera access
- Microphone access
- Internet connection
