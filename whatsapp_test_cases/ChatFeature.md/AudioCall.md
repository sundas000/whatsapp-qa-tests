# WhatsApp Chat – Audio Call Feature

## Test Cases for Audio Calling

| Test Case ID   | Module      | Test Case Description                                               | Expected Result                                                       | Status | Priority | Notes                                 |
|----------------|-------------|----------------------------------------------------------------------|------------------------------------------------------------------------|--------|----------|----------------------------------------|
| AC_TC_001      | Audio Call  | User taps the audio call icon in an active chat                     | Audio call screen should open, and the recipient should be notified   | Pass   | High     |                                        |
| AC_TC_002      | Audio Call  | Recipient answers the audio call                                    | Both users should be able to hear each other                          | Pass   | High     |                                        |
| AC_TC_003      | Audio Call  | Recipient declines the audio call                                   | Call should end and show "Missed voice call" in chat                  | Pass   | Medium   |                                        |
| AC_TC_004      | Audio Call  | Caller ends the call before it is picked                            | Call should be marked as "Cancelled" in chat                          | Pass   | Medium   |                                        |
| AC_TC_005      | Audio Call  | User mutes themselves during the call                               | Microphone should be disabled for the caller                          | Pass   | Medium   |                                        |
| AC_TC_006      | Audio Call  | User puts call on speaker                                           | Audio should route to the speaker                                     | Pass   | Medium   |                                        |
| AC_TC_007      | Audio Call  | User switches to video call during audio call                       | Video call should initiate seamlessly if accepted by both parties     | Pass   | Medium   | Platform-dependent                    |
| AC_TC_008      | Audio Call  | App is minimized during audio call                                  | Call should continue in background                                    | Pass   | High     |                                        |
| AC_TC_009      | Audio Call  | Poor internet connection during call                                | App should auto-reconnect or display "Reconnecting" message           | Pass   | High     |                                        |
| AC_TC_010      | Audio Call  | User attempts audio call with blocked contact                       | Call should not go through; error should be shown                     | Pass   | High     |                                        |

---

## Platform Behavior Notes

| Platform     | Behavior Summary                                                        |
|--------------|---------------------------------------------------------------------------|
| Android      | Full audio call support; background call persists with notification     |
| iOS          | Background audio continues; call control via iOS call UI                |
| Web          | Requires microphone permission; runs in-browser with tab alert support  |
| Desktop      | Similar to web; dependent on OS-level audio routing                     |

---

## Permissions Required

- Microphone access
- Internet connection
