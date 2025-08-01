# Test Cases – Invite Members to Community

## Description
Tests the ability of a Community admin to invite members to join a WhatsApp Community via direct invite or shareable link.

## Platforms Covered
- Android
- iOS
- Web
- Desktop (Windows/macOS)

## Preconditions
- User is logged in.
- User is the admin of a Community.
- Community is already created.

| Test Case ID       | Module                   | Test Case Description                                                            | Expected Result                                                                 | Status | Priority | Notes |
|--------------------|--------------------------|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|-------|
| COMMUNITY_TC_030   | Invite Members to Community | Tap on “Invite Members” from Community info screen                               | Options to “Send Link” or “Invite via WhatsApp” are displayed                   | Pass   | High     |       |
| COMMUNITY_TC_031   | Invite Members to Community | Tap “Send Link” and copy the invite link                                         | Invite link is copied to clipboard                                               | Pass   | High     |       |
| COMMUNITY_TC_032   | Invite Members to Community | Tap “Send Link” and share via other apps (e.g., email, SMS)                      | Invite link is shared via selected app                                          | Pass   | Medium   |       |
| COMMUNITY_TC_033   | Invite Members to Community | Tap “Invite via WhatsApp” and select contact                                     | Contact receives community invite in their chat                                 | Pass   | High     |       |
| COMMUNITY_TC_034   | Invite Members to Community | Invite link is opened by non-member user                                         | User is shown option to join the Community                                      | Pass   | High     |       |
| COMMUNITY_TC_035   | Invite Members to Community | Invite link is opened by someone already in the Community                        | Message shown: “You are already a member of this Community”                     | Pass   | Low      |       |
| COMMUNITY_TC_036   | Invite Members to Community | Admin revokes an invite link                                                     | Revoked link becomes invalid when clicked                                       | Pass   | High     |       |
| COMMUNITY_TC_037   | Invite Members to Community | Open revoked invite link                                                         | Message shown: “This invite link is no longer valid”                            | Pass   | High     |       |
| COMMUNITY_TC_038   | Invite Members to Community | Multiple users join using the same invite link                                   | All users are added to the Community                                             | Pass   | High     |       |
| COMMUNITY_TC_039   | Invite Members to Community | Attempt to invite from a non-admin account                                       | “Only admins can invite members” message is shown                              | Pass   | High     |       |
