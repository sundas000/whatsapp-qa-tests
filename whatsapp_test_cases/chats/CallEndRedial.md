# WhatsApp – Call End & Redial

This module documents the user interactions and expected behaviors related to ending ongoing calls and redialing recent call contacts on WhatsApp.

---

## Application Specifications

| Feature            | Description                                                             |
|--------------------|-------------------------------------------------------------------------|
| End Call           | User can manually end an active audio/video call                        |
| Auto-End Handling  | Call ends automatically when the other participant disconnects          |
| Redial Option      | Tap on recent call log entry to redial                                  |
| Confirmation Prompt| No confirmation needed to redial or end call                            |
| Accessibility      | End and redial buttons are easily accessible during and after calls     |

---

## Test Cases

| Test Case ID   | Module             | Test Case Description                                      | Expected Result                                         | Status | Priority | Notes                    |
|----------------|--------------------|-------------------------------------------------------------|----------------------------------------------------------|--------|----------|--------------------------|
| CALL_TC_053    | Call End & Redial  | End an active audio call manually                           | Call is terminated immediately                          | Pass   | High     |                          |
| CALL_TC_054    | Call End & Redial  | End an active video call manually                           | Call is terminated immediately                          | Pass   | High     |                          |
| CALL_TC_055    | Call End & Redial  | One participant ends the call                               | Other user sees “Call Ended” prompt                     | Pass   | High     |                          |
| CALL_TC_056    | Call End & Redial  | Redial a recent contact from call log                       | Call (audio or video) is initiated again                | Pass   | Medium   | Uses call type from log |
| CALL_TC_057    | Call End & Redial  | Tap on missed call to redial                                | Call is placed to the missed contact                    | Pass   | Medium   |                          |
| CALL_TC_058    | Call End & Redial  | Verify that “End” button works properly across platforms     | Call ends immediately on button tap                     | Pass   | High     |                          |

---

## Platform Behavior Notes

| Platform     | End Call | Redial from Log | Redial from Missed | UI Response | Notes                        |
|--------------|----------|------------------|----------------------|--------------|------------------------------|
| Android      | ✅ Yes   | ✅ Yes           | ✅ Yes               | Fast         | Full support                 |
| iOS          | ✅ Yes   | ✅ Yes           | ✅ Yes               | Fast         | Full support                 |
| Web/Desktop  | ✅ Yes   | ✅ Yes           | ✅ Yes               | Moderate     | May show popup for camera/mic|

---

## Notes

- Call logs maintain call type (audio/video) for redialing.
- Redial uses same call type unless changed manually.
- Ending the call via “X” icon or system disconnect both trigger same end behavior.
