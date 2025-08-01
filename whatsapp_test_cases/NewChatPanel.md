# WhatsApp – New Chat Panel (Plus Icon)

This module covers test cases for the “New Chat” panel accessed via the ➕ (plus) icon. The panel allows users to initiate new chats, create groups/communities, broadcast messages, and view frequently or fully contacted lists.

---

## Application Specifications

- **Platform Visibility**:
  - **Android/iOS**: Top-right corner ➕ icon
  - **Web/Desktop**: Side panel icon or button
- **Options in Panel**:
  - New Group
  - New Contact
  - New Community
  - Chat with AI (if supported in region)
  - New Broadcast
  - Frequently Contacted
  - Full Contact List

---

## Test Cases

| Test Case ID       | Module           | Test Case Description                                                  | Expected Result                                                              | Status | Priority | Notes                                |
|--------------------|------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------------|--------|----------|--------------------------------------|
| NCP_TC_001         | New Chat Panel   | User clicks the ➕ icon                                                 | New chat options panel opens with all options listed                         | Pass   | High     |                                      |
| NCP_TC_002         | New Group        | User clicks "New Group"                                                | Redirected to group creation screen                                          | Pass   | High     | Group creation covered separately     |
| NCP_TC_003         | New Contact      | User clicks "New Contact"                                              | New contact creation form opens                                              | Pass   | Medium   | Validates contact sync               |
| NCP_TC_004         | New Community    | User selects "New Community"                                           | Community creation flow begins                                               | Pass   | Medium   | If feature is supported in region     |
| NCP_TC_005         | Chat with AI     | User selects "Chat with AI"                                            | AI chat opens (e.g., Meta AI or other LLM-powered assistant)                 | Pass   | Medium   | Feature availability may vary         |
| NCP_TC_006         | New Broadcast    | User clicks "New Broadcast"                                            | Broadcast list creation flow starts                                          | Pass   | Medium   |                                      |
| NCP_TC_007         | Frequent List    | "Frequently contacted" section is visible                              | Most contacted users are displayed at top                                   | Pass   | Medium   |                                      |
| NCP_TC_008         | All Contacts     | Full contact list is shown below quick options                         | User sees full synced contact list                                           | Pass   | High     | Sync permission must be enabled       |
| NCP_TC_009         | Permissions      | Contact access denied                                                  | App prompts user to allow access or shows error                              | Pass   | High     |                                      |
| NCP_TC_010         | UI/UX            | All UI elements load correctly on panel open                           | No UI glitches or lag in rendering                                           | Pass   | Medium   | Across screen sizes                   |

---

## Platform Behavior Notes

| Platform       | Plus Icon Location   | Contact Creation Supported | Chat with AI | UI Notes                                 |
|----------------|----------------------|-----------------------------|---------------|-------------------------------------------|
| Android        | Top-right corner     | Yes                         | Yes (Meta AI in beta regions) | Full contact sync & frequent list visible |
| iOS            | Top-right corner     | Yes                         | Yes           | Similar layout to Android                 |
| Web/Desktop    | Sidebar or top panel | Yes                         | Limited or Not Supported    | Contact creation may redirect to mobile   |

---

