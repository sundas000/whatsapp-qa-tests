# Invite a Friend

## Feature Description
The "Invite a Friend" feature allows users to share an invitation link or message via various channels (e.g., SMS, email, social media) to encourage others to download and use WhatsApp.

## Feature Specifications

| Item                     | Description                                                                    |
|--------------------------|--------------------------------------------------------------------------------|
| Access Option            | Settings > Invite a Friend                                                     |
| Sharing Options          | Native share sheet with installed apps (SMS, Gmail, Messenger, etc.)           |
| Predefined Message       | Default message includes download link and call to action                      |
| Link Personalization     | Not applicable; message is standard and cannot be edited from the source       |

## Test Cases

| Test Case ID | Scenario                          | Steps                                                        | Expected Result                                                           | Platform       |
|--------------|-----------------------------------|--------------------------------------------------------------|----------------------------------------------------------------------------|----------------|
| TC-IAF-01    | Open Invite a Friend option       | Go to Settings > Invite a Friend                             | Native share options/modal is opened with sharing apps                    | Android, iOS   |
| TC-IAF-02    | Share via messaging app           | Select WhatsApp or SMS                                       | Predefined invite message with WhatsApp download link is shared           | Android, iOS   |
| TC-IAF-03    | Share via email                   | Select Gmail or Email app                                    | Email draft is opened with predefined invite content                      | Android, iOS   |
| TC-IAF-04    | Cancel sharing                    | Open sharing modal and press back or cancel                  | Sharing modal is dismissed without sending invite                         | Android, iOS   |
| TC-IAF-05    | Invite via multiple apps          | Repeat sharing via different apps (e.g., WhatsApp, Twitter)  | Each app handles the invite message correctly                             | Android, iOS   |

## Platform Behavior

- **Android**: Utilizes system-wide share sheet.
- **iOS**: Uses iOS native share modal for broader integration.

## Notes
- Predefined message typically includes text like: "Hey! Use WhatsApp to chat and call. Get it here: https://whatsapp.com/dl".
- No tracking or referral system currently tied to invite links.
- Works without requiring any permissions beyond app integration with OS share intent.
