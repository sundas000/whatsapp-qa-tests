# Storage and Data Settings

## Feature Description
Storage and Data Settings in WhatsApp provide users with control over media auto-download behavior, network usage, and device storage consumption. These settings help optimize performance, data usage, and manage media-heavy chats.

## Feature Specifications

| Item                         | Description                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| Network Usage                | View sent/received message count, bytes used, call time, and data consumption |
| Storage Usage                | List of chats sorted by size; manage/delete media or messages per chat      |
| Media Auto-Download          | Configure automatic download of photos, audio, videos, and documents based on connection (Wi-Fi, mobile data, roaming) |
| Media Upload Quality         | Select image/video quality during sending (Auto, Best Quality, Data Saver)  |
| Use Less Data for Calls      | Option to reduce data usage during voice/video calls                        |
| Manage Downloads (iOS)       | Enable/disable media saving to Photos app                                   |

## Test Cases

| Test Case ID | Scenario                                     | Steps                                                                                   | Expected Result                                                             | Platform       |
|--------------|----------------------------------------------|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------------|----------------|
| TC-SDS-01    | View storage usage                           | Settings > Storage and Data > Manage Storage                                            | List of chats with media size appears                                       | Android, iOS   |
| TC-SDS-02    | Clear media from specific chat               | Settings > Storage and Data > Manage Storage > Select Chat > Clear Selected Media       | Selected media is deleted, freeing up space                                 | Android, iOS   |
| TC-SDS-03    | Set auto-download for photos on Wi-Fi only   | Settings > Storage and Data > Media Auto-Download > Photos > Select “Wi-Fi”             | Photos auto-download only on Wi-Fi                                          | Android, iOS   |
| TC-SDS-04    | Change media upload quality                  | Settings > Storage and Data > Media Upload Quality > Select “Data Saver”                | Sent media quality is compressed accordingly                                | Android, iOS   |
| TC-SDS-05    | Enable data saver for calls                  | Settings > Storage and Data > Use Less Data for Calls > Enable                          | Calls consume less bandwidth with slight impact on quality                  | Android, iOS   |
| TC-SDS-06    | View network usage                           | Settings > Storage and Data > Network Usage                                             | Breakdown of data sent/received is shown                                    | Android, iOS   |
| TC-SDS-07    | Disable media save to gallery (iOS)          | Settings > Storage and Data > Save to Camera Roll > Toggle off                          | Media no longer saves automatically to the Photos app                       | iOS            |

## Platform Behavior

- **Android**: More granular control over each media type for mobile data, Wi-Fi, and roaming.
- **iOS**: Focused on camera roll preferences and auto-download; network stats are available but less detailed.
- **Web/Desktop**: Media download is manual; auto-download and storage usage are controlled by browser/system.

## Notes
- Disabling auto-download can prevent storage bloat on devices with limited space.
- “Use Less Data for Calls” may reduce voice/video quality slightly depending on network.
- Storage management tools help users clean up unnecessary media from old chats.
