# Help Settings

## Feature Description
The Help Settings section provides users with access to information and support resources such as FAQs, contact support, app version info, and legal policies.

## Feature Specifications

| Item                      | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| FAQ                       | Redirects to WhatsApp’s help center via web or in-app browser               |
| Contact Support           | Opens a form to submit issues directly to WhatsApp support                  |
| Terms and Privacy Policy  | View official WhatsApp legal documents                                      |
| App Info                  | Displays version number, last update time, and license info                 |

## Test Cases

| Test Case ID | Scenario                          | Steps                                                                 | Expected Result                                                              | Platform        |
|--------------|-----------------------------------|-----------------------------------------------------------------------|-------------------------------------------------------------------------------|-----------------|
| TC-HS-01     | Access Help section               | Settings > Help                                                       | Help screen opens with all sub-options visible                                | Android, iOS    |
| TC-HS-02     | View FAQs                         | Settings > Help > FAQ                                                 | User is redirected to WhatsApp FAQ page in browser or in-app                  | Android, iOS    |
| TC-HS-03     | Contact support                   | Settings > Help > Contact Us                                          | Contact form opens allowing user to type issue and submit                     | Android, iOS    |
| TC-HS-04     | View Terms and Privacy Policy     | Settings > Help > Terms and Privacy Policy                            | Terms and Privacy Policy content is shown                                     | Android, iOS    |
| TC-HS-05     | View App Info                     | Settings > Help > App Info                                            | Shows version number, build info, and other technical details                 | Android, iOS    |

## Platform Behavior

- **Android**: All Help options are bundled under `Settings > Help`.
- **iOS**: Similar layout but may open Apple-provided support view or browser for some actions.
- **Web/Desktop**: Help generally opens via `Menu > Help` and redirects to the web FAQ.

## Notes
- App info (version/build) is especially useful for support and debugging.
- Contact Us form pre-fills technical data (like OS, device model) in some cases.
- Some links like Terms of Service may open in an external browser.
