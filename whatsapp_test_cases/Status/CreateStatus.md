# WhatsApp – Create Status

This module documents the creation and sharing of WhatsApp Status updates by the user.

---

## Application Specifications

| Feature             | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| Create Status        | Users can share text, image, video, or GIF updates visible for 24 hours    |
| Media Input Options  | Capture photo/video using camera, pick from gallery, or type text status   |
| Privacy Settings     | Users can choose who can view their status updates                        |
| Add Captions         | Users can add captions to media-based statuses                            |
| Edit Tools           | Includes drawing, emojis, text overlay, and cropping                      |

- Status is uploaded via the “My Status” option in the Status tab.
- Upload progress is shown with a progress bar.
- Status can be deleted or muted after uploading.

---

## Test Cases

| Test Case ID     | Module         | Test Case Description                                                    | Expected Result                                                                 | Status | Priority | Notes                           |
|------------------|----------------|---------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|---------------------------------|
| STC_TC_001       | Create Status  | User taps on “My Status” to create a new status                          | Opens status creation interface with camera/gallery/text options                | Pass   | High     |                                 |
| STC_TC_002       | Create Status  | User takes a photo and uploads it as status                              | Status is successfully uploaded and visible under “My Status”                   | Pass   | High     |                                 |
| STC_TC_003       | Create Status  | User selects image/video from gallery and posts as status                | Media status is uploaded and visible                                            | Pass   | High     |                                 |
| STC_TC_004       | Create Status  | User enters a text-only status update                                    | Text status appears with selected background and font                           | Pass   | Medium   |                                 |
| STC_TC_005       | Create Status  | User uses editing tools (text, emojis, crop) before posting              | Edited content reflects in final status                                         | Pass   | Medium   |                                 |
| STC_TC_006       | Create Status  | User cancels upload during posting                                       | Status is not visible or saved                                                  | Pass   | Low      |                                 |
| STC_TC_007       | Create Status  | User selects custom privacy before posting                               | Status is only visible to selected audience                                     | Pass   | High     | “My contacts except…” etc.      |
| STC_TC_008       | Create Status  | User deletes a posted status manually                                    | Status disappears from “My Status” for all viewers                              | Pass   | High     |                                 |

---

## Platform Behavior Notes

| Platform       | Create Status | Notes                                                                |
|----------------|----------------|----------------------------------------------------------------------|
| Android        |  Supported   | Full support with media editor and privacy controls                  |
| iOS            | Supported   | Minor differences in layout for editor tools                         |
| Web/Desktop    | Limited     | Can only post text-based statuses or view media already posted       |

---

## Notes

- Status updates expire automatically after 24 hours.
- Users can post multiple statuses which play sequentially.
- If privacy is changed, it only applies to future statuses.
