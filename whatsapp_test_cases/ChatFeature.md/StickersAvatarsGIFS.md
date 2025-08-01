# WhatsApp Chat – Stickers, Avatars, and GIFs

## Test Cases for Stickers, Avatars, and GIFs

| Test Case ID   | Module                  | Test Case Description                                                          | Expected Result                                                                         | Status | Priority | Notes                                  |
|----------------|--------------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|--------|----------|-----------------------------------------|
| SAG_TC_001     | Stickers/GIFs/Avatars    | User opens the sticker icon in chat bar                                        | Sticker panel opens showing recent/frequent stickers                                    | Pass   | High     |                                       |
| SAG_TC_002     | Stickers                 | User sends a single static sticker                                             | Sticker is delivered and displayed correctly on recipient's end                         | Pass   | High     |                                       |
| SAG_TC_003     | Stickers                 | User taps "+" in sticker panel to add new sticker pack                         | Sticker store opens allowing download of official and third-party sticker packs         | Pass   | Medium   | Internet required                      |
| SAG_TC_004     | Stickers                 | User deletes or uninstalls a sticker pack                                      | Sticker pack is removed from available stickers list                                    | Pass   | Medium   |                                       |
| SAG_TC_005     | Avatars                  | User creates a personalized avatar                                             | Avatar is saved and added to stickers for use in chats                                  | Pass   | Medium   | Available in updated builds only      |
| SAG_TC_006     | Avatars                  | User sends a custom avatar sticker                                             | Avatar sticker is sent and displays correctly                                           | Pass   | Medium   |                                       |
| SAG_TC_007     | GIFs                     | User switches to GIF tab                                                       | GIF panel opens with trending categories and search field                               | Pass   | Medium   | Powered by Giphy/Tenor APIs           |
| SAG_TC_008     | GIFs                     | User searches for a GIF using keywords                                         | Matching GIFs are displayed in results                                                  | Pass   | Medium   |                                       |
| SAG_TC_009     | GIFs                     | User sends a selected GIF                                                      | GIF is sent and loops properly on recipient’s end                                       | Pass   | High     |                                       |
| SAG_TC_010     | Stickers/Avatars/GIFs    | User switches to keyboard from sticker/GIF panel                               | Chat keyboard appears and input resumes normally                                        | Pass   | High     |                                       |

---

## Platform Behavior Notes

| Platform     | Behavior Summary                                                                 |
|--------------|-----------------------------------------------------------------------------------|
| Android      | Full sticker pack support, GIF search and avatar creation                        |
| iOS          | Full support, but sticker pack behavior slightly varies with OS version          |
| Web          | Supports sending stickers and GIFs; avatars not yet supported                    |
| Desktop      | Same as Web; sticker and GIF sending supported, avatar creation unavailable      |

---

## Functional Notes

- Stickers can be static or animated.
- GIFs auto-play in chat previews and stop on scroll.
- Avatars are customizable with face, outfit, and style options.
- GIFs are typically fetched through third-party APIs and need active internet connection.
- Recently used items appear in order of usage.
- Long pressing a sticker or GIF opens forwarding and delete options.

---

## Required Permissions

- **Internet Access** – Required for downloading stickers, loading GIFs
- **Storage (optional)** – For custom sticker imports (where supported)
