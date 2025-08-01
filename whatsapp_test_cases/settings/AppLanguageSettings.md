# App Language Settings

## Feature Description
App Language Settings allow users to change the language of the WhatsApp interface independently from the device's default language (where supported). This improves accessibility and user experience for multilingual users.

## Feature Specifications

| Item                    | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| Language Selection      | Users can select their preferred app language from a list of supported languages |
| Sync with System Locale | Option to follow the device's system language (default behavior on some platforms) |
| Immediate Effect        | Language change applies instantly without restarting the app               |
| Region-specific Options | Available languages may vary by region and device platform                 |

## Test Cases

| Test Case ID | Scenario                                | Steps                                                                 | Expected Result                                                              | Platform       |
|--------------|-----------------------------------------|-----------------------------------------------------------------------|-------------------------------------------------------------------------------|----------------|
| TC-ALS-01    | Access app language settings            | Settings > App Language                                               | App Language screen opens with list of supported languages                    | Android        |
| TC-ALS-02    | Change language to Urdu                 | Settings > App Language > Select “اردو”                               | WhatsApp UI updates to Urdu immediately                                       | Android        |
| TC-ALS-03    | Revert back to system default language  | Settings > App Language > Select “System Default”                     | App UI updates to match device language                                       | Android        |
| TC-ALS-04    | Confirm persistence after relaunch      | Change language > Close and reopen app                                | Selected language remains active                                              | Android        |
| TC-ALS-05    | Verify language unavailability (iOS)    | Settings > (No App Language Option)                                   | Language is controlled via iOS system settings                                | iOS            |

## Platform Behavior

- **Android**: Allows language change within WhatsApp regardless of system language (starting from Android 13+ or depending on WhatsApp version).
- **iOS**: App language is controlled by the iPhone's system language or via app-specific language settings in iOS Settings (iOS 13+).
- **Web/Desktop**: Language follows browser or system locale, with no in-app setting.

## Notes
- Some languages may not be fully translated, and certain terms might still appear in English.
- Changes are applied instantly and affect all screens within the app.
- Users often use this setting to switch between languages like English, Urdu, Hindi, Spanish, Arabic, etc., without altering their entire device language.
