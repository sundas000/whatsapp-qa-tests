# WhatsApp – Group Admin Rights

This module outlines the functionality related to assigning and managing admin rights within a WhatsApp group.

---

## Application Specifications

| Feature                     | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| Assign Admin Role           | Existing admin can promote a group member to admin                          |
| Remove Admin Role           | Admin can revoke admin rights from another admin                           |
| Multiple Admins             | A group can have more than one admin                                        |
| Admin Label                 | Admins are marked with “admin” in the group info panel                      |
| Admin Rights Transfer       | Primary admin can transfer full control (if creator leaves the group)       |

- Only current admins can modify admin roles.
- Admin actions are visible in group activity logs (chat system messages).
- Some features (like “Only Admins Can Post”) are admin-controlled.

---

## Test Cases

| Test Case ID     | Module             | Test Case Description                                                       | Expected Result                                                                 | Status | Priority | Notes                    |
|------------------|--------------------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|--------------------------|
| GAR_TC_001        | Group Admin Rights | Promote a member to admin                                                   | Member becomes admin and is labeled as such in group info                        | Pass   | High     |                          |
| GAR_TC_002        | Group Admin Rights | Revoke admin rights from a member                                           | Member loses admin status and label is removed                                  | Pass   | High     |                          |
| GAR_TC_003        | Group Admin Rights | Promote multiple members                                                    | All selected members are granted admin privileges                                | Pass   | Medium   |                          |
| GAR_TC_004        | Group Admin Rights | Admin tries to remove their own admin rights                                | Option not available or warning is displayed                                     | Pass   | Medium   | Depends on implementation|
| GAR_TC_005        | Group Admin Rights | Transfer control after creator leaves                                       | Another admin is auto-assigned as group owner or creator manually chooses        | Pass   | Medium   |                          |
| GAR_TC_006        | Group Admin Rights | Member tries to assign admin role                                           | Action fails or option not visible                                               | Pass   | High     |                          |

---

## Platform Behavior Notes

| Platform       | Promote Admin | Revoke Admin | Notes                                                              |
|----------------|----------------|----------------|--------------------------------------------------------------------|
| Android        | ✅ Supported   | ✅ Supported | Available in Group Info via member list                            |
| iOS            | ✅ Supported   | ✅ Supported | Same features, slightly different UI flow                          |
| Web/Desktop    | ✅ Supported   | ✅ Supported | Admin actions accessible through group info > participants section |

---

## Notes

- Admins are not notified via alert; changes are visible in the group info and chat log.
- WhatsApp Business and Communities support similar admin privileges.
- Settings like “Only Admins Can Send Messages” can be configured from group settings.
