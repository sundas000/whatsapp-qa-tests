# Test Cases – Community Info & Description

## Description
Tests the functionality related to viewing and editing the Community's profile information, including name, icon, and description which help identify and inform users about the purpose of the Community.

## Platforms Covered
- Android
- iOS
- Web
- Desktop (Windows/macOS)

## Preconditions
- User is logged in to WhatsApp.
- User is a member of a Community.
- Admin permissions are required for editing Community info.

| Test Case ID       | Module                    | Test Case Description                                                     | Expected Result                                                              | Status | Priority | Notes |
|--------------------|---------------------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------------|--------|----------|-------|
| COMMUNITY_TC_070   | Community Info & Description | Access Community info screen from Community home                         | Community info screen with name, icon, and description is displayed          | Pass   | High     |       |
| COMMUNITY_TC_071   | Community Info & Description | Tap and view full Community description                                   | Full description text is shown in an expanded view                          | Pass   | Medium   |       |
| COMMUNITY_TC_072   | Community Info & Description | Edit Community name (admin only)                                          | New name is saved and reflected across Community                             | Pass   | High     |       |
| COMMUNITY_TC_073   | Community Info & Description | Edit Community description (admin only)                                   | New description is saved and visible to all members                          | Pass   | Medium   |       |
| COMMUNITY_TC_074   | Community Info & Description | Edit or upload Community icon (admin only)                                | New icon is uploaded and displayed in Community header                       | Pass   | Medium   |       |
| COMMUNITY_TC_075   | Community Info & Description | Attempt to edit Community info as a non-admin                             | Edit options are not visible or are disabled                                 | Pass   | High     |       |
| COMMUNITY_TC_076   | Community Info & Description | Save changes and re-enter Community info screen                           | All changes persist and are displayed correctly                              | Pass   | Medium   |       |
| COMMUNITY_TC_077   | Community Info & Description | Verify updated Community info reflects in sub-groups                      | Updated name and icon appear in all sub-groups under the Community           | Pass   | Medium   |       |
| COMMUNITY_TC_078   | Community Info & Description | Attempt to save empty description                                         | App shows validation error or prevents save                                  | Pass   | Low      |       |
| COMMUNITY_TC_079   | Community Info & Description | Verify character limit for Community name and description                 | App enforces limit and prevents excessive text                               | Pass   | Low      |       |
