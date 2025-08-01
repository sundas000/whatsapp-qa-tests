# WhatsApp – Join Group via Link or QR Code

This module outlines the functionality and behavior of joining WhatsApp groups through invite links or QR codes.

---

## Application Specifications

| Feature               | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| Invite Link           | Admins can generate a shareable group invite link                          |
| QR Code               | Generated from the invite link; can be scanned to join                     |
| Approval Requirement  | If "Admin Approval" is enabled, joining via link/QR triggers request       |
| Revoke Invite         | Admins can reset the invite link/QR to invalidate previous access          |
| Cross-Platform Access | Links/QR codes can be used across Android, iOS, and Web/Desktop platforms  |

- Available in **Group Info > Invite to Group via Link**
- Users not in the group can join via shared link/QR, depending on settings

---

## Test Cases

| Test Case ID   | Module                  | Test Case Description                                                         | Expected Result                                                               | Status | Priority | Notes                         |
|----------------|--------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------|----------|-------------------------------|
| JGL_TC_001      | Join Group via Link      | Admin generates group invite link                                             | Link is generated and can be copied or shared                                 | Pass   | High     |                              |
| JGL_TC_002      | Join Group via QR Code   | Admin views QR code from invite link screen                                   | QR is visible and can be scanned                                              | Pass   | Medium   |                              |
| JGL_TC_003      | Join group via shared link| Non-member opens link and joins group                                         | User joins group if no approval needed                                        | Pass   | High     |                              |
| JGL_TC_004      | Join group with approval | Admin enables “Approve New Participants” and user tries to join via link      | Join request sent to admin for approval                                       | Pass   | High     |                              |
| JGL_TC_005      | Invalid QR Code          | Admin revokes invite link and old QR is scanned                               | User receives error or invalid invite message                                 | Pass   | Medium   |                              |
| JGL_TC_006      | Reuse group invite link  | Use same invite link across devices                                           | Link works on Android, iOS, and Web                                           | Pass   | Low      |                              |

---

## Platform Behavior Notes

| Platform       | Invite Link/QR Support | Scan/Join Support | Notes                                                           |
|----------------|------------------------|-------------------|-----------------------------------------------------------------|
| Android        | ✅ Supported           | ✅ Supported      | Invite link under Group Info; QR can be scanned via camera     |
| iOS            | ✅ Supported           | ✅ Supported      | Same options; QR scan via built-in scanner or camera           |
| Web/Desktop    | ✅ Supported           | ❌ Cannot scan    | Can open links, but scanning QR requires mobile device         |

---

## Notes

- Admins should be cautious when sharing links publicly as anyone can join unless approval is enabled.
- Revoking the link instantly disables both the link and its associated QR code.
- A new link/QR can be generated after revoking the previous one.
