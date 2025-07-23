# WhatsApp – Set Up Profile Test Cases

This document outlines test cases for the **profile setup flow** that appears immediately after successful login on WhatsApp. The flow typically includes entering a display name and optionally adding a profile picture.

---

## Application Specifications

- This flow occurs only on first-time login or fresh installations.
- The profile includes:
  - **Display Name** (required)
  - **Profile Photo** (optional)
- Name is limited to 25 characters.
- Photo is selected from local storage (mobile) or file system (desktop/web).
- Skipping the profile photo setup is allowed.
- Internet is required to sync profile setup to the server.

---

## Test Cases

| Test Case ID      | Module          | Test Case Description                                                      | Expected Result                                                        | Status | Priority | Notes                                 |
|-------------------|-----------------|----------------------------------------------------------------------------|-------------------------------------------------------------------------|--------|----------|----------------------------------------|
| PROFILE_TC_001    | Profile Setup   | User enters a valid name and taps "Next"                                   | Profile should be created and user proceeds to main chat screen        | Pass   | High     | Applies to all platforms               |
| PROFILE_TC_002    | Profile Setup   | User tries to proceed without entering a name                              | Validation should prevent continuing; show error message                | Pass   | High     | Name is mandatory                      |
| PROFILE_TC_003    | Profile Setup   | User enters a name longer than 25 characters                               | Input should restrict characters or show validation                    | Pass   | Medium   | Truncation or warning message shown    |
| PROFILE_TC_004    | Profile Setup   | User uploads a valid image as profile photo                                | Profile picture should be visible after upload                         | Pass   | Medium   | Supported formats: JPG, PNG            |
| PROFILE_TC_005    | Profile Setup   | User taps “Skip” on the profile picture step                               | User should proceed without setting profile photo                      | Pass   | Medium   | Option not available on all versions   |
| PROFILE_TC_006    | Profile Setup   | User uploads an unsupported file format (e.g., PDF)                        | App should reject file and show an error                               | Pass   | Low      | Desktop/Web file chooser validation    |
| PROFILE_TC_007    | Profile Setup   | User tries to upload a very large image (>5MB)                             | App should compress or reject the image                                | Pass   | Low      | Handling may differ by platform        |
| PROFILE_TC_008    | Profile Setup   | User denies media/file permission (Android/iOS)                            | App should not allow photo selection; only name setup proceeds         | Pass   | Medium   | Permission dialog shown                |
| PROFILE_TC_009    | Profile Setup   | User uploads photo and then deletes it before confirming                   | App should revert to default avatar                                    | Pass   | Medium   | Optional feature; test on mobile       |
| PROFILE_TC_010    | Profile Sync    | User logs in from a different device after setup                           | Previously set name and photo should sync and appear                   | Pass   | High     | Requires active internet               |

---

## Platform Behavior Notes

| Platform       | Notes                                                                 |
|----------------|-----------------------------------------------------------------------|
| Android        | Uses image picker with camera/gallery access                          |
| iOS            | iOS file permissions required; manual entry for name                  |
| WhatsApp Web   | Drag-and-drop and file selector supported for photo upload            |
| Desktop App    | Similar to Web; file system used for uploading profile photo          |
