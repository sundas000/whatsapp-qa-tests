# WhatsApp – Chat Filters (All, Unread, Favorites, Groups)

This module documents the behavior and validation of the Chat Filter tabs introduced in WhatsApp UI. These tabs allow users to view filtered views of their chat list for better navigation.

---

## Application Specifications

- **Tabs Present**:
  - **All**: Displays all chats (default view)
  - **Unread**: Only chats with unread messages
  - **Favorites**: Manually marked important chats
  - **Groups**: Only group conversations
- **Location**: Top of chat list below the search bar
- **Expected Behavior**:
  - Tapping a tab changes the active filter
  - The UI should update the chat list in real time

---

## Test Cases

| Test Case ID       | Module         | Test Case Description                                            | Expected Result                                                        | Status | Priority | Notes                                   |
|--------------------|----------------|------------------------------------------------------------------|------------------------------------------------------------------------|--------|----------|-----------------------------------------|
| CF_TC_001          | Chat Filters   | Default view on opening WhatsApp                                 | “All” tab is selected, and all chats are shown                         | Pass   | High     |                                          |
| CF_TC_002          | Chat Filters   | User taps on “Unread”                                            | Only chats with unread messages are displayed                         | Pass   | High     |                                          |
| CF_TC_003          | Chat Filters   | User taps on “Favorites”                                         | Only favorited (starred) chats appear                                 | Pass   | Medium   | Favorite feature must be enabled        |
| CF_TC_004          | Chat Filters   | User taps on “Groups”                                            | Only group chats are listed                                           | Pass   | High     |                                          |
| CF_TC_005          | Chat Filters   | User switches quickly between tabs                               | Chat list updates quickly and smoothly without UI glitches            | Pass   | Medium   |                                          |
| CF_TC_006          | Chat Filters   | No unread chats present                                          | “Unread” tab should show an empty state message                       | Pass   | Low      |                                          |
| CF_TC_007          | Chat Filters   | No favorite chats added                                          | “Favorites” shows an empty prompt or add instruction                  | Pass   | Low      |                                          |
| CF_TC_008          | Chat Filters   | No group chats joined                                            | “Groups” tab shows no results or prompt to create/join a group        | Pass   | Low      |                                          |
| CF_TC_009          | Chat Filters   | UI style across light and dark mode                              | Tabs are visible and styled consistently in both modes                | Pass   | Low      |                                          |
| CF_TC_010          | Accessibility  | Tabs are accessible via screen reader or keyboard navigation     | Screen readers properly announce the selected filter                  | Pass   | Medium   | Particularly important for desktop/web  |

---

## Platform Behavior Notes

| Platform       | Filter Tabs Present? | Notes                                                        |
|----------------|----------------------|--------------------------------------------------------------|
| Android        | ✅ Yes                | Fully functional                                             |
| iOS            | ✅ Yes                | Functional, slightly different visual design                 |
| Web/Desktop    | ✅ Yes (Latest)       | May require recent version of WhatsApp Desktop/Web          |

---

## Notes

- Users can star messages or mark chats as favorites by long-pressing (Android) or swiping (iOS)
- Some platforms may roll this feature out in **stages** or **beta** only
