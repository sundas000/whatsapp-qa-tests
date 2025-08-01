# Test Cases – Manage Community Info

## Description
Tests the ability to view and update a WhatsApp Community's name, description, and profile picture after it has been created.

## Platforms Covered
- Android
- iOS
- Web
- Desktop (Windows/macOS)

## Preconditions
- User is logged in.
- User is the admin of at least one Community.
- Stable internet connection is available.

| Test Case ID       | Module               | Test Case Description                                                     | Expected Result                                                                 | Status | Priority | Notes |
|--------------------|----------------------|----------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|-------|
| COMMUNITY_TC_011   | Manage Community Info | Open community info from Communities tab                                  | Community info screen is displayed                                               | Pass   | High     |       |
| COMMUNITY_TC_012   | Manage Community Info | Tap "Edit" and change the Community name                                  | New name is saved and reflected across the app                                  | Pass   | High     |       |
| COMMUNITY_TC_013   | Manage Community Info | Edit and update the Community description                                 | Description is saved and shown under community info                             | Pass   | Medium   |       |
| COMMUNITY_TC_014   | Manage Community Info | Remove the Community description and save                                 | Description field is cleared and updated accordingly                            | Pass   | Low      |       |
| COMMUNITY_TC_015   | Manage Community Info | Tap to add/change Community profile picture                               | Image picker or camera opens and selected image is saved                        | Pass   | Medium   |       |
| COMMUNITY_TC_016   | Manage Community Info | Try uploading unsupported image format                                     | App displays validation error or restricts upload                               | Pass   | Medium   |       |
| COMMUNITY_TC_017   | Manage Community Info | Cancel changes before saving                                               | No updates are made to Community info                                            | Pass   | Low      |       |
| COMMUNITY_TC_018   | Manage Community Info | Update name and description during network failure                         | App shows error and retries or saves once connection is restored                | Pass   | Medium   |       |
| COMMUNITY_TC_019   | Manage Community Info | Verify updated info reflects for all members                              | Community members see updated name, picture, and description                    | Pass   | High     |       |
