# Privacy Settings

## Feature Description
Privacy Settings in WhatsApp allow users to control who can see their personal information and interactions. This includes settings for Last Seen, Profile Photo, About, Status, Read Receipts, Groups, Live Location, and Fingerprint Lock.

## Feature Specifications

| Item                        | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| Last Seen & Online          | Set visibility to Everyone, My Contacts, My Contacts Except…, or Nobody     |
| Profile Photo               | Control who can view your profile picture                                   |
| About                       | Choose visibility of your About info                                       |
| Status                      | Select which contacts can view your Status updates                         |
| Read Receipts               | Toggle for read receipts (blue ticks)                                      |
| Groups                      | Manage who can add you to groups                                           |
| Live Location               | Share real-time location with selected chats                               |
| Blocked Contacts            | View and manage list of blocked users                                      |
| Fingerprint Lock (Android) / Face ID (iOS) | Enable biometric lock for opening WhatsApp                       |

## Test Cases

| Test Case ID | Scenario                                  | Steps                                                                                  | Expected Result                                                              | Platform       |
|--------------|-------------------------------------------|----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|----------------|
| TC-PS-01     | Change Last Seen visibility               | Settings > Privacy > Last Seen & Online > Select option                               | Selected contacts can/can’t view Last Seen based on setting                  | Android, iOS   |
| TC-PS-02     | Disable Read Receipts                     | Settings > Privacy > Toggle off Read Receipts                                         | Sender does not receive blue ticks for read messages                         | Android, iOS   |
| TC-PS-03     | Change Profile Photo visibility           | Settings > Privacy > Profile Photo > Select visibility option                         | Profile photo is hidden from excluded users                                  | Android, iOS   |
| TC-PS-04     | Block a contact                           | Settings > Privacy > Blocked Contacts > Add new contact                               | Blocked contact cannot message or call                                       | Android, iOS   |
| TC-PS-05     | Enable biometric lock                     | Settings > Privacy > Fingerprint Lock/Face ID > Enable                                | App requires fingerprint/Face ID to unlock                                   | Android, iOS   |
| TC-PS-06     | Set group privacy                         | Settings > Privacy > Groups > Choose option                                           | Only selected users can add you to groups                                    | Android, iOS   |

## Platform Behavior

- **Android**: Includes Fingerprint Lock option; UI follows Material Design standards.
- **iOS**: Offers Face ID or Touch ID based on hardware; similar structure to Android.
- **Web/Desktop**: Most privacy settings are unavailable; requires mobile app access.

## Notes
- Disabling read receipts also disables receipt for your own messages (except for group chats).
- Last Seen settings do not affect message delivery or typing status.
- Fingerprint/Face ID lock does not apply to answering calls.
