# WhatsApp – Group Media Sharing

This module covers how users can share media (photos, videos, documents, etc.) within a WhatsApp group, including behaviors, limits, and cross-platform consistency.

---

## Application Specifications

| Feature               | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| Supported Media Types | Images, videos, documents, contacts, location, audio                        |
| Multiple Media        | Users can send multiple media files at once                                 |
| Media Captioning      | Users can add captions to images/videos before sending                      |
| Preview Option        | Preview available before sending (except documents)                         |
| Permissions           | Media sending restricted for view-only or limited access members            |
| Message Info          | Shows which participants viewed/downloaded the media                       |

---

## Test Cases

| Test Case ID   | Module              | Test Case Description                                                  | Expected Result                                                   | Status | Priority | Notes                      |
|----------------|---------------------|------------------------------------------------------------------------|-------------------------------------------------------------------|--------|----------|----------------------------|
| GMS_TC_001     | Group Media Sharing | Send single image to group                                             | Image appears in group chat                                       | Pass   | High     |                            |
| GMS_TC_002     | Group Media Sharing | Send multiple images and videos at once                                | All media sent together, visible in correct sequence              | Pass   | High     |                            |
| GMS_TC_003     | Group Media Sharing | Add caption to image before sending                                    | Caption is attached to image and visible in group chat            | Pass   | Medium   |                            |
| GMS_TC_004     | Group Media Sharing | Share a document file in group                                         | Document is sent and can be downloaded by group participants      | Pass   | High     |                            |
| GMS_TC_005     | Group Media Sharing | Attempt to send media with restricted permissions                      | Sending option disabled or shows permission error                 | Pass   | Medium   | For non-admin/view-only    |
| GMS_TC_006     | Group Media Sharing | Tap "Message Info" on shared media                                     | Shows which members viewed or downloaded the media                | Pass   | Medium   |                            |
| GMS_TC_007     | Group Media Sharing | Share location/audio/contact in group                                  | Shared content visible and accessible to all members              | Pass   | Medium   |                            |

---

## Platform Behavior Notes

| Platform       | Media Sharing | Media Preview | Caption Support | Notes                                      |
|----------------|---------------|----------------|------------------|--------------------------------------------|
| Android        | ✅ Supported  | ✅ Supported   | ✅ Supported     | All features fully functional               |
| iOS            | ✅ Supported  | ✅ Supported   | ✅ Supported     | Works same as Android                       |
| Web/Desktop    | ✅ Supported  | ✅ Supported   | ✅ Supported     | Drag & drop also supported for media files  |

---

## Notes

- Media shared in group chats is end-to-end encrypted.
- Media size limits may vary across platforms but generally allow:
  - Videos: up to 16MB
  - Documents: up to 2GB
- Forwarding shared media is also supported unless restricted by admins.
