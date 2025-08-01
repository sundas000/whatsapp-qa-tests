# WhatsApp – Audio Call Initiation

This module covers the functionality for initiating one-on-one audio calls within WhatsApp across different platforms.

---

## Application Specifications

| Feature         | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| Audio Calling   | Allows users to initiate real-time voice calls with contacts over the internet |
| Availability    | Accessible from chat window, contact profile, and call tab                  |
| Requirements    | Active internet connection and contact must have WhatsApp installed         |
| Permissions     | Requires microphone permission                                              |

- Audio calls can be initiated via the phone icon in chat or contact info.
- User must have a verified phone number and contacts must not be blocked.
- Ringtone and call screen depend on OS-level behavior.

---

## Test Cases

| Test Case ID      | Module               | Test Case Description                                                     | Expected Result                                                            | Status | Priority | Notes                          |
|-------------------|----------------------|----------------------------------------------------------------------------|-----------------------------------------------------------------------------|--------|----------|--------------------------------|
| CALL_TC_001        | Audio Call Initiation | User taps audio call icon in 1-on-1 chat                                  | Audio call is initiated; ringing starts on recipient's device              | Pass   | High     |                                |
| CALL_TC_002        | Audio Call Initiation | User tries to call a blocked contact                                      | Call initiation is restricted with proper error message                    | Pass   | Medium   |                                |
| CALL_TC_003        | Audio Call Initiation | User receives call and answers                                            | Audio stream is established successfully                                   | Pass   | High     |                                |
| CALL_TC_004        | Audio Call Initiation | Caller ends the call before answer                                        | Call ends gracefully with “Missed Call” shown to recipient                 | Pass   | Medium   |                                |
| CALL_TC_005        | Audio Call Initiation | User attempts audio call with no internet                                 | Error message appears; call not placed                                     | Pass   | High     | Validate offline handling      |
| CALL_TC_006        | Audio Call Initiation | Microphone permission denied                                              | App prompts for permission; call fails if not granted                      | Pass   | High     |                                |
| CALL_TC_007        | Audio Call Initiation | Call initiated via Contact Info screen                                    | Audio call starts directly from contact info                               | Pass   | Medium   |                                |
| CALL_TC_008        | Audio Call Initiation | Call initiated via Calls tab (recent calls)                               | New call is started to that contact                                        | Pass   | Low      |                                |

---

## Platform Behavior Notes

| Platform     | Audio Call Support | Notes                                                 |
|--------------|--------------------|-------------------------------------------------------|
| Android      | ✅ Supported       | Native dialer UI, full integration                    |
| iOS          | ✅ Supported       | Integrated with iOS CallKit for native call handling  |
| Web/Desktop  | ✅ Supported       | Works via microphone; permission prompt required      |

---

## Notes

- Call connection time may vary depending on network strength.
- Missed audio calls are logged in the Calls tab with red icons.
- Caller ID reflects WhatsApp name unless user is in contacts.
