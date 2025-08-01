# Account Settings

## Feature Description
Account Settings in WhatsApp provide users control over critical account functionalities including privacy, security, changing numbers, enabling two-step verification, requesting account info, and deleting accounts.

## Feature Specifications

| Item                        | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| Two-step verification       | Adds an extra layer of security using a 6-digit PIN                        |
| Change number               | Allows users to migrate their account to a new phone number                |
| Request account info        | Provides a downloadable report of user account information                 |
| Delete account              | Permanently deletes the account along with message history and backups     |
| Security notifications      | Notifies when a contact’s security code changes                           |

## Test Cases

| Test Case ID | Scenario                                     | Steps                                                                 | Expected Result                                                       | Platform       |
|--------------|----------------------------------------------|-----------------------------------------------------------------------|------------------------------------------------------------------------|----------------|
| TC-AS-01     | Enable two-step verification                 | Navigate to Settings > Account > Two-step verification > Enable      | User is able to set a 6-digit PIN and email address (optional)       | Android, iOS   |
| TC-AS-02     | Change phone number                          | Go to Account > Change number > Follow steps                         | Account is successfully moved to the new number                       | Android, iOS   |
| TC-AS-03     | Request account information                  | Tap on Request account info > Request                                | Report is generated within 3 days and user is notified                | Android, iOS   |
| TC-AS-04     | Delete WhatsApp account                      | Go to Account > Delete my account > Enter number > Confirm           | Account is deleted and user is logged out                             | Android, iOS   |
| TC-AS-05     | Receive security notifications               | Enable “Security Notifications”                                      | App notifies when a contact’s security code changes                   | Android, iOS   |

## Platform Behavior

- **Android**: All account settings appear under the "Account" menu within Settings.
- **iOS**: Identical structure and flow as Android; iOS-native design components used.
- **Desktop/Web**: Limited account features; most settings require mobile device access.

## Notes
- Email in two-step verification is optional but helps with PIN recovery.
- Account info report does not include messages.
- Deleted accounts cannot be restored.
