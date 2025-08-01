# WhatsApp Chat – Voice Messaging Feature

## Test Cases for Voice Messages

| Test Case ID   | Module         | Test Case Description                                                        | Expected Result                                                                 | Status | Priority | Notes                                      |
|----------------|----------------|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|---------------------------------------------|
| VM_TC_001      | Voice Messages | User holds the mic button to record a voice message                          | Voice should be recorded and sent successfully                                  | Pass   | High     |                                             |
| VM_TC_002      | Voice Messages | User slides up to lock recording                                             | Mic should lock and allow hands-free recording                                  | Pass   | Medium   |                                             |
| VM_TC_003      | Voice Messages | User cancels voice message by sliding left                                   | Recording should be discarded before sending                                    | Pass   | High     |                                             |
| VM_TC_004      | Voice Messages | Recipient receives and plays the voice message                               | Playback should be clear and have a play/pause button                           | Pass   | High     |                                             |
| VM_TC_005      | Voice Messages | User plays voice message at 1x, 1.5x, and 2x speed                            | Playback speed should update and function correctly                             | Pass   | Medium   | Feature available in updated builds         |
| VM_TC_006      | Voice Messages | User receives voice message while on call                                    | Message should be received and playable post-call                               | Pass   | Medium   |                                             |
| VM_TC_007      | Voice Messages | Voice message playback interrupted by incoming call                          | Playback should pause and resume after the call                                 | Pass   | Medium   |                                             |
| VM_TC_008      | Voice Messages | User records voice message without microphone permissions                    | App should show permission error and prevent recording                          | Pass   | High     |                                             |
| VM_TC_009      | Voice Messages | User listens to a voice message and it marks as played (blue check)          | Status should update from delivered to played                                   | Pass   | Medium   |                                             |
| VM_TC_010      | Voice Messages | User sends long voice message (over 60 seconds)                              | Message should still send and playback should be smooth                         | Pass   | Medium   |                                             |

---

## Platform Behavior Notes

| Platform     | Behavior Summary                                                                 |
|--------------|-----------------------------------------------------------------------------------|
| Android      | All recording and playback features work with minor UI variations                |
| iOS          | Smooth experience; mic permissions prompt upon first use                         |
| Web          | Cannot record without explicit mic permission; playback features fully supported |
| Desktop      | Full functionality with native mic access on Windows/macOS                       |

---

## Functional Notes

- Voice messages are end-to-end encrypted.
- Messages show a waveform visual on playback.
- Speed toggle (1x/1.5x/2x) helps improve accessibility and quick review.
- Listening to own recorded message before sending is supported after locking the mic.

---

## Required Permissions

- **Microphone Access** – Mandatory for recording voice messages
- **Notification Access** – Optional for playback alerts
