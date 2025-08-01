# WhatsApp – Group Media & File Sharing

This module documents the ability to send and receive media (photos, videos, documents, etc.) within WhatsApp group chats, including limitations and behavior across platforms.

---

## Application Specifications

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| Send Photos/Videos     | Users can send photos/videos from gallery or camera to group                |
| Send Documents         | PDF, DOCX, and other files can be shared in group chats                     |
| Send Audio             | Voice messages or audio files can be sent                                  |
| Download/View Media    | All group members can download/view shared files and media                 |
| Media Forwarding       | Shared media can be forwarded to other chats or saved locally              |
| Media Preview          | Inline preview available for most media types                              |

---

## Test Cases

| Test Case ID     | Module               | Test Case Description                                                   | Expected Result                                                  | Status | Priority | Notes                      |
|------------------|----------------------|-------------------------------------------------------------------------|------------------------------------------------------------------|--------|----------|----------------------------|
| GMFS_TC_001       | Media Sharing         | Send photo to group                                                     | All members receive and can view/download the photo             | Pass   | High     |                            |
| GMFS_TC_002       | Media Sharing         | Send video to group                                                     | All members receive and can play/download video                 | Pass   | High     |                            |
| GMFS_TC_003       | File Sharing          | Send PDF document                                                       | All members receive and can open or download the file           | Pass   | High     |                            |
| GMFS_TC_004       | Audio Sharing         | Send voice message                                                      | All members can listen and see playback controls                | Pass   | High     |                            |
| GMFS_TC_005       | Media Forwarding      | Forward image from group chat                                           | Image appears in new chat with "forwarded" label                | Pass   | Medium   |                            |
| GMFS_TC_006       | Media Download        | Tap media to download                                                   | File or media begins downloading and opens on completion        | Pass   | High     |                            |

---

## Platform Behavior Notes

| Platform       | Send Media | Download/View | Forward | Audio Support | Notes                                  |
|----------------|------------|----------------|---------|---------------|----------------------------------------|
| Android        | ✅ Yes     | ✅ Yes         | ✅ Yes | ✅ Yes        | Smooth playback and preview support    |
| iOS            | ✅ Yes     | ✅ Yes         | ✅ Yes | ✅ Yes        | iOS native viewer opens documents      |
| Web/Desktop    | ✅ Yes     | ✅ Yes         | ✅ Yes | ✅ Yes        | Requires permission for downloads      |

---

## Notes

- Media is compressed automatically by WhatsApp unless sent as a document.
- Large file uploads are subject to platform-defined limits (generally up to 2GB).
- Forwarded media includes a “forwarded” label for transparency.
