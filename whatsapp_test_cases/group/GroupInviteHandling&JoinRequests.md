# WhatsApp – Group Invite Handling & Join Requests

This module covers how group participants and admins handle group invites, joining via links, QR codes, or admin approvals.

---

## Application Specifications

| Feature                            | Description                                                                 |
|------------------------------------|-----------------------------------------------------------------------------|
| Invite via Link                    | Admins can generate a group invite link                                     |
| QR Code Sharing                    | Group can be joined by scanning a QR code                                   |
| Admin Approval for Join Requests  | Optional setting to require admin approval for new members via invite link |
| Revoke Invite Link                 | Admins can revoke and regenerate invite links                               |
| Join Request Notifications         | Admins receive alerts when someone requests to join                         |

---

## Test Cases

| Test Case ID   | Module                        | Test Case Description                                                    | Expected Result                                                        | Status | Priority | Notes                       |
|----------------|-------------------------------|--------------------------------------------------------------------------|------------------------------------------------------------------------|--------|----------|-----------------------------|
| GIHJR_TC_001   | Group Invite                  | Admin generates a group invite link                                     | Link is created and ready to share                                    | Pass   | High     |                             |
| GIHJR_TC_002   | Group Invite                  | Admin shares QR code for group                                           | QR code is generated and can be scanned to join                       | Pass   | Medium   |                             |
| GIHJR_TC_003   | Join Request                  | User tries to join group via link (with approval required)              | Join request sent to group admins                                     | Pass   | High     |                             |
| GIHJR_TC_004   | Join Request                  | Admin receives join request notification                                 | Notification appears in group chat/admin’s request list               | Pass   | High     |                             |
| GIHJR_TC_005   | Join Request                  | Admin approves a join request                                            | User joins the group                                                  | Pass   | High     |                             |
| GIHJR_TC_006   | Join Request                  | Admin rejects a join request                                             | User receives rejection notification (or request silently rejected)   | Pass   | Medium   |                             |
| GIHJR_TC_007   | Invite Link                   | Admin revokes invite link                                                | Old link becomes invalid and new one is generated                     | Pass   | Medium   |                             |
| GIHJR_TC_008   | Invite Link                   | User attempts to join using a revoked link                               | App shows error that the link is invalid                              | Pass   | High     |                             |

---

## Platform Behavior Notes

| Platform       | Generate Link | QR Code | Approve Requests | Revoke Link | Notes                             |
|----------------|---------------|---------|------------------|-------------|-----------------------------------|
| Android        | ✅ Yes        | ✅ Yes  | ✅ Yes           | ✅ Yes      | Full feature availability         |
| iOS            | ✅ Yes        | ✅ Yes  | ✅ Yes           | ✅ Yes      | Identical to Android              |
| Web/Desktop    | ✅ Yes        | ✅ Yes  | ✅ Yes           | ✅ Yes      | Admin actions sync across devices |

---

## Notes

- Admins can toggle approval settings from the group settings page.
- QR code and link-based invitations provide quick access, but security relies on the revoke feature.
- Join request approvals improve privacy in large public groups.
