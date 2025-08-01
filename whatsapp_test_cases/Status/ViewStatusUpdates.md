# WhatsApp – View Status Updates

This module covers the functionality related to viewing status updates shared by contacts on WhatsApp.

---

## Application Specifications

| Feature               | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| View Status Updates    | Allows users to view 24-hour disappearing status updates (images, videos, text) from their contacts |
| Navigation             | Accessible through the “Status” tab or screen on the main UI                |
| Status Sorting         | Sorted by recent activity; unseen statuses appear first                     |
| Read Indicator         | Seen/unseen statuses are visually indicated (e.g., color ring)              |
| Sequential Viewing     | Tapping one status auto-plays the next contact’s statuses                   |

- Users can swipe left/right to navigate through contacts’ status updates.
- Auto-transition occurs after each status ends (video/image).
- Muted statuses appear in a separate section at the bottom.

---

## Test Cases

| Test Case ID     | Module             | Test Case Description                                                | Expected Result                                                                 | Status | Priority | Notes                         |
|------------------|--------------------|-----------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|-------------------------------|
| STS_TC_001       | View Status        | User opens the “Status” tab from the main screen                     | Status updates from contacts are displayed                                      | Pass   | High     |                               |
| STS_TC_002       | View Status        | User taps on a contact’s status update                               | Status update opens in full-screen view with swipe navigation                   | Pass   | High     |                               |
| STS_TC_003       | View Status        | User finishes watching one status and the next one auto-plays        | Status from next contact begins playing automatically                          | Pass   | Medium   |                               |
| STS_TC_004       | View Status        | User revisits already watched status                                 | Status plays again but is marked as “seen”                                     | Pass   | Low      |                               |
| STS_TC_005       | View Status        | User swipes left/right during a status                               | App navigates to previous/next contact’s status                                | Pass   | Medium   |                               |
| STS_TC_006       | View Status        | User views muted status section                                      | Muted status updates appear separately at bottom                               | Pass   | Low      |                               |
| STS_TC_007       | View Status        | Status includes video or text                                        | Appropriate media is displayed and formatted correctly                         | Pass   | High     | Test both short/long formats |

---

## Platform Behavior Notes

| Platform       | View Status Updates | Notes                                                      |
|----------------|----------------------|------------------------------------------------------------|
| Android        | ✅ Supported         | Smooth transitions between contacts                        |
| iOS            | ✅ Supported         | Status layout and playback similar to Android              |
| Web/Desktop    | ✅ Limited Support   | Status view is read-only and sometimes restricted          |

---

## Notes

- Status updates expire after 24 hours and become inaccessible.
- Muted status updates do not trigger notifications.
- Some media types (e.g., GIFs, stickers) may behave differently across platforms.

