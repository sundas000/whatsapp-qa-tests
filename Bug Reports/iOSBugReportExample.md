#  Bug Report

**Bug ID**: BUG-IOS-002  
**Reported By**: Sundas  
**Reported On**: 2025-07-31  
**Environment**:  
- **Platform**: iOS  
- **App Version**: v2.24.7  
- **Build Type**: Production  
- **Device/OS**: iPhone 14 Pro / iOS 17.4

---

##  Bug Title  
Status view count not updating in real-time

---

##  Description  
After a user posts a new status and another contact views it, the number of viewers doesn't update unless the user force closes and reopens WhatsApp.

---

## Steps to Reproduce  
1. Post a new status update  
2. Ask a contact to view it  
3. Wait on the status screen  
4. Check viewers list

---

##  Expected Result  
Viewer count should update in real-time when someone views the status.

---

##  Actual Result  
Viewer count stays at 0 unless the app is restarted.

---

##  Attachments  
- Screenshot: `add if any`

---

##  Severity & Priority  
- **Severity**: Low  
- **Priority**: Medium

---

##  Bug Type  
Functional / Realtime Sync

---

##  Related Modules / Features  
Status → View Status Viewers

---

##  Additional Notes  
Issue happens intermittently but most commonly in weak network areas.
