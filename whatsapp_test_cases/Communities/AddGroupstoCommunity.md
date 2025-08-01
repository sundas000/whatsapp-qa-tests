# Test Cases – Add Groups to Community

## Description
Tests the functionality of adding new or existing groups to a WhatsApp Community by the community admin.

## Platforms Covered
- Android
- iOS
- Web
- Desktop (Windows/macOS)

## Preconditions
- User is logged in.
- User is the admin of a Community.
- There is at least one existing group or the ability to create a new group.

| Test Case ID       | Module               | Test Case Description                                                         | Expected Result                                                                   | Status | Priority | Notes |
|--------------------|----------------------|--------------------------------------------------------------------------------|------------------------------------------------------------------------------------|--------|----------|-------|
| COMMUNITY_TC_020   | Add Groups to Community | Tap on “Add Group” from the Community info screen                             | Options to “Create New Group” or “Add Existing Group” are shown                   | Pass   | High     |       |
| COMMUNITY_TC_021   | Add Groups to Community | Select “Create New Group” option                                               | Group creation screen opens with Community pre-linked                            | Pass   | High     |       |
| COMMUNITY_TC_022   | Add Groups to Community | Complete group creation with members                                           | New group is created and listed under Community                                  | Pass   | High     |       |
| COMMUNITY_TC_023   | Add Groups to Community | Select “Add Existing Group” and choose a group administered by the user       | Selected group is added to the Community                                          | Pass   | High     | Group must not already be linked to another community |
| COMMUNITY_TC_024   | Add Groups to Community | Attempt to add a group not administered by user                                | App shows error: “Only admins can add their groups to a community”               | Pass   | High     |       |
| COMMUNITY_TC_025   | Add Groups to Community | Add multiple groups in a single session                                        | All selected groups are added to the Community successfully                       | Pass   | Medium   |       |
| COMMUNITY_TC_026   | Add Groups to Community | Cancel operation before adding a group                                         | No groups are added; Community remains unchanged                                 | Pass   | Low      |       |
| COMMUNITY_TC_027   | Add Groups to Community | Add existing group during poor network connectivity                            | Error message is shown, or action is retried after reconnecting                  | Pass   | Medium   |       |
| COMMUNITY_TC_028   | Add Groups to Community | Add group with same name as another in the Community                           | Group is added; duplicate names are allowed but shown distinctly                 | Pass   | Low      |       |
| COMMUNITY_TC_029   | Add Groups to Community | Verify added groups appear under Community info                                | All added groups are listed in the Community dashboard                           | Pass   | High     |       |
