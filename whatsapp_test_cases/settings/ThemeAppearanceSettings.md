# Theme & Appearance Settings

## Feature Description
The "Theme & Appearance" settings allow users to personalize the visual theme of WhatsApp, such as toggling between light and dark modes or syncing with the device's system theme.

## Feature Specifications

| Item                      | Description                                                                       |
|---------------------------|-----------------------------------------------------------------------------------|
| Access Option             | Settings > Chats > Theme / Appearance                                            |
| Theme Options             | Light, Dark, System default (if supported by OS)                                 |
| Theme Persistence         | Selected theme remains applied even after app restarts                           |
| Real-time Preview         | Changes apply instantly when switching themes                                    |
| System Sync (if available)| Automatically changes WhatsApp theme based on device system theme                |

## Test Cases

| Test Case ID | Scenario                             | Steps                                                         | Expected Result                                                                | Platform       |
|--------------|--------------------------------------|---------------------------------------------------------------|----------------------------------------------------------------------------------|----------------|
| TC-TAS-01    | Open Theme Settings                  | Navigate to Settings > Chats > Theme                          | Theme selection screen is displayed                                             | Android        |
| TC-TAS-02    | Change to Dark Theme                 | Select "Dark" from theme options                              | Interface changes to dark mode instantly                                        | Android, iOS   |
| TC-TAS-03    | Change to Light Theme                | Select "Light" from theme options                             | Interface changes to light mode instantly                                       | Android, iOS   |
| TC-TAS-04    | Set to System Default                | Select "System default" (if available)                        | WhatsApp reflects device-wide theme configuration                              | Android        |
| TC-TAS-05    | Verify Theme Persistence             | Change theme, force close, and relaunch WhatsApp              | Previously selected theme is retained                                           | Android, iOS   |
| TC-TAS-06    | Cancel Theme Selection               | Open theme selector and dismiss without choosing              | No changes made to current theme                                                | Android, iOS   |

## Platform Behavior

- **Android**:
  - Explicit "Theme" setting available under Settings > Chats.
  - Offers “Light,” “Dark,” and “System default.”
- **iOS**:
  - Respects system theme (dark/light); no manual override within app UI.

## Notes
- Real-time UI feedback helps users instantly preview theme changes.
- On Android, if "System default" is selected, WhatsApp adjusts based on device theme changes.
- Not all iOS versions support manual theme selection in-app.
