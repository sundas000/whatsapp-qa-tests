# Test Cases – Contact Bio Info in Chat Header

## Description
Validates the display and behavior of the contact's bio (About section) when viewing an individual chat in WhatsApp.

## Platforms Covered
- Android
- iOS
- WhatsApp Desktop/Web

## Preconditions
- User is logged in
- A conversation with a contact is open
- Contact has a bio set in their profile

| Test Case ID       | Module         | Test Case Description                                                      | Expected Result                                                   | Status | Priority | Notes                        |
|--------------------|----------------|-----------------------------------------------------------------------------|--------------------------------------------------------------------|--------|----------|------------------------------|
| BIO_TC_001         | Contact Bio    | Open chat with a contact who has a bio set                                 | Bio is displayed below contact name in header                     | Pass   | High     |                              |
| BIO_TC_002         | Contact Bio    | Open chat with contact who has no bio set                                  | Bio section is not displayed or shows "No bio"                    | Pass   | Medium   |                              |
| BIO_TC_006         | Contact Bio    | Check bio in blocked contacts                                              | Bio is not shown if user is blocked                              | Pass   | Medium   |                              |
| BIO_TC_007         | Contact Bio    | Long bio (more than 100 characters)                                        | Bio is truncated or wrapped properly                              | Pass   | Medium   | Check for overflow           |
