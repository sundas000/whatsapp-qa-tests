# WhatsApp – Status Update via Camera Icon

This module covers test cases related to posting a status by using the camera icon in WhatsApp. The user can take a new photo or select one from the device and then add a caption before posting.

---

## Application Specifications

- The camera icon is typically located:
  - Top bar in **Mobile**
  - Sidebar or header in **Web/Desktop**
- Status is auto-disappearing (24 hours)
- Allows adding a **caption** before posting
- Permissions required: **Camera**, **Media Access**

---

## Test Cases

| Test Case ID       | Module              | Test Case Description                                                                 | Expected Result                                                              | Status | Priority | Notes                                 |
|--------------------|---------------------|----------------------------------------------------------------------------------------|------------------------------------------------------------------------------|--------|----------|---------------------------------------|
| STATUS_TC_001      | Status - Camera     | User clicks the camera icon                                                           | Camera view opens or file picker appears (platform dependent)               | Pass   | High     | Permission must be granted            |
| STATUS_TC_002      | Status - Take Photo | User captures a new photo using device camera                                         | Preview with option to add caption appears                                  | Pass   | High     |                                      |
| STATUS_TC_003      | Status - Add Photo  | User selects a photo from gallery or file picker                                      | Selected image opens in preview mode with caption field                     | Pass   | High     |                                      |
| STATUS_TC_004      | Status - Caption    | User adds a caption under the photo                                                   | Caption is displayed with the photo in preview and published status         | Pass   | Medium   | Max character limit validation        |
| STATUS_TC_005      | Status - Post       | User clicks "Post" after selecting image and entering caption                         | Status gets uploaded and appears under "My Status"                          | Pass   | High     |                                      |
| STATUS_TC_006      | Status - Cancel     | User exits the screen before posting                                                  | Status is not saved or uploaded                                             | Pass   | Medium   | UX validation                         |
| STATUS_TC_007      | Status - Permission | User denies camera or media access                                                    | App shows permission request or error prompt                                | Pass   | High     | Handle both Android/iOS permission flow |
| STATUS_TC_008      | Status - Multiple   | User posts multiple photos one after another                                          | All photos are shown in status view in order posted                         | Pass   | Medium   |                                      |

---

## Platform Behavior Notes

| Platform       | Camera Icon Location  | Photo Capture | Gallery Access       | Notes                                               |
|----------------|------------------------|----------------|------------------------|-----------------------------------------------------|
| Android        | Top-left corner        | Built-in Camera | Yes                   | Integrated with Android permissions                 |
| iOS            | Bottom tab (Status)    | Built-in Camera | Yes (Photos app)      | May ask for Photos/Camera separately                |
| Web/Desktop    | Sidebar under Status   | File Upload only | Yes (drag & drop)     | Camera capture not supported directly in all cases  |

---

