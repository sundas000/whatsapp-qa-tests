# Test Cases – Attach Photo

## Description
Tests the ability to attach and send a photo from the device's photo library within a chat.

## Platforms Covered
- Android
- iOS
- Web
- Desktop (Windows/macOS)

## Preconditions
- User is logged in and has an active chat open.
- Necessary media permissions are granted.

| Test Case ID     | Module         | Test Case Description                                         | Expected Result                                          | Status | Priority | Notes |
|------------------|----------------|----------------------------------------------------------------|-----------------------------------------------------------|--------|----------|-------|
| ATTACH_TC_001    | Attach Photo   | Tap on "+" icon and select "Photo" option                     | User is navigated to photo library                       | Pass   | High     |       |
| ATTACH_TC_002    | Attach Photo   | Select a photo from gallery                                   | Photo is previewed with option to add caption            | Pass   | High     |       |
| ATTACH_TC_003    | Attach Photo   | Add caption and tap "Send"                                    | Photo is sent to recipient with caption (if added)       | Pass   | High     |       |
| ATTACH_TC_004    | Attach Photo   | Cancel photo selection                                        | Action is cancelled and user returned to chat            | Pass   | Medium   |       |
| ATTACH_TC_005    | Attach Photo   | Select multiple photos (if supported)                         | All selected photos are previewed for sending            | Pass   | Medium   |       |
| ATTACH_TC_006    | Attach Photo   | Test unsupported file format in gallery (if visible)          | App skips or displays unsupported format message         | Pass   | Low      |       |
| ATTACH_TC_007    | Attach Photo   | Verify sending while offline                                  | Photo queued and sent once connection restores           | Pass   | Medium   |       |
| ATTACH_TC_008    | Attach Photo   | Verify behavior in low storage scenario                       | App shows error or blocks attachment if space is limited | Pass   | Medium   |       |

