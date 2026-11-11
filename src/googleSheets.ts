type SheetName = 'rsvp' | 'wishes';

type SheetPayload = Record<string, string | number>;

// Google Apps Script Web App (writes to the RSVP + Wishes sheets)
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwUM6UQEpTFXNtbcz2o6wgEu7u-VFvIRoMl8XhSs04DGIQZZRA0WR6HzqQdv7sfrIR5jQ/exec';

export async function submitToGoogleSheet(sheet: SheetName, payload: SheetPayload): Promise<void> {
  if (!GOOGLE_SCRIPT_URL || !GOOGLE_SCRIPT_URL.startsWith('https://script.google.com/')) {
    throw new Error('Google Apps Script URL is not configured (VITE_GOOGLE_SCRIPT_URL).');
  }

  const body = new URLSearchParams();
  body.append('sheet', sheet);
  body.append('payload', JSON.stringify(payload));

  // Apps Script web apps don't send CORS headers; no-cors still delivers the POST
  // (the response is opaque to the browser).
  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: body.toString(),
  });
}
