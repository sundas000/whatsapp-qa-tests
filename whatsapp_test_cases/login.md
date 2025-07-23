   # WhatsApp Login – Test Cases

This document contains the structured test cases related to the login and verification process in WhatsApp, designed for Android, iOS, Web, and Desktop platforms.

---

## Application Specifications

- Login is performed using the user's phone number.
- A 6-digit OTP is sent via SMS to authenticate the user.
- Android attempts to auto-detect the OTP (if permissions allow).
- iOS requires manual OTP entry.
- WhatsApp Web/Desktop use QR code scanning instead of OTP.
- Internet connection is required throughout the login process.
- Phone number format is validated based on country code.

---

## Test Cases

| Test Case ID   | Module     | Test Case Description                                           | Expected Result                                                      | Status | Priority | Notes                          |
|----------------|------------|------------------------------------------------------------------|-----------------------------------------------------------------------|--------|----------|---------------------------------|
| LOGIN_TC_001   | Login      | User enters valid phone number and OTP                          | User should be logged in successfully and redirected to chat screen  | Pass   | High     | OTP auto-filled on Android      |
| LOGIN_TC_002   | Login      | User enters invalid phone number                                | Error message should appear and prevent proceeding                   | Pass   | High     | Country code validation required|
| LOGIN_TC_003   | Login      | User enters incorrect OTP                                       | Error message should appear indicating wrong OTP                     | Pass   | High     | Allow retry or resend option    |
| LOGIN_TC_004   | Login      | User does not receive OTP within timeout                        | Option to resend OTP should appear                                   | Pass   | Medium   |                                 |
| LOGIN_TC_005   | Login      | User tries logging in without internet                          | App should show “No Internet” message and block login flow           | Pass   | High     |                                 |
| LOGIN_TC_006   | Login      | User logs in via WhatsApp Web using QR code                     | User should be authenticated after scanning the QR                   | Pass   | High     | QR refresh timer should be tested |
| LOGIN_TC_007   | Login      | User tries scanning an expired QR code                          | App should show message to refresh QR code                           | Pass   | Medium   |                                 |
| LOGIN_TC_008   | Login      | User denies permission for SMS access (Android)                 | OTP should not auto-fill; user must enter manually                   | Pass   | Medium   |                                 |
| LOGIN_TC_009   | Login      | User enters special characters or letters in phone input field  | Validation should restrict non-numeric input                         | Pass   | Medium   |                                 |
| LOGIN_TC_010   | Login      | User tries logging in from multiple devices                     | App should log out from one or restrict concurrent sessions          | Pass   | Medium   | Depends on WhatsApp policy      |

---

## Platform Behavior Notes

| Platform       | Notes                                                                 |
|----------------|-----------------------------------------------------------------------|
| Android        | Auto-detects OTP (if SMS permission granted); OTP input may be skipped |
| iOS            | Manual OTP entry required                                              |
| WhatsApp Web   | Login via QR code only, no phone number or OTP                        |
| Desktop App    | Same as WhatsApp Web – QR scan required                               |
