# WhatsApp – View Status Viewers

This module documents the behavior and test cases related to viewing who has seen your posted WhatsApp status.

---

## Application Specifications

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| View Status Viewers    | Allows users to see a list of contacts who viewed their posted status updates |
| Visibility Dependency  | Viewers list is visible only if both parties have read receipts enabled     |
| Time Tracking          | Timestamps of views are not shown                                           |

---

## Test Cases

| Test Case ID     | Module             | Test Case Description                                                    | Expected Result                                                             | Status | Priority | Notes                                               |
|------------------|--------------------|---------------------------------------------------------------------------|------------------------------------------------------------------------------|--------|----------|-----------------------------------------------------|
| STS_TC_001       | View Status Viewers | User opens their own status and swipes up                                | A list of contacts who viewed the status should be displayed                | Pass   | High     | Available only for statuses still active           |
| STS_TC_002       | View Status Viewers | Viewer has disabled read receipts                                        | Their name will not appear in the viewer list                              | Pass   | Medium   | Both users must have read receipts ON              |
| STS_TC_003       | View Status Viewers | Status expires before user checks viewers list                           | Viewer list will no longer be available                                    | Pass   | High     |                                                     |
| STS_TC_004       | View Status Viewers | No one has viewed the posted status yet                                  | Viewer list should show “No viewers yet” or stay blank                     | Pass   | Medium   |                                                     |
| STS_TC_005       | View Status Viewers | Viewer blocks the user after watching the status                         | Viewer will still appear in the viewer list                                | Pass   | Low      |                                                     |

---

## Platform Behavior Notes

| Platform       | View Status Viewers | Notes                                                      |
|----------------|----------------------|------------------------------------------------------------|
| Android        | ✅ Supported          | Long press or swipe up to view                            |
| iOS            | ✅ Supported          | Same behavior as Android                                  |
| Web/Desktop    | 🔸 Partially          | May not support swipe-up gesture; viewer list may vary     |

---

## Notes

- Read receipts setting directly affects the ability to see or appear in viewer lists.
- Viewer tracking is disabled once a status expires (after 24 hours).
- No notification is sent to users when someone checks their posted status.
