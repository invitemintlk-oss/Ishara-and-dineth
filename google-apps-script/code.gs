/**
 * Ishara & Dineth – Wedding RSVP + Wishes → Google Sheets
 *
 * Spreadsheet: https://docs.google.com/spreadsheets/d/10cdR86uS4z0sYMR3iMuaODhDN9Af9319ED28Ofs10AA
 *
 * - Auto-creates two separate sheets ("RSVP" and "Wishes") with styled headers.
 * - Repairs the header row if it is missing or was edited.
 * - Uses a lock so simultaneous submissions never overwrite each other.
 *
 * Deploy: Deploy → New deployment → Web app
 *         Execute as: Me   |   Who has access: Anyone
 * Then paste the /exec URL into VITE_GOOGLE_SCRIPT_URL.
 */

const SPREADSHEET_ID = '10cdR86uS4z0sYMR3iMuaODhDN9Af9319ED28Ofs10AA';
const TIMEZONE = 'Asia/Colombo';

const SHEETS = {
  rsvp: {
    name: 'RSVP',
    headers: ['Timestamp', 'Name', 'Attendance', 'Guest Count', 'Message', 'Invited As', 'Submitted At (ISO)'],
    widths: [170, 200, 130, 110, 340, 200, 210],
    color: '#064e3b',
    row: function (p, now) {
      return [
        now,
        clean(p.name),
        clean(p.status),
        Number(p.guestCount) || 0,
        clean(p.message),
        clean(p.invitedAs),
        clean(p.submittedAt),
      ];
    },
  },
  wishes: {
    name: 'Wishes',
    headers: ['Timestamp', 'Name', 'Wish', 'Invited As', 'Submitted At (ISO)'],
    widths: [170, 200, 420, 200, 210],
    color: '#7a5c00',
    row: function (p, now) {
      return [now, clean(p.name), clean(p.wish), clean(p.invitedAs), clean(p.submittedAt)];
    },
  },
};

/* ------------------------------ Web endpoints ------------------------------ */

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);

    const params = (e && e.parameter) || {};
    const key = String(params.sheet || '').toLowerCase();
    const config = SHEETS[key];
    if (!config) {
      return json({ ok: false, error: 'Invalid sheet. Use "rsvp" or "wishes".' });
    }

    let payload = {};
    try {
      payload = JSON.parse(params.payload || '{}');
    } catch (err) {
      return json({ ok: false, error: 'Invalid JSON payload.' });
    }

    if (!clean(payload.name)) {
      return json({ ok: false, error: 'Name is required.' });
    }

    const sheet = getOrCreateSheet(config);
    sheet.appendRow(config.row(payload, new Date()));

    return json({ ok: true, sheet: config.name });
  } catch (err) {
    return json({ ok: false, error: String((err && err.message) || err) });
  } finally {
    try { lock.releaseLock(); } catch (ignored) {}
  }
}

function doGet(e) {
  const action = String((e && e.parameter && e.parameter.action) || '').toLowerCase();
  if (action === 'setup') {
    setup();
    return json({ ok: true, message: 'Sheets created / verified.' });
  }
  return json({
    ok: true,
    service: 'ishara-dineth-wedding',
    time: new Date().toISOString(),
    usage: 'POST sheet=rsvp|wishes & payload=<json>',
  });
}

/* --------------------------------- Helpers --------------------------------- */

/** Run once from the editor (▶ setup) to create both sheets immediately. */
function setup() {
  Object.keys(SHEETS).forEach(function (key) {
    getOrCreateSheet(SHEETS[key]);
  });
}

function getOrCreateSheet(config) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  ss.setSpreadsheetTimeZone(TIMEZONE);
  const sheet = ss.getSheetByName(config.name) || ss.insertSheet(config.name);
  ensureHeaders(sheet, config);
  return sheet;
}

function ensureHeaders(sheet, config) {
  const cols = config.headers.length;
  const current = sheet.getLastRow() > 0
    ? sheet.getRange(1, 1, 1, cols).getValues()[0].map(String)
    : [];
  const matches = current.length === cols && config.headers.every(function (h, i) { return current[i] === h; });
  if (matches) return;

  if (sheet.getLastRow() > 0 && current.join('') !== '') {
    // Row 1 holds data or old headers → push it down and put headers on top
    sheet.insertRowBefore(1);
  }

  const header = sheet.getRange(1, 1, 1, cols);
  header.setValues([config.headers]);
  header
    .setFontWeight('bold')
    .setFontColor('#ffffff')
    .setBackground(config.color)
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle');
  sheet.setRowHeight(1, 34);
  sheet.setFrozenRows(1);

  config.widths.forEach(function (w, i) { sheet.setColumnWidth(i + 1, w); });
  sheet.getRange('A:A').setNumberFormat('yyyy-mm-dd hh:mm:ss');
  sheet.getRange(2, 1, sheet.getMaxRows() - 1, cols).setWrap(true).setVerticalAlignment('top');

  // Remove unused columns to keep the sheet tidy
  const extra = sheet.getMaxColumns() - cols;
  if (extra > 0) sheet.deleteColumns(cols + 1, extra);
}

function clean(value) {
  if (value === null || value === undefined) return '';
  let s = String(value).trim();
  // Prevent spreadsheet formula injection
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s.slice(0, 2000);
}

function json(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
