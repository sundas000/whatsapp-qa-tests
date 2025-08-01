# Chat Feature: Save to Photos Option

## Description
This option allows users to control whether media received in chats is automatically saved to their device’s photo gallery.

---

## Platforms
- Android
- iOS

---

## Pre-conditions
- User is logged in
- At least one chat exists
- Media auto-download settings are enabled

---

## Functional Test Cases

| TC ID | Test Scenario | Steps to Execute | Expected Result |
|-------|----------------|------------------|------------------|
| SP-01 | Change save to photos setting | 1. Open any chat <br> 2. Tap chat header to view info <br> 3. Tap "Save to Camera Roll"/"Save to Photos" <br> 4. Choose between "Default", "Always", or "Never" | Selection is saved and affects future media received |
| SP-02 | Verify media is saved when set to “Always” | 1. Set “Save to Photos” to Always <br> 2. Receive image/video <br> 3. Open device gallery | Received media is saved to the photo gallery automatically |
| SP-03 | Verify media is not saved when set to “Never” | 1. Set “Save to Photos” to Never <br> 2. Receive image/video <br> 3. Open device gallery | Media is not saved to the photo gallery |
| SP-04 | Default setting inherits global WhatsApp setting | 1. Set individual chat to "Default" <br> 2. Change global WhatsApp media auto-save setting <br> 3. Receive media in chat | Media behavior aligns with global setting |

---

## Notes
- "Default" inherits global media auto-download preferences.
- iOS may refer to this option as “Save to Camera Roll”.
