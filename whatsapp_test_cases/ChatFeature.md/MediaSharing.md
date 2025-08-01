# WhatsApp Chat – Media Sharing Feature

## Test Cases for Media Sharing

| Test Case ID   | Module         | Test Case Description                                                          | Expected Result                                                                         | Status | Priority | Notes                                   |
|----------------|----------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|--------|----------|------------------------------------------|
| MS_TC_001      | Media Sharing  | User taps "+" or attachment icon and selects “Camera”                          | Camera opens and user can capture photo/video to send                                   | Pass   | High     | Camera permission required               |
| MS_TC_002      | Media Sharing  | User taps "+" or attachment icon and selects “Photo/Video Library”             | Gallery opens and user can select existing media to send                                | Pass   | High     | Photo access permission required         |
| MS_TC_003      | Media Sharing  | User selects multiple photos/videos from library                               | All selected media files are sent in the same message batch                             | Pass   | Medium   | Limit depends on platform                |
| MS_TC_004      | Media Sharing  | User adds caption to a media file before sending                               | Media is sent with caption displayed below                                              | Pass   | Medium   | Supports emojis and text formatting      |
| MS_TC_005      | Media Sharing  | User sends unsupported file format via media option                            | Error message displayed, file is not sent                                               | Pass   | Medium   |                                           |
| MS_TC_006      | Media Sharing  | Recipient receives and views photo or video                                    | Image/video is visible, can be opened full screen                                       | Pass   | High     |                                           |
| MS_TC_007      | Media Sharing  | User forwards received media to another contact                                | Media is forwarded without quality loss                                                 | Pass   | Medium   | “Forwarded” label shown                  |
| MS_TC_008      | Media Sharing  | User previews a photo before sending                                           | Preview screen allows caption editing or media cropping                                | Pass   | Medium   |                                           |
| MS_TC_009      | Media Sharing  | User sends media while on low network                                          | Media is queued or shows sending failure until network is restored                      | Pass   | High     |                                           |
| MS_TC_010      | Media Sharing  | Media sent disappears after opening (when “View Once” is used)                 | Recipient can view it only once, then it disappears                                     | Pass   | Medium   | Available on updated builds only         |

---

## Platform Behavior Notes

| Platform     | Behavior Summary                                                                 |
|--------------|-----------------------------------------------------------------------------------|
| Android      | Supports full camera, gallery access, media previews, captions, and view-once     |
| iOS          | Smooth experience, native media picker and in-line previews                       |
| Web          | Limited to image/video/document upload via file selector                          |
| Desktop      | Supports drag-and-drop, system file picker, camera if permissions are granted     |

---

## Functional Notes

- Supported formats: `.jpg`, `.png`, `.mp4`, `.mov`, `.webp`, `.heic`, etc.
- File size limit varies (typically ~16MB for videos).
- View Once media cannot be saved or screenshotted (some platforms may bypass this).
- Media is end-to-end encrypted.
- Preview allows simple cropping, rotation, and adding text overlays.

---

## Required Permissions

- **Camera** – for capturing new photos/videos directly
- **Photos/Media/Files Access** – for sending from gallery
- **Microphone** – if sending video with audio
