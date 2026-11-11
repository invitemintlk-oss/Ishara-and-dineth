# Ishara & Dineth – Wedding Invitation

Thursday, 10th December 2026 · 9:30 AM – 4:00 PM · Poruwa Ceremony 10:00 AM
Lavenro Garden Hotel, Kosgama

All wedding details live in `src/weddingConfig.ts`.

## Personalized links (`/admin`)

Open `/admin`, choose a prefix + guest name, click **Generate Link**, then copy the link or the full WhatsApp message.
Links look like `https://<domain>/Sanjaya?prefix=Mr.` and the invitation shows
"We cordially invite Mr. Sanjaya to celebrate our special day with us."

## RSVP + Wishes → Google Sheets

Spreadsheet: https://docs.google.com/spreadsheets/d/10cdR86uS4z0sYMR3iMuaODhDN9Af9319ED28Ofs10AA

1. Open the spreadsheet → **Extensions → Apps Script**.
2. Replace everything in `Code.gs` with `google-apps-script/code.gs` and save.
3. Select the `setup` function and click **Run** (authorize when asked) – this creates the `RSVP` and `Wishes` sheets with headers.
4. **Deploy → New deployment → Web app** · Execute as: **Me** · Who has access: **Anyone** → copy the `/exec` URL.
5. Set `VITE_GOOGLE_SCRIPT_URL` to that URL in `.env` (local) and in Vercel → Project → Settings → Environment Variables, then redeploy.

## Develop

```
npm install
npm run dev
```
