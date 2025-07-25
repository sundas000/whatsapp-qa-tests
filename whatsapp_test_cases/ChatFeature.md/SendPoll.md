# Test Cases – Send Poll

## Description
Validates the creation and sending of polls in chats via the attachment (“+”) menu. Polls can include multiple options and are interactable by recipients.

## Platforms Covered
- Android
- iOS
- Web
- Desktop

## Preconditions
- User is logged into WhatsApp and inside an individual or group chat.
- WhatsApp version supports Poll functionality.

| Test Case ID     | Module       | Test Case Description                                                   | Expected Result                                                         | Status | Priority | Notes                                 |
|------------------|--------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------|--------|----------|---------------------------------------|
| POLL_TC_001      | Send Poll     | Tap "+" and select "Poll" from attachment options                         | Poll creation interface opens                                            | Pass   | High     |                                       |
| POLL_TC_002      | Send Poll     | Enter a question and two options, then tap send                           | Poll is sent in chat with options shown                                 | Pass   | High     | Minimum 2 options required            |
| POLL_TC_003      | Send Poll     | Create a poll with 5 or more options                                      | Poll allows multiple (max 12) options                                   | Pass   | High     | Test upper limit                      |
| POLL_TC_004      | Send Poll     | Enable/disable "allow multiple answers" toggle                            | Toggle reflects in poll behavior                                        | Pass   | Medium   |                                       |
| POLL_TC_005      | Send Poll     | Submit a vote on a received poll                                         | Vote is recorded and reflected immediately                              | Pass   | High     |                                       |
| POLL_TC_006      | Send Poll     | Change vote after submitting                                              | Vote updates to new selection                                           | Pass   | Medium   |                                       |
| POLL_TC_007      | Send Poll     | Try to submit a poll with no question or less than two options            | Send button remains disabled or shows validation error                  | Pass   | High     |                                       |
| POLL_TC_008      | Send Poll     | Forward a poll to another contact or group                                | Poll forwards as-is and remains functional                              | Pass   | Medium   |                                       |
| POLL_TC_009      | Send Poll     | Check poll vote count and participants via message info                   | Info shows voters and selected options                                  | Pass   | Medium   | Privacy settings may affect this     |
| POLL_TC_010      | Send Poll     | Delete a sent poll                                                        | Poll is removed from chat as any other message                          | Pass   | Low      |                                       |
| POLL_TC_011      | Send Poll     | Receive poll in muted chat                                                | Notification may be suppressed but poll appears correctly               | Pass   | Low      |                                       |
| POLL_TC_012      | Send Poll     | Try to vote in expired or deleted poll                                    | App prevents voting and shows appropriate message                       | Pass   | Low      |                                       |
