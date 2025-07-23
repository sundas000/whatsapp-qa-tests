# WhatsApp – Chat List

The Chat List module includes test cases for viewing, managing, and interacting with the list of ongoing conversations in WhatsApp. This includes filtering, ordering, previewing messages, time stamps, unread indicators, and visual cues.

---

## Application Specifications

| Feature         | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| Chat List       | Displays all active conversations, ordered by recent activity               |
| Message Preview | Shows a snippet of the latest message per chat, along with timestamp        |
| Unread Count    | Indicates how many unread messages exist per chat                           |
| Chat Filters    | Tabs for All, Unread, Groups, and Favorites (varies slightly by platform)   |
| Chat States     | Archived, Muted, Pinned, Locked, Starred chats visually distinguished       |

---

## Test Cases

| Test Case ID     | Module         | Test Case Description                                                        | Expected Result                                                                    | Status | Priority | Notes                                |
|------------------|----------------|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|--------|----------|--------------------------------------|
| CHL_TC_001        | Chat List      | User launches app and views chat list                                        | Chat list loads with most recent chats at the top                                  | Pass   | High     |                                      |
| CHL_TC_002        | Chat List      | User sees unread messages in chat preview                                    | Bold text with unread count badge appears                                          | Pass   | High     |                                      |
| CHL_TC_003        | Chat List      | User sees message preview and time                                            | Preview of last message and timestamp are visible                                 | Pass   | High     |                                      |
| CHL_TC_004        | Chat List      | User receives a new message                                                   | Chat bubbles up to top, unread badge increases                                     | Pass   | High     |                                      |
| CHL_TC_005        | Chat List      | User scrolls through the list                                                 | Chats are scrollable with smooth performance                                       | Pass   | Medium   |                                      |
| CHL_TC_006        | Chat List      | User accesses “All” tab                                                       | All chats (read/unread, groups/individuals) are shown                              | Pass   | High     | Android, Web, Desktop                |
| CHL_TC_007        | Chat List      | User accesses “Unread” tab                                                    | Only unread chats are shown                                                        | Pass   | Medium   |                                      |
| CHL_TC_008        | Chat List      | User accesses “Groups” tab                                                    | Only group chats are listed                                                        | Pass   | Medium   |                                      |
| CHL_TC_009        | Chat List      | User accesses “Favorites” tab                                                 | Only marked favorites are listed                                                   | Pass   | Low      | May not exist on all platforms       |
| CHL_TC_010        | Chat List      | User long-presses a chat                                                      | Options like Archive, Mute, Pin, Delete appear                                     | Pass   | High     | Mobile only                          |
| CHL_TC_011        | Chat List      | Pinned chat appears at the top even after new messages in others             | Pinned chat remains at top                                                         | Pass   | Medium   |                                      |
| CHL_TC_012        | Chat List      | Muted chat does not show sound notifications                                 | No vibration or sound even on message received                                     | Pass   | Medium   |                                      |
| CHL_TC_013        | Chat List      | Chat with no name shows phone number instead                                 | Correct fallback display                                                           | Pass   | Low      |                                      |
| CHL_TC_014        | Chat List      | Chat avatars/photos load correctly                                            | Profile pictures visible without delay                                             | Pass   | Low      | Desktop sometimes delays loading     |
| CHL_TC_015        | Chat List      | Locked chats are hidden from the main chat list                              | Not visible unless accessed from “Locked Chats” section                            | Pass   | High     | Applies to mobile                    |

---

## Platform Notes

| Platform       | Tabs (All, Unread, Groups, Favorites) | Pinned Chats | Locked Chat Visibility | Performance Notes                     |
|----------------|----------------------------------------|--------------|-------------------------|----------------------------------------|
| Android        | ✅ Supported                           | ✅            | ✅ Hidden               | Smooth scrolling                       |
| iOS            | ✅ Supported                           | ✅            | ✅ Hidden               | Slight animation delay for avatars     |
| Web/Desktop    | ✅ Supported (Some tabs missing)       | ✅            | 🔸 Not available        | Profile photos may delay on first load |

---

## Notes

- Chat ordering is based on most recent activity, including media and system messages.
- Pinned chats override default ordering.
- Message previews may vary slightly (e.g. “Photo”, “Voice message”, “GIF”).
- Starred messages are handled inside chat view, not chat list.

