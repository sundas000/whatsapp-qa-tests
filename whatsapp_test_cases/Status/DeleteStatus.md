# WhatsApp – Delete Status

This module documents the deletion of status updates posted by the user on WhatsApp.

---

## Application Specifications

| Feature             | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| Delete Status        | Users can delete their own status update before the 24-hour expiration     |
| Access Path          | Users go to “My Status” > tap on status > options > delete                 |
| Effect               | Deleted status is removed for all viewers immediately                      |

- Deletion is user-triggered and applies only to self-posted statuses.
- No confirmation is sent to viewers.
- Deletion action is instant and cannot be undone.

---

## Test Cases

| Test Case ID     | Module         | Test Case Description                                                     | Expected Result                                                           | Status | Priority | Notes                    |
|------------------|----------------|----------------------------------------------------------------------------|---------------------------------------------------------------------------|--------|----------|--------------------------|
| STC_TC_009       | Delete Status  | User taps on a posted status and selects delete from options              | Status is removed from “My Status” and no longer visible to viewers      | Pass   | High     |                          |
| STC_TC_010       | Delete Status  | User deletes one status from a sequence of multiple statuses              | Only the selected status is deleted; others remain visible               | Pass   | High     |                          |
| STC_TC_011       | Delete Status  | User attempts to delete status after 23 hours                             | Status can still be deleted before expiration time                       | Pass   | Medium   |                          |
| STC_TC_012       | Delete Status  | User tries to delete expired status (after 24 hours)                      | Status is already auto-removed; delete option not available              | Pass   | Low      |                          |

---

## Platform Behavior Notes

| Platform       | Delete Status | Notes                                                        |
|----------------|----------------|--------------------------------------------------------------|
| Android        |  Supported   | Long-press or menu option available in “My Status” section   |
| iOS            |  Supported   | Similar flow with swipe or options button                    |
| Web/Desktop    |  Partial     | Delete from “My Status” view may not be available in all versions |

---

## Notes

- Once deleted, status cannot be recovered.
- Deleting status does not notify any contacts.
- Recommended before sensitive content is viewed by unintended users.
