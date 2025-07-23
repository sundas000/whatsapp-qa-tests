# WhatsApp – Start a Chat & Send Media

This module tests the flow for starting a new chat and sending media (images or videos) via Camera or Gallery.

---

## Application Specifications

- Users can start a chat by tapping the "New Chat" icon.
- Users can:
  - Select a contact from their synced contact list
  - Search for a contact by name
- Media options:
  - **Camera** – capture a new photo/video
  - **Gallery / Photo Library** – pick existing media
- Platform behavior:
  - iOS shows "Photo Library", Android shows "Gallery"
  - Web/Desktop support upload only via file picker or drag-and-drop

---

## Test Cases

| Test Case ID     | Module             | Test Case Description                                                                    | Expected Result                                                                      | Status | Priority | Notes                                                  |
|------------------|--------------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|--------|----------|--------------------------------------------------------|
| CHAT_TC_001      | Chat Start         | User taps “New Chat” icon                                                                 | Contact list should open with a search bar                                           | Pass   | High     | All platforms                                          |
| CHAT_TC_002      | Chat Start         | User searches for a contact by name                                                       | Matching contacts should be shown instantly                                          | Pass   | High     | Instant filtering expected                            |
| CHAT_TC_003      | Chat Start         | User selects a contact and starts typing a message                                        | Cursor should be placed in message input; keyboard opens                             | Pass   | High     |                                                        |
| CHAT_TC_004      | Text Message       | User sends a valid text message                                                           | Message should appear in chat with sent/delivered ticks                              | Pass   | High     | Check message status indicators                       |
| CHAT_TC_005      | Camera Access      | User taps Camera icon and takes a photo                                                   | Camera opens, photo is captured and previewed                                        | Pass   | High     | Android/iOS only                                      |
| CHAT_TC_006      | Media from Gallery | User selects photo/video from gallery and sends it                                        | Media should be shown in preview and sent upon confirmation                         | Pass   | High     | iOS: "Photo Library", Web: File Picker                |
| CHAT_TC_007      | Invalid Media      | User attempts to send an unsupported file type                                            | App should show error: “Unsupported file type”                                       | Pass   | Medium   |                                                        |
| CHAT_TC_008      | Cancel Media Send  | User opens media picker and presses back/cancel                                          | App should return to chat screen without sending                                     | Pass   | Medium   |                                                        |
| CHAT_TC_009      | Multiple Media     | User selects multiple media items from gallery and sends them                            | All selected items should be displayed and sent together                             | Pass   | Medium   | Android/iOS only                                      |
| CHAT_TC_010      | Drag and Drop      | On desktop, user drags photo into chat screen                                             | Photo should attach to message input and send button should be enabled               | Pass   | Medium   | Web/Desktop only                                      |
| CHAT_TC_011      | Media Preview      | User previews image before sending                                                        | Zoom and caption options should be available before sending                          | Pass   | Medium   |                                                        |
| CHAT_TC_012      | Large File Limit   | User tries to send media exceeding platform size limits                                   | Error message should appear: "File too large to send"                                | Pass   | Medium   | Varies per platform                                   |

---

## Platform Behavior Notes

| Platform       | Chat Start                 | Media Options                               | Notes                                       |
|----------------|----------------------------|---------------------------------------------|---------------------------------------------|
| Android        | Uses system gallery/camera | Camera, Gallery                             | Needs runtime permissions                   |
| iOS            | Uses iOS UI                | Camera, Photo Library                       | May show “Limited Access” photo view        |
| WhatsApp Web   | Search + File Picker       | Upload via system file picker only          | No camera access                            |
| Desktop App    | Same as Web                | Upload via drag & drop or file dialog       | System camera not supported natively        |
