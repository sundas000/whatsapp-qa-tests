# Test Cases – Send Contact

## Description
Verifies the user’s ability to send a contact card to others through the "+" attachment menu in chat.

## Platforms Covered
- Android
- iOS
- Web
- Desktop

## Preconditions
- User is logged into WhatsApp and in a chat window.
- Contact sync permission is granted to WhatsApp (if required by OS).
- The contact to be shared exists in the user's phone address book.

| Test Case ID     | Module         | Test Case Description                                                  | Expected Result                                                     | Status | Priority | Notes                                 |
|------------------|----------------|------------------------------------------------------------------------|----------------------------------------------------------------------|--------|----------|---------------------------------------|
| CONTACT_TC_001   | Send Contact   | Tap "+" icon and select "Contact"                                     | Contact selection screen is displayed                               | Pass   | High     |                                       |
| CONTACT_TC_002   | Send Contact   | Search for a contact                                                   | Matching results are displayed instantly                            | Pass   | High     |                                       |
| CONTACT_TC_003   | Send Contact   | Select a single contact and send                                       | Contact card is sent in chat with name and phone number             | Pass   | High     |                                       |
| CONTACT_TC_004   | Send Contact   | Select multiple contacts and send                                      | Multiple contact cards are sent in the same message batch           | Pass   | Medium   |                                       |
| CONTACT_TC_005   | Send Contact   | Tap on received contact card                                           | Contact preview opens with add/save options                         | Pass   | High     |                                       |
| CONTACT_TC_006   | Send Contact   | Cancel contact selection                                               | User returns to chat screen, no contact sent                        | Pass   | Medium   |                                       |
| CONTACT_TC_007   | Send Contact   | Attempt to send contact without sync permission                        | App shows permission request or error message                       | Pass   | High     |                                       |
| CONTACT_TC_008   | Send Contact   | Send international number contact                                      | Number format is preserved and shown accurately                     | Pass   | Medium   |                                       |
| CONTACT_TC_009   | Send Contact   | Long press on sent contact to view options                             | Options like delete, forward, star, etc. are available               | Pass   | Low      |                                       |
| CONTACT_TC_010   | Send Contact   | Try to send contact when contact list is empty                         | User sees an empty list or appropriate message                      | Pass   | Low      | Edge case                              |
