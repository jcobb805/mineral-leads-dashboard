// Mineral CRM Data — Google Apps Script web app
// Stores the dashboard's overlay data (status, follow-ups, notes, call logs)
// as simple key/value rows. Does NOT touch any other spreadsheet.

const SHEET_NAME = 'Data';

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['key', 'value', 'updatedAt']);
  }
  // Force key + value columns to PLAIN TEXT so dates/zips/numbers
  // are never auto-converted by Sheets (e.g. "6/9/2026" staying a string).
  sh.getRange('A:B').setNumberFormat('@');
  return sh;
}

// GET ?action=getAll  ->  { key: value, ... }
function doGet(e) {
  const sh = getSheet_();
  // getDisplayValues returns exactly what's shown, as strings (no Date/number coercion)
  const rows = sh.getDataRange().getDisplayValues();
  const out = {};
  for (let i = 1; i < rows.length; i++) {
    const key = rows[i][0];
    const val = rows[i][1];
    if (key) out[key] = val;
  }
  return ContentService
    .createTextOutput(JSON.stringify(out))
    .setMimeType(ContentService.MimeType.JSON);
}

// POST { key, value }  -> upsert (empty value deletes the row)
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const body = JSON.parse(e.postData.contents);
    const key = String(body.key || '');
    const value = body.value == null ? '' : String(body.value);
    if (!key) return json_({ ok: false, error: 'missing key' });

    const sh = getSheet_();
    const rows = sh.getDataRange().getValues();
    let rowIndex = -1;
    for (let i = 1; i < rows.length; i++) {
      if (rows[i][0] === key) { rowIndex = i + 1; break; }
    }

    if (value.trim() === '') {
      // delete if exists
      if (rowIndex > 0) sh.deleteRow(rowIndex);
    } else if (rowIndex > 0) {
      sh.getRange(rowIndex, 2).setValue(value);
      sh.getRange(rowIndex, 3).setValue(new Date());
    } else {
      sh.appendRow([key, value, new Date()]);
    }
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
