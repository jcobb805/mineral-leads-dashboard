# Cross-Device Sync Setup (one-time, ~5 minutes)

This connects the dashboard to a **separate** Google Sheet so that Wendy's laptop,
your computer, and her phone all show the **same** status/follow-up/notes/call-log data.

Your "Grants Title Review" source sheet is **never touched** — this uses a brand-new sheet.

---

## Step 1 — Create the data sheet
1. Go to https://sheets.google.com and click **Blank** to make a new spreadsheet.
2. Name it **`Mineral CRM Data`** (top-left).
3. Leave it empty. (The script fills it in automatically.)

## Step 2 — Add the script
1. In that sheet, click **Extensions → Apps Script**.
2. Delete anything in the editor and paste the **entire** block from `apps-script.gs`
   (in this folder).
3. Click the **💾 Save** icon.

## Step 3 — Deploy it as a web app
1. Click **Deploy → New deployment**.
2. Click the gear ⚙ next to "Select type" → choose **Web app**.
3. Set:
   - **Description:** Mineral CRM
   - **Execute as:** **Me**
   - **Who has access:** **Anyone**
4. Click **Deploy**.
5. Click **Authorize access**, pick your Google account, and approve.
   (If you see "Google hasn't verified this app," click **Advanced → Go to … (unsafe)** —
   it's your own script, this is normal.)
6. Copy the **Web app URL** it gives you (ends in `/exec`).

## Step 4 — Send me the URL
Paste that `/exec` URL back to me and I'll plug it into the dashboard.
That's it — sync goes live for everyone.

---

### Notes
- It's **free** and runs under your Google account.
- Data is private to anyone who has the dashboard link (same as today).
- Edits save instantly; every device pulls the latest data when the dashboard opens.
