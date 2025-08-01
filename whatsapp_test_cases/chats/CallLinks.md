# WhatsApp – Call Links

This module covers the functionality related to creating, sharing, and joining WhatsApp call links for both audio and video calls.

---

## Application Specifications

| Feature              | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| Create Call Link     | Users can generate a call link for audio or video call                      |
| Link Type Selection  | Option to choose between audio or video call while creating link            |
| Share Link           | Allows sharing link via WhatsApp chat or external apps                      |
| Join via Link        | Anyone with the link can join (must be a WhatsApp user)                     |
| Link Preview         | Shows call type and user info before joining                                |
| Call Expiry          | Link remains active for a limited duration (not permanently saved)          |

---

## Test Cases

| Test Case ID   | Module     | Test Case Description                                             | Expected Result                                                    | Status | Priority | Notes                            |
|----------------|------------|--------------------------------------------------------------------|---------------------------------------------------------------------|--------|----------|----------------------------------|
| CALL_TC_046    | Call Links | Create new call link (audio)                                      | Audio call link generated successfully                             | Pass   | High     |                                  |
| CALL_TC_047    | Call Links | Create new call link (video)                                      | Video call link generated successfully                             | Pass   | High     |                                  |
| CALL_TC_048    | Call Links | Share call link via WhatsApp chat                                 | Call link appears as a clickable message                           | Pass   | Medium   |                                  |
| CALL_TC_049    | Call Links | Share call link via external apps (copy, SMS, email, etc.)        | Link copied/shared correctly                                       | Pass   | Medium   |                                  |
| CALL_TC_050    | Call Links | Join call via received link (same device)                         | User joins the ongoing or new call                                 | Pass   | High     |                                  |
| CALL_TC_051    | Call Links | Link preview shows correct call type and initiator                | Displays video/audio and sender details                            | Pass   | Medium   |                                  |
| CALL_TC_052    | Call Links | Attempt to join expired link                                      | Appropriate error shown (link expired)                             | Pass   | Medium   | Time-based test                  |

---

## Platform Behavior Notes

| Platform     | Create Link | Share via Chat | External Share | Join Support | Notes                                 |
|--------------|-------------|----------------|----------------|--------------|---------------------------------------|
| Android      | ✅ Yes       | ✅ Yes          | ✅ Yes          | ✅ Yes        | Fully functional                      |
| iOS          | ✅ Yes       | ✅ Yes          | ✅ Yes          | ✅ Yes        | Fully functional                      |
| Web/Desktop  | 🔸 Limited   | ✅ Yes          | 🔸 Copy only    | ✅ Yes        | Cannot create new links               |

---

## Notes

- Call links do not expose user phone numbers.
- Users must have WhatsApp installed and linked to join a link-based call.
- Links can be reused within a short time frame unless expired.
