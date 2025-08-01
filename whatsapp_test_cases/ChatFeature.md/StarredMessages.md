# Chat Feature: Starred Messages

## Description
Allows users to bookmark or mark important messages within a chat so they can access them easily from one place. Starred messages remain saved even if a chat is deleted or archived.


## Platforms
- Android
- iOS
- Web/Desktop



## Pre-conditions
- User is logged in
- At least one active chat exists
- Messages exist in the chat


## Functional Test Cases

| TC ID | Test Scenario | Steps to Execute | Expected Result |
|-------|----------------|------------------|------------------|
| SM-01 | Star a message | 1. Open a chat <br> 2. Long press (mobile) or right-click (web) on a message <br> 3. Tap "Star" | Message gets starred and marked with a star icon |
| SM-02 | View all starred messages in a chat | 1. Open chat info <br> 2. Tap on "Starred Messages" | All starred messages from this chat are displayed |
| SM-03 | Unstar a message | 1. Go to starred messages <br> 2. Long press or right-click a message <br> 3. Tap "Unstar" | Message is removed from starred list |
| SM-04 | Starred messages sync across platforms | 1. Star a message on one device <br> 2. Log in to another platform <br> 3. Open Starred Messages | Starred message appears correctly on all platforms |



## Notes
- Starred messages are retained even if chat is archived.
- Starred media (images, docs, etc.) are also accessible from this list.
- If a starred message is deleted, it is also removed from the list.
