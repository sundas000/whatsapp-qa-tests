# WhatsApp – Ask Meta AI or Search Field

This module covers the input field labeled "Ask Meta AI or Search", present across most WhatsApp platforms. It serves both as a universal search bar and an interface for interacting with Meta AI (if enabled by region or user).

---

## Application Specifications

- **Field Location**: Top of the chat list or in the global header
- **Core Functions**:
  - Allows search for messages, groups, contacts
  - Accepts natural language queries if Meta AI is supported
- **Behavior**:
  - Returns relevant search results dynamically
  - Redirects to AI chat screen if query is AI-related

---

## Test Cases

| Test Case ID       | Module            | Test Case Description                                                     | Expected Result                                                      | Status | Priority | Notes                                   |
|--------------------|-------------------|---------------------------------------------------------------------------|------------------------------------------------------------------------|--------|----------|-----------------------------------------|
| MAI_TC_001         | Meta AI / Search  | User clicks on the field                                                  | Input becomes active and keyboard appears                             | Pass   | High     | Across all platforms                    |
| MAI_TC_002         | Meta AI / Search  | User enters a contact name                                                | Matching contacts appear dynamically                                  | Pass   | High     |                                          |
| MAI_TC_003         | Meta AI / Search  | User types a group name                                                   | Matching groups appear                                                | Pass   | High     |                                          |
| MAI_TC_004         | Meta AI / Search  | User types a chat message snippet                                         | Messages containing the text are shown                                | Pass   | High     |                                          |
| MAI_TC_005         | Meta AI           | User types a question like “What’s the capital of Spain?”                | Redirected to Meta AI chat with AI response                           | Pass   | Medium   | If Meta AI is enabled                   |
| MAI_TC_006         | Meta AI           | User sends casual prompt “Write a poem about friendship”                  | Meta AI provides creative response                                    | Pass   | Medium   | Feature might be disabled in some regions |
| MAI_TC_007         | Meta AI           | User has no internet connection                                           | AI interaction should show offline/unavailable message                | Pass   | Medium   |                                          |
| MAI_TC_008         | Meta AI           | User disables AI from privacy settings                                    | Field works only for search; AI queries disabled                      | Pass   | Medium   | Depends on privacy settings availability |
| MAI_TC_009         | UI/UX             | Field expands properly and is styled consistently                         | No clipping or misaligned text                                        | Pass   | Low      |                                          |
| MAI_TC_010         | Search History    | Previously searched terms appear when clicking into the field (if saved) | List of recent searches appears                                       | Pass   | Medium   | Some platforms may not retain history    |

---

## Platform Behavior Notes

| Platform       | Search Field Label           | AI Support    | Notes                                            |
|----------------|------------------------------|---------------|--------------------------------------------------|
| Android        | Ask Meta AI or Search        | Yes (Beta)    | Tightly integrated into top bar                 |
| iOS            | Ask Meta AI or Search        | Yes (Beta)    | Similar behavior to Android                     |
| Web/Desktop    | Search or Ask Meta AI        | Limited/None  | Mostly standard search, AI may not be available |

---

## Notes

- Meta AI support varies by **region**, **WhatsApp version**, and **user eligibility**
- This feature may evolve rapidly, especially with newer integrations from Meta

