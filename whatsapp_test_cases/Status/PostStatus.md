# WhatsApp – Posting Status Updates

This module includes test cases for creating and posting WhatsApp Status updates in various formats (text, image, video, link, etc.).

---

## Application Specifications

| Feature               | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| Post Status           | Users can post temporary updates visible to their contacts for 24 hours     |
| Media Types           | Supports text, images, videos, GIFs, and links                              |
| Privacy Controls      | Status visibility can be limited to specific contacts                       |
| Expiration            | Status posts automatically disappear after 24 hours                         |
| Edit/Delete Options   | Users can delete their status before expiry                                 |

- Status can be posted using camera, text, or gallery media.
- Captions and text overlays are supported on media.
- Users may preview before posting.

---

## Test Cases

| Test Case ID     | Module         | Test Case Description                                                  | Expected Result                                                                | Status | Priority | Notes                                     |
|------------------|----------------|------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------|----------|-------------------------------------------|
| STC_TC_035       | Post Status    | User posts a text-only status update                                   | Status appears in the user’s status section and is visible to allowed contacts| Pass   | High     |                                           |
| STC_TC_036       | Post Status    | User posts an image from gallery with caption                          | Image status is uploaded with caption visible                                 | Pass   | High     |                                           |
| STC_TC_037       | Post Status    | User captures and posts a video directly                               | Video is posted with standard compression and 24-hour expiration              | Pass   | High     |                                           |
| STC_TC_038       | Post Status    | User adds a URL in status                                              | Link is rendered as preview (if supported), otherwise plain text              | Pass   | Medium   |                                           |
| STC_TC_039       | Post Status    | User limits status visibility using privacy settings                   | Status is visible only to selected contacts                                   | Pass   | High     |                                           |
| STC_TC_040       | Post Status    | User deletes a posted status                                           | Status is immediately removed from all viewers' lists                         | Pass   | High     |                                           |
| STC_TC_041       | Post Status    | User tries to post unsupported file type                               | Error message is shown, status not uploaded                                   | Pass   | Medium   |                                           |
| STC_TC_042       | Post Status    | Status expires after 24 hours                                          | Status disappears from user's section and contacts' view                      | Pass   | High     |                                           |
| STC_TC_043       | Post Status    | User previews status before posting                                    | Status preview screen opens with option to edit or discard                    | Pass   | Medium   |                                           |
| STC_TC_044       | Post Status    | User posts multiple status items                                       | All statuses appear in sequence for viewers                                   | Pass   | Medium   |                                           |

---

## Platform Behavior Notes

| Platform       | Post Status Support | Notes                                                                 |
|----------------|---------------------|-----------------------------------------------------------------------|
| Android        | Supported           | Full support for media capture, editing, and filters                  |
| iOS            | Supported           | Similar feature set, slight UI variation in editor                    |
| Web/Desktop    | Partial             | Can post text and media from desktop; no direct camera capture        |

---

## Notes

- Image and video statuses may be compressed to reduce size.
- Long videos may be split or trimmed.
- Status can be saved to device before posting.
