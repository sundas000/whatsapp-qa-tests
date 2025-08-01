# Test Cases – Send Document

## Description
Validates the ability to send PDF, DOCX, XLSX, TXT, and other document formats through the "+" attachment menu in a chat.

## Platforms Covered
- Android
- iOS
- Web
- Desktop

## Preconditions
- User is logged into WhatsApp and inside a chat.
- File access/storage permission is granted to WhatsApp (where applicable).
- The document exists in the device's local or cloud storage.

| Test Case ID     | Module          | Test Case Description                                                   | Expected Result                                                    | Status | Priority | Notes                                  |
|------------------|------------------|-------------------------------------------------------------------------|----------------------------------------------------------------------|--------|----------|----------------------------------------|
| DOC_TC_001       | Send Document     | Tap "+" and select "Document"                                           | File picker opens with list of documents                           | Pass   | High     |                                        |
| DOC_TC_002       | Send Document     | Select a PDF and tap send                                               | PDF is sent successfully and visible as a document preview          | Pass   | High     |                                        |
| DOC_TC_003       | Send Document     | Select a DOCX or XLSX file                                              | Document is sent successfully with proper filename                  | Pass   | High     |                                        |
| DOC_TC_004       | Send Document     | Cancel document selection before sending                                | User returns to chat without sending the document                   | Pass   | Medium   |                                        |
| DOC_TC_005       | Send Document     | Try to send a document without storage permission (if applicable)       | App prompts for permission or shows an appropriate error            | Pass   | High     | Android-specific in some cases        |
| DOC_TC_006       | Send Document     | Try sending unsupported file type                                       | App shows error or does not allow selection                         | Pass   | Medium   |                                        |
| DOC_TC_007       | Send Document     | Receive a document in chat                                              | Tap opens preview (if supported) or download screen                 | Pass   | High     |                                        |
| DOC_TC_008       | Send Document     | Forward a received document to another contact                          | Document is forwarded with correct metadata                         | Pass   | Medium   |                                        |
| DOC_TC_009       | Send Document     | Attempt to send very large file (>100MB)                                | App blocks or warns about size limit                                | Pass   | Medium   | File size limit differs by platform   |
| DOC_TC_010       | Send Document     | Long press on sent document → check available actions                   | Options: delete, forward, star, info etc.                           | Pass   | Low      |                                        |
