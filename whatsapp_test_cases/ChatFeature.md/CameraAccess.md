# Test Cases – Camera Access

## Description
Tests the in-app camera feature accessed via the "+" icon in a chat, allowing the user to capture and send a new photo or video.

## Platforms Covered
- Android
- iOS
- Web
- Desktop (Windows/macOS)

## Preconditions
- User is logged in and inside a chat window.
- Necessary camera permissions are granted.

| Test Case ID     | Module         | Test Case Description                                         | Expected Result                                                  | Status | Priority | Notes |
|------------------|----------------|----------------------------------------------------------------|-------------------------------------------------------------------|--------|----------|-------|
| CAMERA_TC_001    | Camera Access  | Tap "+" icon and select "Camera"                              | Device camera opens within the app                               | Pass   | High     |       |
| CAMERA_TC_002    | Camera Access  | Capture a photo and send                                      | Photo is sent to recipient immediately                           | Pass   | High     |       |
| CAMERA_TC_003    | Camera Access  | Capture a video and send                                      | Video is sent to recipient after recording                       | Pass   | High     |       |
| CAMERA_TC_004    | Camera Access  | Cancel the camera without capturing                           | Returns to chat without sending any media                        | Pass   | Medium   |       |
| CAMERA_TC_005    | Camera Access  | Attempt to access camera with permissions denied              | App displays permission error message or system permission prompt| Pass   | High     |       |
| CAMERA_TC_006    | Camera Access  | Use front and rear camera toggle                              | Camera toggles successfully                                      | Pass   | Medium   |       |
| CAMERA_TC_007    | Camera Access  | Verify flashlight toggle                                      | Flash toggles ON/OFF correctly                                   | Pass   | Low      |       |
| CAMERA_TC_008    | Camera Access  | Check camera access in low battery mode                       | Camera opens and functions normally or shows battery warning     | Pass   | Medium   |       |
| CAMERA_TC_009    | Camera Access  | Record long video and check size limit                        | App warns or restricts if limit exceeded                         | Pass   | Medium   |       |
