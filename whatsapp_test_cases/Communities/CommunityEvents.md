# Test Cases – Community Events

## Description
Tests the functionality for creating, managing, and interacting with Events within a WhatsApp Community, allowing members to stay informed about scheduled activities.

## Platforms Covered
- Android
- iOS
- Web
- Desktop (Windows/macOS)

## Preconditions
- User is logged in and is a member of a Community.
- Necessary permissions granted to create or respond to events.
- Community feature is available in the region.

| Test Case ID       | Module           | Test Case Description                                                        | Expected Result                                                                  | Status | Priority | Notes |
|--------------------|------------------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|--------|----------|-------|
| COMMUNITY_TC_050   | Community Events | Access event creation option in Community                                    | "Create Event" option is visible in the Community chat or info panel             | Pass   | High     |       |
| COMMUNITY_TC_051   | Community Events | Create a new event with title, date, time, and description                   | Event is successfully created and visible to all members                         | Pass   | High     |       |
| COMMUNITY_TC_052   | Community Events | Send event invitation in Announcement Group                                  | Event is posted as a message with RSVP options                                  | Pass   | High     |       |
| COMMUNITY_TC_053   | Community Events | RSVP to an event (Yes/No/Maybe)                                              | User response is recorded and visible to event creator                           | Pass   | High     |       |
| COMMUNITY_TC_054   | Community Events | Edit an existing event                                                       | Event details are updated and members are notified                               | Pass   | Medium   |       |
| COMMUNITY_TC_055   | Community Events | Delete an event                                                              | Event is removed for all members and marked as deleted                           | Pass   | Medium   |       |
| COMMUNITY_TC_056   | Community Events | View RSVP list for an event                                                  | Admin or event creator can see member responses                                  | Pass   | Medium   |       |
| COMMUNITY_TC_057   | Community Events | Receive event notification/reminder                                          | Notification is sent before the event begins                                     | Pass   | Medium   |       |
| COMMUNITY_TC_058   | Community Events | Join event link from notification or message                                 | User is redirected to event details and RSVP options                             | Pass   | Medium   |       |
| COMMUNITY_TC_059   | Community Events | Interact with event card (tap to open, long press for options)               | Card opens to detailed view or shows context menu with actions                   | Pass   | Low      |       |
