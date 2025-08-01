# WhatsApp – In-call Options

This module includes test cases related to in-call functionality and controls available during an active WhatsApp call (audio or video).

---

## Application Specifications

| Feature               | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| Mute/Unmute           | Mute microphone during call                                                 |
| Switch Camera         | Toggle between front and rear camera (video calls)                         |
| Video Off/On          | Enable/disable video stream during a video call                             |
| Speakerphone Mode     | Toggle speaker on/off (audio calls)                                         |
| Add Participant       | Add another user to ongoing call (group call only)                          |
| End Call              | End call for self                                                           |
| Chat Access           | Access chat with participant during call                                    |
| Picture-in-Picture    | Minimized video during navigation (platform-specific)                       |

---

## Test Cases

| Test Case ID   | Module         | Test Case Description                                                     | Expected Result                                                    | Status | Priority | Notes                            |
|----------------|----------------|----------------------------------------------------------------------------|---------------------------------------------------------------------|--------|----------|----------------------------------|
| CALL_TC_038    | In-call Options| Mute microphone during call                                               | Microphone is muted; other side cannot hear                        | Pass   | High     |                                  |
| CALL_TC_039    | In-call Options| Toggle speakerphone on/off during call                                    | Audio routes switch correctly between speaker and earpiece         | Pass   | High     |                                  |
| CALL_TC_040    | In-call Options| Switch between front and rear camera during video call                    | Camera switches instantly with no crash                            | Pass   | Medium   |                                  |
| CALL_TC_041    | In-call Options| Turn off video during a video call                                        | Video stops, only audio continues                                  | Pass   | Medium   |                                  |
| CALL_TC_042    | In-call Options| Add participant to ongoing group call                                     | Selected contact is added to the call                              | Pass   | High     | Group call only                  |
| CALL_TC_043    | In-call Options| Access chat with current caller while on call                             | Chat screen opens in-call; call continues                          | Pass   | Medium   | Multitasking check               |
| CALL_TC_044    | In-call Options| Verify Picture-in-Picture functionality on supported platform             | Call video minimizes into floating window                          | Pass   | Medium   | Android/iOS only                 |
| CALL_TC_045    | In-call Options| End call during ongoing audio/video call                                  | Call disconnects and status returns to idle                        | Pass   | High     |                                  |

---

## Platform Behavior Notes

| Platform     | Mute/Speaker | Switch Camera | Add Participant | PiP Support | Notes                                        |
|--------------|--------------|----------------|------------------|-------------|----------------------------------------------|
| Android      | ✅ Supported | ✅ Supported    | ✅ Supported      | ✅ Yes       | Full in-call controls                         |
| iOS          | ✅ Supported | ✅ Supported    | ✅ Supported      | ✅ Yes       | Native call interface integration             |
| Web/Desktop  | ✅ Supported | 🔸 Limited      | 🔸 Limited        | ❌ No        | Basic call controls only                      |

---

## Notes

- Picture-in-Picture (PiP) not supported on web version.
- Call controls differ slightly between 1:1 and group calls.
- UI may vary slightly between Android and iOS (e.g., control layout).
