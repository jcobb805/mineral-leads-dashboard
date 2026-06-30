// Mineral CRM Data — Google Apps Script web app
// Stores the dashboard's overlay data (status, follow-ups, notes, call logs)
// as simple key/value rows, AND promotes "Ready for Outreach" leads to
// "With Wendy" in the source title-review sheet.

const SHEET_NAME = 'Data';

// Source lead sheet (the title-review workbook the dashboard reads from)
const SOURCE_SHEET_ID = '1XMUs-qCWV_cgP86J7l9xIXI8MHSB3HFajIsH8-3UEp8';
const SOURCE_TAB = 'Grants Title Review';

// Find every "Ready for Outreach" row and set it to "With Wendy".
// Returns how many rows were promoted.
function promoteReady_() {
  const ss = SpreadsheetApp.openById(SOURCE_SHEET_ID);
  const sh = ss.getSheetByName(SOURCE_TAB);
  if (!sh) return json_({ ok: false, error: 'source tab not found', promoted: 0 });
  const values = sh.getDataRange().getValues();
  const headers = values[0];
  const col = headers.indexOf('Recommended Next Action');
  if (col < 0) return json_({ ok: false, error: 'column not found', promoted: 0 });
  let promoted = 0;
  for (let i = 1; i < values.length; i++) {
    if (String(values[i][col]).trim() === 'Ready for Outreach') {
      sh.getRange(i + 1, col + 1).setValue('With Wendy');
      promoted++;
    }
  }
  return json_({ ok: true, promoted: promoted });
}

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

// GET ?action=getAll   -> { key: value, ... }
// GET ?action=promote  -> promotes Ready for Outreach -> With Wendy
function doGet(e) {
  if (e && e.parameter && e.parameter.action === 'promote') {
    return promoteReady_();
  }
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
