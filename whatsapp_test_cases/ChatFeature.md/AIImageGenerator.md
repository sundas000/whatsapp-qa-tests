# Test Cases – AI Image Generator

## Description
Tests the functionality of generating and sharing AI-generated images using the "+" attachment menu inside a chat.

## Platforms Covered
- Android
- iOS

## Preconditions
- User is logged into WhatsApp.
- AI image generation is available and supported in the user's region/account.
- User is in an individual or group chat.

| Test Case ID       | Module               | Test Case Description                                                       | Expected Result                                                             | Status | Priority | Notes                                 |
|--------------------|----------------------|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------|--------|----------|---------------------------------------|
| AIIMG_TC_001       | AI Image Generator   | Tap "+" and select "AI Image" from attachment options                        | AI Image prompt input screen appears                                        | Pass   | High     |                                       |
| AIIMG_TC_002       | AI Image Generator   | Enter text prompt and tap "Generate"                                         | AI processes and shows image(s)                                            | Pass   | High     | Prompt should support basic language  |
| AIIMG_TC_003       | AI Image Generator   | Leave input blank and tap "Generate"                                         | Error message shown or button disabled                                     | Pass   | High     | Validation check                      |
| AIIMG_TC_004       | AI Image Generator   | Tap on generated image to preview before sending                             | Image preview screen opens                                                 | Pass   | Medium   |                                       |
| AIIMG_TC_005       | AI Image Generator   | Send AI-generated image                                                      | Image is sent in chat as regular media                                     | Pass   | High     |                                       |
| AIIMG_TC_006       | AI Image Generator   | Cancel generation midway                                                     | Process is stopped and user returned to chat                               | Pass   | Medium   |                                       |
| AIIMG_TC_007       | AI Image Generator   | Generate multiple variations of the same prompt                              | Multiple AI image versions are shown                                       | Pass   | Medium   | If supported                          |
| AIIMG_TC_008       | AI Image Generator   | View sent image in chat                                                      | Tapping on image opens full screen view                                    | Pass   | Medium   |                                       |
| AIIMG_TC_009       | AI Image Generator   | Attempt to use inappropriate or banned words in prompt                       | Blocked with error message or moderation warning                           | Pass   | High     | Safety filter check                   |
| AIIMG_TC_010       | AI Image Generator   | Low bandwidth or no internet during generation                               | Error shown, generation failed gracefully                                  | Pass   | High     |                                       |
