# WhatsApp – Call History

This module documents the expected functionality and test coverage for the Call History feature in WhatsApp across platforms.

---

## Application Specifications

| Feature             | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| Call History        | Displays a chronological log of all audio and video calls (missed, received, outgoing) |
| Entry Details       | Shows contact name, call type (audio/video), time/date, and duration        |
| Indicators          | Missed calls shown in red, with appropriate icons for call type             |
| Access Points       | Accessible from the "Calls" tab in the app or sidebar on desktop/web        |
| Deletion Support    | Users can delete individual call entries or clear entire call history       |

---

## Test Cases

| Test Case ID   | Module       | Test Case Description                                           | Expected Result                                                      | Status | Priority | Notes                              |
|----------------|--------------|------------------------------------------------------------------|------------------------------------------------------------------------|--------|----------|------------------------------------|
| CALL_TC_025    | Call History | Verify all call entries are logged (missed, received, outgoing) | Call history correctly logs all types with correct timestamps         | Pass   | High     |                                    |
| CALL_TC_026    | Call History | Tap a call entry to redial the contact                          | App initiates the correct type of call (audio/video)                 | Pass   | High     |                                    |
| CALL_TC_027    | Call History | Swipe to delete an individual call entry                        | Entry is removed from history without affecting other calls          | Pass   | Medium   |                                    |
| CALL_TC_028    | Call History | Clear entire call history                                       | All entries are removed; screen shows empty state                    | Pass   | Medium   | Confirmation prompt required       |
| CALL_TC_029    | Call History | Check grouping for multiple calls from same contact             | Entries grouped by date with latest at top                           | Pass   | Low      | Depends on platform UI             |
| CALL_TC_030    | Call History | Missed calls are visually distinguished                         | Missed calls appear in red with missed icon                          | Pass   | Medium   |                                    |
| CALL_TC_031    | Call History | Incoming call answered on another device                        | Call still appears in history as "Answered on another device"        | Pass   | Low      |                                    |

---

## Platform Behavior Notes

| Platform     | Call Logging | Grouping | Deletion Option | Notes                                    |
|--------------|--------------|----------|------------------|------------------------------------------|
| Android      | ✅ Yes       | ✅ Yes   | ✅ Yes           | Long press to delete                     |
| iOS          | ✅ Yes       | ✅ Yes   | ✅ Yes           | Swipe left to delete                     |
| Web/Desktop  | ✅ Yes       | 🔸 Limited | 🔸 Partial       | May sync slower than mobile              |

---

## Notes

- Missed calls may trigger push notification until viewed.
- Clearing call history does not affect call logs on other synced devices.
- No separate section for group call history – grouped under participant’s name.

