# WhatsApp – Dropdown Menu: Select Chats Options

This module documents test cases for the dropdown menu on the top-left corner of WhatsApp Web/Desktop. It includes the "Select Chats" and its child actions: Archive, Mark as Read, and Delete.

---

## Application Specifications

- The three-dots dropdown provides quick actions:
  - **Select Chats**
    - Enables checkbox selection next to each chat
    - Shows bulk action buttons: Archive, Mark as Read, Delete
  - **Mark All as Read**
    - Marks all chats as read, including muted ones

These actions are commonly available in **Web/Desktop**, but mobile platforms may handle this via long-press.

---

## Test Cases

| Test Case ID       | Module              | Test Case Description                                              | Expected Result                                                    | Status | Priority | Notes                            |
|--------------------|---------------------|---------------------------------------------------------------------|---------------------------------------------------------------------|--------|----------|----------------------------------|
| DROPDOWN_TC_001     | Dropdown Menu       | User clicks on 3-dots icon at the top-left                         | A dropdown appears with options like "Select Chats", "Read All"    | Pass   | High     | Web/Desktop only                 |
| DROPDOWN_TC_002     | Select Chats        | User clicks "Select Chats" option                                  | Checkbox appears next to each chat                                 | Pass   | High     | Similar to long-press on mobile |
| DROPDOWN_TC_003     | Archive Chats       | User selects multiple chats and clicks Archive                     | All selected chats are archived                                    | Pass   | High     |                                  |
| DROPDOWN_TC_004     | Mark as Read        | User selects unread chats and clicks Mark as Read                  | All selected chats appear as read                                  | Pass   | High     |                                  |
| DROPDOWN_TC_005     | Delete Chats        | User selects chats and clicks Delete                               | Selected chats are deleted after confirmation                      | Pass   | High     | Confirmation modal required      |
| DROPDOWN_TC_006     | Cancel Selection    | User clicks outside or presses Esc while chats are selected        | Selection mode exits, checkboxes disappear                         | Pass   | Medium   | UX validation                    |
| DROPDOWN_TC_007     | Mixed Action State  | User selects a mix of read and unread chats, then clicks Mark Read | Only unread chats should change state to read                      | Pass   | Medium   |                                  |
| DROPDOWN_TC_008     | No Selection Action | User clicks action buttons without selecting any chat              | Buttons remain disabled                                             | Pass   | Medium   | Should be greyed-out             |

---

## Platform Behavior Notes

| Platform       | 3-Dot Menu Location   | Select Chats Feature | Archive/Delete from Menu | Notes                          |
|----------------|------------------------|------------------------|----------------------------|--------------------------------|
| Android        | Top right corner       | Via long-press         | Available after selection  | No checkbox UI                 |
| iOS            | Top right (ellipsis)   | Long-press gesture     | Available after selection  | Slightly different layout      |
| Web/Desktop    | Top left 3-dots menu   | Click → Checkbox mode  | Direct access via icons    | Includes visual checkboxes     |

---

