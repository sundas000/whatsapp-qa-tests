# Test Cases – Search Within Chat

## Description
Validates the search functionality available inside an open conversation. This allows users to search specific keywords, phrases, or dates within chat history.

## Platforms Covered
- Android
- iOS
- WhatsApp Desktop/Web

## Preconditions
- User is logged in
- Chat (individual or group) is open
- Conversation contains at least some text messages

| Test Case ID       | Module            | Test Case Description                                                           | Expected Result                                                     | Status | Priority | Notes                        |
|--------------------|-------------------|----------------------------------------------------------------------------------|----------------------------------------------------------------------|--------|----------|------------------------------|
| SC_TC_001          | Search in Chat    | Verify search icon is visible in open chat                                       | Magnifying glass icon is visible in the top bar                     | Pass   | High     |                              |
| SC_TC_002          | Search in Chat    | Tap on search icon                                                               | Search input field appears at the top                               | Pass   | High     |                              |
| SC_TC_003          | Search in Chat    | Enter keyword available in the conversation                                      | All matched messages are highlighted and counted                    | Pass   | High     |                              |
| SC_TC_004          | Search in Chat    | Enter keyword not present in the conversation                                    | “No results found” message appears                                  | Pass   | Medium   |                              |
| SC_TC_005          | Search in Chat    | Navigate between results using up/down arrows                                    | Jumps to previous or next matched message                           | Pass   | High     |                              |
| SC_TC_006          | Search in Chat    | Clear search field                                                               | Removes results and returns to full chat view                       | Pass   | Medium   |                              |
| SC_TC_007          | Search in Chat    | Search term matches message sent by contact                                      | Result displays message with contact’s name                         | Pass   | High     |                              |
| SC_TC_008          | Search in Chat    | Search term matches message sent by the user                                     | Result displays message with user’s label                           | Pass   | High     |                              |
| SC_TC_009          | Search in Chat    | Search while offline                                                             | Previously loaded messages are searched; no new results load        | Pass   | Medium   |                              |
| SC_TC_010          | Search in Chat    | Use partial keywords                                                             | Partial match results appear                                        | Pass   | Medium   | Should support partial match |
