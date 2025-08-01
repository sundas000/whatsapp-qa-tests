# Test Cases – Create Community

## Description
Covers the test scenarios for creating a new Community in WhatsApp. This includes entering the Community name, optional description, and adding initial groups.

## Platforms Covered
- Android
- iOS
- Web
- Desktop (Windows/macOS)

## Preconditions
- User is logged in.
- Latest version of WhatsApp is installed.
- Internet connection is active.

| Test Case ID       | Module            | Test Case Description                                                      | Expected Result                                                                 | Status | Priority | Notes |
|--------------------|-------------------|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|-------|
| COMMUNITY_TC_001   | Create Community  | Navigate to "New Community" via the Communities tab                        | "New Community" screen opens                                                     | Pass   | High     |       |
| COMMUNITY_TC_002   | Create Community  | Enter valid name and description                                           | Inputs are accepted and proceed to next step                                    | Pass   | High     |       |
| COMMUNITY_TC_003   | Create Community  | Attempt to create a community without a name                               | App displays error message indicating name is required                          | Pass   | High     |       |
| COMMUNITY_TC_004   | Create Community  | Add an existing group to new community during setup                        | Group is added to the community                                                  | Pass   | Medium   |       |
| COMMUNITY_TC_005   | Create Community  | Skip adding groups and complete creation                                   | Community is created without any initial groups                                 | Pass   | Medium   |       |
| COMMUNITY_TC_006   | Create Community  | Use special characters or emojis in the community name                     | App accepts valid characters and emojis, displays them correctly                | Pass   | Low      |       |
| COMMUNITY_TC_007   | Create Community  | Network disconnect during creation process                                 | App shows appropriate error and allows retry                                    | Pass   | Medium   |       |
| COMMUNITY_TC_008   | Create Community  | Tap back during community creation                                         | User is taken back without creating the community                               | Pass   | Low      |       |
| COMMUNITY_TC_009   | Create Community  | Verify community appears in Communities tab after creation                 | Newly created community is listed under Communities tab                         | Pass   | High     |       |
| COMMUNITY_TC_010   | Create Community  | Create community and verify confirmation message or animation              | Success message or animation is shown after successful creation                 | Pass   | Medium   |       |
