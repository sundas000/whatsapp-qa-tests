# Test Cases – Community Announcement Group

## Description
Tests the functionality of the Announcement Group that is automatically created within each WhatsApp Community. This group is used by community admins to broadcast messages to all members.

## Platforms Covered
- Android
- iOS
- Web
- Desktop (Windows/macOS)

## Preconditions
- User is logged in.
- User has created or is a member of a Community.
- User is an admin of the Community (to post announcements).

| Test Case ID       | Module                     | Test Case Description                                                            | Expected Result                                                                 | Status | Priority | Notes |
|--------------------|----------------------------|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|-------|
| COMMUNITY_TC_040   | Community Announcement Group | Verify automatic creation of Announcement Group                                  | "Announcement" group is auto-created with community creation                    | Pass   | High     |       |
| COMMUNITY_TC_041   | Community Announcement Group | Open Announcement Group                                                          | Group opens and shows admin-only message interface                              | Pass   | High     |       |
| COMMUNITY_TC_042   | Community Announcement Group | Admin sends a message in Announcement Group                                      | Message is broadcasted to all members of the Community                          | Pass   | High     |       |
| COMMUNITY_TC_043   | Community Announcement Group | Non-admin opens Announcement Group                                               | User can read messages but cannot reply or send messages                        | Pass   | High     |       |
| COMMUNITY_TC_044   | Community Announcement Group | Admin attaches media (image/video/doc) to announcement message                   | Media is successfully delivered in the group                                    | Pass   | Medium   |       |
| COMMUNITY_TC_045   | Community Announcement Group | Admin adds reaction to announcement message                                      | Reaction is visible to all community members                                    | Pass   | Low      |       |
| COMMUNITY_TC_046   | Community Announcement Group | Admin deletes a previously sent announcement message                             | Message is removed from group chat for all members                              | Pass   | Medium   |       |
| COMMUNITY_TC_047   | Community Announcement Group | Admin forwards an announcement to another chat                                   | Message is forwarded with proper attribution                                    | Pass   | Low      |       |
| COMMUNITY_TC_048   | Community Announcement Group | Verify read receipts for announcement messages                                   | Admin can see how many users read the announcement                              | Pass   | Medium   |       |
| COMMUNITY_TC_049   | Community Announcement Group | Verify announcement group shows in community info panel                          | Group is listed under community details                                         | Pass   | Medium   |       |
