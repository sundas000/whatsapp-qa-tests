# Test Cases – Community Participant Permissions

## Description
Validates the permission controls available to Community admins, including assigning/removing admin roles and restricting participant actions like posting in announcement groups or editing community details.

## Platforms Covered
- Android
- iOS
- Web
- Desktop (Windows/macOS)

## Preconditions
- User is logged in to WhatsApp.
- User is part of a Community.
- Admin privileges are required to change permissions.

| Test Case ID       | Module                        | Test Case Description                                                       | Expected Result                                                                    | Status | Priority | Notes |
|--------------------|-------------------------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------------------|--------|----------|-------|
| COMMUNITY_TC_080   | Participant Permissions        | Open participant list in Community settings                                | List of all participants is displayed                                              | Pass   | High     |       |
| COMMUNITY_TC_081   | Participant Permissions        | Assign admin role to a participant (admin only)                            | Participant becomes a Community admin                                              | Pass   | High     |       |
| COMMUNITY_TC_082   | Participant Permissions        | Remove admin role from a Community admin                                   | User loses admin privileges                                                        | Pass   | High     |       |
| COMMUNITY_TC_083   | Participant Permissions        | Attempt to assign admin role as non-admin                                  | Action is blocked or hidden                                                        | Pass   | High     |       |
| COMMUNITY_TC_084   | Participant Permissions        | Verify admin privileges after assignment (e.g., editing description)       | New admin can edit Community info and manage members                              | Pass   | Medium   |       |
| COMMUNITY_TC_085   | Participant Permissions        | Restrict message posting to admins only in announcement group              | Only admins are allowed to send messages in announcement group                    | Pass   | High     |       |
| COMMUNITY_TC_086   | Participant Permissions        | Allow all members to post in announcement group                            | All members can send messages in announcement group                               | Pass   | Medium   |       |
| COMMUNITY_TC_087   | Participant Permissions        | Check UI behavior when roles are updated (e.g., icons/badges for admins)   | Admin indicators appear beside user names where applicable                         | Pass   | Low      |       |
| COMMUNITY_TC_088   | Participant Permissions        | Attempt to remove last remaining admin                                     | Action is blocked or warning is shown                                              | Pass   | Medium   |       |
| COMMUNITY_TC_089   | Participant Permissions        | Check notifications for assigned/removed admin roles                       | Users are notified when their admin role is assigned or revoked                    | Pass   | Low      |       |
