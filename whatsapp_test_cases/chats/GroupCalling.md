# WhatsApp – Group Calling

This module outlines test cases for initiating and managing group audio/video calls in WhatsApp across supported platforms.

---

## Application Specifications

| Feature               | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| Group Calling         | Allows multiple users to join a single voice or video call                 |
| Participant Limit     | Up to 32 participants for audio, and up to 8 for video (may vary by platform) |
| Access Points         | Initiate from group chat, Calls tab, or individual call add button         |
| Call Management       | Participants can join, leave, mute themselves, and switch between audio/video |

- Group calls support dynamic joining/leaving.
- Users can be added to ongoing group calls.
- Ringing is shown only to the first few invited users based on WhatsApp’s batching rules.

---

## Test Cases

| Test Case ID   | Module         | Test Case Description                                                   | Expected Result                                                           | Status | Priority | Notes                                 |
|----------------|----------------|--------------------------------------------------------------------------|----------------------------------------------------------------------------|--------|----------|---------------------------------------|
| CALL_TC_017    | Group Calling  | User initiates group audio call from group chat                         | Audio call starts; available users begin receiving call                   | Pass   | High     |                                       |
| CALL_TC_018    | Group Calling  | User initiates group video call from group chat                         | Video call starts with up to platform-supported users                     | Pass   | High     |                                       |
| CALL_TC_019    | Group Calling  | Add participant to ongoing group call                                   | New participant receives join call request and joins upon acceptance      | Pass   | High     |                                       |
| CALL_TC_020    | Group Calling  | Exceed participant limit during call initiation                         | System prevents adding more participants beyond limit                     | Pass   | Medium   | Limit differs for audio and video     |
| CALL_TC_021    | Group Calling  | User leaves group call                                                  | User is disconnected without affecting rest of the call                   | Pass   | Medium   |                                       |
| CALL_TC_022    | Group Calling  | Participant switches from audio to video mid-call                       | Video feed activates and is shown to all                                  | Pass   | Medium   | Platform dependent                    |
| CALL_TC_023    | Group Calling  | User mutes/unmutes self during group call                               | Microphone status updates correctly for other participants                | Pass   | Medium   |                                       |
| CALL_TC_024    | Group Calling  | User rejoins dropped group call                                         | User rejoins ongoing call seamlessly                                      | Pass   | High     |                                       |

---

## Platform Behavior Notes

| Platform     | Group Audio Calls | Group Video Calls | Notes                                                              |
|--------------|-------------------|-------------------|--------------------------------------------------------------------|
| Android      | ✅ Supported      | ✅ Supported      | Full participant limits supported; floating video tiles            |
| iOS          | ✅ Supported      | ✅ Supported      | Native call handling and smooth multitasking                       |
| Web/Desktop  | ✅ Supported      | 🔸 Partial        | Group video may be limited by browser capability and hardware      |

---

## Notes

- Participants receive "Missed Group Call" notification if they don’t answer.
- Ringing notifications are throttled to reduce call noise in large groups.
- End call for all option available only for initiator or admin on some platforms.
