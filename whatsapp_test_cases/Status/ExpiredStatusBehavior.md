# WhatsApp – Expired Status Behavior

This module includes test cases for how WhatsApp handles user statuses after the 24-hour expiry window has passed.

---

## Application Specifications

| Feature                   | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| Status Expiry            | WhatsApp statuses automatically expire and are removed after 24 hours       |
| Auto-Deletion            | Expired statuses are deleted from servers and user view automatically       |
| Post-Expiry Limitations  | Expired statuses cannot be viewed, reacted to, forwarded, or replied to     |

---

## Test Cases

| Test Case ID     | Module                 | Test Case Description                                                        | Expected Result                                                             | Status | Priority | Notes                                       |
|------------------|------------------------|--------------------------------------------------------------------------------|------------------------------------------------------------------------------|--------|----------|---------------------------------------------|
| STS_TC_023       | Expired Status         | Status automatically expires after 24 hours                                  | Status is removed from “My Status” and contacts’ views                     | Pass   | High     |                                              |
| STS_TC_024       | Expired Status         | User attempts to view their own expired status                               | Status should not appear in “My Status”                                     | Pass   | High     |                                              |
| STS_TC_025       | Expired Status         | Contact tries to view another user's expired status                          | Status is not visible; not listed in Status screen                          | Pass   | High     |                                              |
| STS_TC_026       | Expired Status         | Attempt to forward or reply to expired status                                | Action is blocked; user gets error or no action possible                    | Pass   | Medium   |                                              |
| STS_TC_027       | Expired Status         | Status expiration occurs while user is offline                               | Status is removed once user reconnects to the internet                      | Pass   | Medium   |                                              |
| STS_TC_028       | Expired Status         | Status expiration respected across all devices (linked devices)              | Status disappears from all devices after 24 hours                           | Pass   | High     |                                              |
| STS_TC_029       | Expired Status         | User tries to open notification linked to an expired status                  | Notification leads to a blank or “status unavailable” screen                | Pass   | Medium   |                                              |

---

## Platform Behavior Notes

| Platform       | Expired Status Support | Notes                                                                |
|----------------|------------------------|----------------------------------------------------------------------|
| Android        | ✅ Supported           | Expiry and auto-cleanup is consistent                               |
| iOS            | ✅ Supported           | Push notifications may linger but link to expired status is blocked |
| Web/Desktop    | ✅ Supported           | Expired statuses are removed as expected                            |

---

## Notes

- There is no manual option to extend a status's life beyond 24 hours.
- Notifications tied to expired statuses can still appear but lead to unavailable content.
- Status deletion due to expiry is final and cannot be reversed or recovered.
