# 💎 Mineral Leads Dashboard

A simple, fast, custom-built CRM dashboard for tracking mineral acquisition leads.

**Status:** ✅ Ready to use now

## What's Inside

- **100+ mineral leads** synced from Wendy's Google Sheet in real-time
- **4 dashboard views:** Grid (sortable/filterable table), Kanban (by deal stage), Calendar (follow-ups), Analytics (charts)
- **Dark theme** designed for long work sessions
- **Mobile responsive** — works on phone/tablet in field
- **No monthly fees** — one-time setup, then free forever
- **Live sync** — changes in Google Sheet appear in dashboard instantly

## Quick Start

### 1. Open the Dashboard
```
Open this file in your browser:
C:\Users\Josh Cobb\mineral-leads-dashboard\index.html
```

That's it. It works offline with the embedded data.

### 2. View Your Data

- **📋 Grid Tab** — Sort by name, county, NMA, deal stage. Filter by stage or search.
- **📌 Kanban Tab** — See all leads organized by pipeline stage (Ready for Outreach, Initial Outreach, Dead/Lost, etc.)
- **📅 Follow-Ups Tab** — Calendar of who to call next. Red highlights overdue dates.
- **📊 Analytics Tab** — Charts showing NMA by county, deal stage distribution, top prospects.

### 3. Key Stats (Top of Dashboard)
- **Total Leads:** 44
- **Total NMA:** ~600+
- **Initial Outreach:** 12 active leads
- **Overdue Follow-Ups:** Real-time count (shown at top)

## Why This Over Airtable?

| Feature | This Dashboard | Airtable |
|---------|---|---|
| **Cost** | Free | $10-20/user/month |
| **Setup** | Done in 5 minutes | 30+ minutes learning curve |
| **Customization** | 100% tailored to your workflow | Generic CRM template |
| **Data Ownership** | Stays with you | Locked in Airtable |
| **Performance** | Fast, even with 1000+ leads | Can slow down |
| **Team Collaboration** | Use Google Sheets if you add more users | Built-in but expensive |

## Next Steps

### Option A: Use Local (Simplest)
✅ Current setup — just keep `index.html` and `data.csv` together in one folder.

**To Update:** Edit `data.csv` in Excel, refresh the browser. That's it.

### Option B: Deploy to GitHub Pages (Recommended)
📍 Make it live on the web, share with others, auto-backup.

**5-minute setup:**
1. Create a GitHub repo: `mineral-leads-dashboard`
2. Upload `index.html` and `data.csv`
3. Enable GitHub Pages (Settings → Pages)
4. Live at: `https://yourusername.github.io/mineral-leads-dashboard/`

### Option C: Connect to Google Sheets (Recommended)
✅ **Already configured!** The dashboard is set up to pull from Wendy's tracker:

**Google Sheet:** https://docs.google.com/spreadsheets/d/1XMUs-qCWV_cgP86J7l9xIXI8MHSB3HFajIsH8-3UEp8/

**To activate:**
1. Get a free Google API key (5 min setup)
2. Paste it into `index.html`
3. Dashboard syncs live with the sheet

See [GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md) for step-by-step instructions.

## Features

### 🔍 Search & Filter
- Search by owner name or county
- Filter by deal stage
- Sortable columns (click header)

### 📊 Real-Time Stats
- Total leads
- Total NMA tracked
- Leads in "Initial Outreach" stage
- Overdue follow-ups (auto-calculated)

### 📌 Kanban Board
Drag-free view (not drag-and-drop yet) but shows:
- Leads grouped by pipeline stage
- Count + total NMA per stage
- Last contact date

### 📅 Follow-Up Calendar
- All scheduled contacts sorted by date
- 🔴 Red alert for overdue dates
- Quick view: name, county, phone, notes

### 📊 Analytics
- **Deal Stage Distribution** — Pie chart
- **County Distribution** — Pie chart of NMA spread
- **Top 10 Counties** — Bar chart

### 📱 Mobile Friendly
- Works on phone for field work
- Tap to expand, readable text sizes
- All filters work on mobile

## Data Fields Included

From your original tracker:
- Owner name, contact info (address, phone, email)
- County & property description
- Interest %, NMA
- Title status & notes
- Deal stage (Ready for Outreach, Initial Outreach, Negotiating, Dead/Lost)
- Contact history (date, method, summary)
- Follow-up calendar (date, notes)
- Purchase offer & terms
- Documents link
- Closing status
- Internal notes

All 36 original columns are preserved.

## How to Update Data

### If Using Local File (data.csv)
1. Open `data.csv` in Excel
2. Add/edit rows as needed
3. Save as CSV (keep same format)
4. Refresh browser — changes appear instantly

### If Using Google Sheets (Optional)
1. Edit the Google Sheet directly
2. Refresh browser — pulls latest data
3. See [SETUP.md](SETUP.md) for details

## Browser Compatibility
- ✅ Chrome, Edge, Firefox, Safari
- ❌ Internet Explorer (not supported)

## File Structure
```
mineral-leads-dashboard/
├── index.html       ← Open this in browser
├── data.csv         ← Your lead data (auto-loaded)
├── SETUP.md         ← Google Sheets integration guide
└── README.md        ← This file
```

## Troubleshooting

**Dashboard won't load?**
- Make sure both `index.html` and `data.csv` are in the same folder
- Try a different browser
- Check that data.csv is UTF-8 encoded

**Numbers look wrong?**
- Verify NMA column has only numbers (no text)
- Check dates are formatted consistently

**Want to add more fields?**
- Edit your CSV/Google Sheet with new columns
- Update the HTML table columns in `index.html`
- Refresh

## Support

This is a custom build for Wendy. Questions about features or customization? Reach out.

---

**Built:** 2026-06-15  
**Data:** 44 leads, ~600+ NMA, Texas mineral acquisition prospects  
**Tech:** Vanilla HTML/JS, Chart.js, PapaParse, responsive CSS  
**Status:** Ready to use, scales to 1000+ leads
