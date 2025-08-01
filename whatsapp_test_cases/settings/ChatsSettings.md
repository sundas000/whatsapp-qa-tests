# Chats Settings

## Feature Description
Chats Settings in WhatsApp allow users to customize their messaging experience, including chat appearance, backup settings, chat history actions, wallpaper customization, and archive behavior.

## Feature Specifications

| Item                     | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| Chat Backup              | Backup chats to Google Drive (Android) or iCloud (iOS) manually or automatically |
| Chat History             | Export chat, clear all chats, delete all chats                             |
| Archive Chats            | Archive chat threads; control whether archived chats remain archived after new messages |
| Wallpaper                | Customize wallpaper per chat or globally                                   |
| Font Size (Android only) | Change chat font size (Small, Medium, Large)                               |
| Enter is Send            | Toggle sending message with Enter key (Android only)                       |

## Test Cases

| Test Case ID | Scenario                              | Steps                                                                                     | Expected Result                                                             | Platform       |
|--------------|----------------------------------------|-------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|----------------|
| TC-CS-01     | Backup chats manually                 | Settings > Chats > Chat Backup > Tap “Back Up”                                           | Chats and media are backed up to Google Drive/iCloud                        | Android, iOS   |
| TC-CS-02     | Change wallpaper for a chat           | Open chat > Tap chat name > Wallpaper & Sound > Choose wallpaper                         | Selected wallpaper is applied to that chat                                  | Android, iOS   |
| TC-CS-03     | Export individual chat                | Settings > Chats > Chat History > Export Chat > Select chat                              | Chat is exported via selected method (email, drive, etc.)                   | Android, iOS   |
| TC-CS-04     | Enable “Enter is send” option         | Settings > Chats > Turn on “Enter is Send”                                               | Pressing Enter key sends message instead of inserting newline              | Android        |
| TC-CS-05     | Adjust font size                      | Settings > Chats > Font Size > Select a size                                             | Font size in chat screen changes accordingly                                | Android        |
| TC-CS-06     | Archive chat and toggle archive rule  | Archive a chat > Settings > Chats > Keep Chats Archived toggle                           | Archived chats stay archived (or not) based on toggle                       | Android, iOS   |

## Platform Behavior

- **Android**: Offers additional options like font size and Enter key behavior; Google Drive used for backups.
- **iOS**: Uses iCloud for backups; no font size option; settings structure slightly different.
- **Web/Desktop**: No chat setting changes allowed; syncs based on mobile settings.

## Notes
- Archived chats can be unarchived by sending or receiving a new message depending on settings.
- Wallpaper and font size customizations do not affect the receiver’s interface.
- Backups do not include call history or status updates.
