# Test Cases – Community Sub-Groups

## Description
Tests the creation, management, and interaction within sub-groups that exist under a main WhatsApp Community. These sub-groups allow focused discussions and specific member participation.

## Platforms Covered
- Android
- iOS
- Web
- Desktop (Windows/macOS)

## Preconditions
- User is logged in and is an admin or member of a WhatsApp Community.
- Community feature is supported and enabled in the region.
- Admin permissions are required for sub-group creation and management.

| Test Case ID       | Module              | Test Case Description                                                        | Expected Result                                                                  | Status | Priority | Notes |
|--------------------|---------------------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|--------|----------|-------|
| COMMUNITY_TC_060   | Community Sub-Groups| Access sub-group creation option from Community                              | “Create Group” option is visible under the Community’s interface                 | Pass   | High     |       |
| COMMUNITY_TC_061   | Community Sub-Groups| Create a new sub-group with name and participants                            | Sub-group is created and listed under the Community                              | Pass   | High     |       |
| COMMUNITY_TC_062   | Community Sub-Groups| Add participants to a sub-group                                              | Participants are added successfully and notified                                 | Pass   | High     |       |
| COMMUNITY_TC_063   | Community Sub-Groups| View list of sub-groups within a Community                                   | All existing sub-groups are displayed                                            | Pass   | Medium   |       |
| COMMUNITY_TC_064   | Community Sub-Groups| Send message within a sub-group                                              | Message is sent and visible to all sub-group members                             | Pass   | High     |       |
| COMMUNITY_TC_065   | Community Sub-Groups| Leave a sub-group                                                            | User is removed from the sub-group and no longer receives messages               | Pass   | Medium   |       |
| COMMUNITY_TC_066   | Community Sub-Groups| Delete a sub-group (admin only)                                              | Sub-group is deleted and no longer accessible to members                         | Pass   | Medium   |       |
| COMMUNITY_TC_067   | Community Sub-Groups| Join sub-group via invitation or community post                              | User is added to sub-group upon accepting invitation                             | Pass   | Medium   |       |
| COMMUNITY_TC_068   | Community Sub-Groups| Navigate between multiple sub-groups under one Community                     | User can switch between sub-groups easily                                        | Pass   | Low      |       |
| COMMUNITY_TC_069   | Community Sub-Groups| Check if sub-group messages appear in main Community or Announcement group   | Sub-group messages are isolated to the sub-group only                            | Pass   | Medium   |       |
