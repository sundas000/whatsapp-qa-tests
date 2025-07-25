# Test Cases – Create Event

## Description
Covers the functionality of creating an event using WhatsApp’s attachment ("+") menu. Events can include a title, date/time, optional location, and details.

## Platforms Covered
- Android
- iOS

## Preconditions
- User is logged into WhatsApp.
- Event creation feature is enabled and supported on the app version.
- User is in an individual or group chat.

| Test Case ID     | Module        | Test Case Description                                                    | Expected Result                                                        | Status | Priority | Notes                                 |
|------------------|---------------|----------------------------------------------------------------------------|------------------------------------------------------------------------|--------|----------|---------------------------------------|
| EVENT_TC_001     | Create Event  | Tap "+" and select "Event" from attachment options                         | Event creation screen opens                                           | Pass   | High     |                                       |
| EVENT_TC_002     | Create Event  | Enter event name, date and time                                           | Inputs accepted and validated                                         | Pass   | High     | Mandatory fields                      |
| EVENT_TC_003     | Create Event  | Leave event name empty and attempt to create                              | Error shown or create disabled                                        | Pass   | High     | Event name is required                |
| EVENT_TC_004     | Create Event  | Add optional location and description                                     | Location and description saved with event                             | Pass   | Medium   |                                       |
| EVENT_TC_005     | Create Event  | Send event in chat                                                        | Event is posted as a special message with date/time info              | Pass   | High     |                                       |
| EVENT_TC_006     | Create Event  | Tap event in chat to open event details                                   | Event detail view opens                                               | Pass   | Medium   |                                       |
| EVENT_TC_007     | Create Event  | Edit event after creation (if allowed)                                    | Edits are saved and updated in chat                                   | N/A    | Low      | May not be supported                  |
| EVENT_TC_008     | Create Event  | Delete sent event                                                         | Event message is removed from chat                                    | Pass   | Low      |                                       |
| EVENT_TC_009     | Create Event  | Tap on event time – prompt to add to calendar                             | Device calendar opens with prefilled info                             | Pass   | Medium   | Platform dependent                    |
| EVENT_TC_010     | Create Event  | Event notification behavior on group mute                                 | Event still appears silently in chat                                  | Pass   | Low      |                                       |
| EVENT_TC_011     | Create Event  | Event expired – tap on expired event                                      | App shows expired label or disables interaction                       | Pass   | Low      |                                       |
