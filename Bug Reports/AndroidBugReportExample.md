#  Bug Report

**Bug ID**: BUG-ANDROID-001  
**Reported By**: Sundas  
**Reported On**: 2025-07-31  
**Environment**:https://github.com/sundas000/whatsapp-qa-tests/edit/main/Bug%20Reports/AndroidBugReportExample.md  
- **Platform**: Android  
- **App Version**: v2.24.7  
- **Build Type**: Staging  
- **Device/OS**: Samsung Galaxy S22 / Android 13

---

##  Bug Title  
Voice note not playing after sending in group chat

---

##  Description  
When a user records and sends a voice message in a group chat, the voice message appears sent, but tapping the play button does not start audio playback. No error is shown.

---

##  Steps to Reproduce  
1. Open any group chat  
2. Tap the mic icon and record a short voice message  
3. Send the voice message  
4. Tap on the play icon

---

##  Expected Result  
Voice note should play immediately when the play icon is tapped.

---

##  Actual Result  
Nothing happens when play icon is tapped; audio does not play.

---

##  Attachments  
- Screenshot: `.add if any`  
- Logs: `add if any`

---

##  Severity & Priority  
- **Severity**: High  
- **Priority**: High

---

##  Bug Type  
Functional

---

##  Related Modules / Features  
Voice Messages → Group Chat

---

##  Additional Notes  
This only happens in group chats. Works fine in individual chats.
