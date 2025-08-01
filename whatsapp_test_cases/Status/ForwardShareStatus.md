# WhatsApp – Forward or Share a Status

This module outlines test cases for forwarding or sharing an existing WhatsApp Status to other chats, groups, or external apps if supported.

---

## Application Specifications

| Feature                  | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| Forward Status           | Allows users to forward a contact’s status update to other WhatsApp chats   |
| Share Status Externally  | Optionally allows sharing a status (image/video/text) outside WhatsApp      |
| Access Method            | Long-press on a contact’s status > Forward/Share option appears             |

---

## Test Cases

| Test Case ID     | Module               | Test Case Description                                                       | Expected Result                                                               | Status | Priority | Notes                                       |
|------------------|----------------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------|----------|---------------------------------------------|
| STS_TC_011       | Forward/Share Status | User forwards a status to a WhatsApp contact                                | Status is forwarded in chat with correct media and caption (if any)           | Pass   | High     | Applies to images, videos, and text statuses |
| STS_TC_012       | Forward/Share Status | User shares status externally via other apps (e.g., Instagram, Email)       | Share menu opens; content is exported to selected external platform           | Pass   | Medium   | May require storage permission              |
| STS_TC_013       | Forward/Share Status | User attempts to forward expired status                                     | Action is blocked; status is no longer available for sharing                  | Pass   | Medium   |                                             |
| STS_TC_014       | Forward/Share Status | User tries to forward status in airplane mode                               | Action fails with prompt to reconnect to internet                             | Pass   | Medium   |                                             |
| STS_TC_015       | Forward/Share Status | User cancels forwarding after media preview                                 | No action is taken; user returns to status viewer                             | Pass   | Low      |                                             |

---

## Platform Behavior Notes

| Platform       | Forward/Share Status | Notes                                                        |
|----------------|----------------------|--------------------------------------------------------------|
| Android        | ✅ Supported         | Supports both WhatsApp and external sharing                  |
| iOS            | ✅ Supported         | Full support for WhatsApp and system share sheet             |
| Web/Desktop    | 🔸 Partially         | Forwarding to WhatsApp only; external share may be limited   |

---

## Notes

- Forwarded statuses are sent as standard media messages with quoted context stripped.
- Not all statuses are allowed to be shared externally, depending on privacy or platform.
- Status cannot be forwarded if it is set to private by the original poster.
