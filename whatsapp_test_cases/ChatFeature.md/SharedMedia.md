# Test Cases – Shared Media (Media, Links, Documents)

## Description
Validates that the user can access and interact with shared media, links, and documents within a chat through the contact or group profile.

## Platforms Covered
- Android
- iOS
- WhatsApp Desktop/Web

## Preconditions
- User is logged in
- At least one media item, link, or document has been exchanged in the chat

| Test Case ID       | Module         | Test Case Description                                                             | Expected Result                                                                 | Status | Priority | Notes                    |
|--------------------|----------------|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|--------|----------|--------------------------|
| SHMEDIA_TC_001     | Shared Media   | Tap on contact/group name to open profile                                         | Profile opens with shared content sections visible                              | Pass   | High     |                          |
| SHMEDIA_TC_002     | Shared Media   | Tap on "Media" tab                                                                | Only shared images and videos are shown                                         | Pass   | High     |                          |
| SHMEDIA_TC_003     | Shared Media   | Tap on "Links" tab                                                                | Only URLs shared in the conversation are listed                                 | Pass   | High     |                          |
| SHMEDIA_TC_004     | Shared Media   | Tap on "Documents" tab                                                            | Only PDFs, Word files, etc. are listed                                          | Pass   | High     |                          |
| SHMEDIA_TC_005     | Shared Media   | Open an image/video/document from shared section                                  | The file opens in preview or appropriate viewer                                 | Pass   | Medium   |                          |
| SHMEDIA_TC_006     | Shared Media   | Long press to forward/delete media                                                | Forward and delete options appear and function correctly                        | Pass   | Medium   |                          |
| SHMEDIA_TC_007     | Shared Media   | Search within media, links, or docs                                               | Relevant items appear based on input                                            | Pass   | Medium   |                          |
| SHMEDIA_TC_008     | Shared Media   | View shared media from older chats                                                | Shared content from archived/old chat appears properly                         | Pass   | Low      |                          |
