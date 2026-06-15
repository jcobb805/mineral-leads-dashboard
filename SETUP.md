# Mineral Leads Dashboard — Setup Guide

## Quick Start

The dashboard is ready to use with embedded data. Just open `index.html` in a browser.

**Features:**
- 📋 **Grid View** — Sortable, filterable table of all leads
- 📌 **Kanban Board** — Organize leads by deal stage
- 📅 **Follow-Up Calendar** — Track scheduled contact dates
- 📊 **Analytics** — Charts for NMA distribution, top counties

---

## Setup for Google Sheets (Optional)

To sync data with Google Sheets instead of using the embedded CSV:

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Mineral Leads" (or whatever you prefer)
4. Copy the headers from the CSV and paste them into the first row
5. Import the data:
   - In Google Sheets, go to **File → Import → Upload**
   - Select `Acquisition_Texas_Mineral__Tracker.csv`
   - Choose **Replace current sheet** or **Insert new sheet**
   - Click Import

### Step 2: Make the Sheet Public

1. Click the **Share** button (top right)
2. Change to "Anyone with the link can view"
3. Copy the Share link

### Step 3: Get Your Sheet ID

From the URL in your browser:
```
https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
```
Copy the `SHEET_ID_HERE` part.

### Step 4: Enable Google Sheets API

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Search for "Google Sheets API" and enable it
4. Go to **Credentials** → **Create Credentials** → **API Key**
5. Copy the API key

### Step 5: Update the Dashboard

Edit `index.html` and find these lines (near top of `<script>` section):

```javascript
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
const API_KEY = 'YOUR_API_KEY_HERE';
```

Replace with your actual values:

```javascript
const SHEET_ID = 'abc123def456...';
const API_KEY = 'AIzaSyD1234567...';
```

### Step 6: Ensure Your Sheet is Named Correctly

The dashboard looks for a sheet named "Sheet1" by default. If yours is named differently, edit this line in `index.html`:

```javascript
const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`);
```

Change `Sheet1` to match your sheet name.

---

## How to Update Data

### Option A: Edit in Dashboard (Future Feature)
Currently, the dashboard is read-only. Data updates via the embedded CSV.

### Option B: Edit in Google Sheets
If using Google Sheets integration:
1. Edit the sheet directly at sheets.google.com
2. Changes appear in the dashboard on next page refresh

### Option C: Update the CSV
1. Edit `data.csv` in the dashboard folder
2. Refresh the browser

---

## Deployment

### GitHub Pages (Free, Recommended)

1. Create a new GitHub repo: `mineral-leads-dashboard`
2. Clone it locally
3. Copy `index.html` and `data.csv` to the repo
4. Push to GitHub
5. Go to repo Settings → Pages → Enable GitHub Pages from `main` branch
6. Your dashboard is live at `https://yourusername.github.io/mineral-leads-dashboard/`

### Local File
Simply open `index.html` in your browser (works offline with embedded data)

### Web Server
Upload files to any web server (Apache, Nginx, etc.)

---

## Features Explained

### 📊 Stats Dashboard
- **Total Leads** — Count of all prospects
- **Total NMA** — Sum of net mineral acres
- **Initial Outreach** — Count in "Initial Outreach" stage
- **Overdue Follow-Ups** — Leads past their follow-up date

### 🔍 Grid View
- Sort by any column (click the header)
- Search by owner name or county
- Filter by deal stage
- View all key fields at once

### 📌 Kanban Board
- Leads organized by deal stage
- Visual count per stage
- At-a-glance NMA totals per category

### 📅 Follow-Up Calendar
- Sorted by next follow-up date
- 🔴 Red highlight for overdue dates
- Shows phone number and notes for quick calling

### 📊 Analytics
- **Deal Stage Breakdown** — Pie chart of lead distribution
- **County Distribution** — Pie chart of NMA by county
- **Top Counties** — Bar chart of highest NMA counties

---

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ❌ Not supported

---

## Customization

### Change Colors
Edit the CSS in `index.html`. Look for hex colors like `#4a9eff` (blue), `#1a1a1a` (dark), etc.

### Add New Fields
1. Update your Google Sheet or CSV with new columns
2. Update the table columns in the "Grid View" section
3. Add new fields to Kanban cards if needed

### Change Deal Stages
Edit the `stages` array in `renderKanban()`:
```javascript
const stages = ['Ready for Outreach', 'Initial Outreach', 'Negotiating', 'Dead / Lost', 'No', 'Unknown'];
```

---

## Troubleshooting

**Data not loading?**
- Check browser console (F12 → Console) for errors
- Verify `data.csv` is in the same folder as `index.html`
- Make sure CSV encoding is UTF-8

**Google Sheets not loading?**
- Verify Sheet is "Anyone with link can view"
- Check Sheet ID and API Key are correct
- Ensure Google Sheets API is enabled in Cloud Console
- Check browser console for CORS errors

**Charts not showing?**
- Refresh the page
- Check that numeric fields (NMA) don't have text in them

---

## Next Steps

1. **Deploy to GitHub Pages** for a live link to share
2. **Add Wendy as collaborator** if using Google Sheets
3. **Set reminders** in your calendar for overdue follow-ups
4. **Grow your leads** — the dashboard scales to 1000+ records

Questions? Check the analytics tab for insights on where to focus.
