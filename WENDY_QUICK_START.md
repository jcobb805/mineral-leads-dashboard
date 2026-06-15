# Mineral Leads Dashboard — Wendy's Quick Start

## What This Is

A custom dashboard that shows you all mineral leads your team is researching. One click to see who to call today, who's been on the back-burner, which counties have the most opportunity.

**No app to download. No learning curve. Works offline.**

---

## Getting Started (2 Steps)

### Step 1: Open the Dashboard
```
C:\Users\Josh Cobb\mineral-leads-dashboard\index.html
```
Double-click it. Opens in your browser. Done.

### Step 2: (Optional) Live Google Sheets Sync
Right now it shows your current data. To sync live with your Google Sheet as your team updates it:

See: [GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md) for 5-minute setup.

---

## Your Dashboard Tabs

### 📋 Grid Tab (Default)
**See:** All ~100 leads in a table
**Use:** Find a specific lead, sort by county or NMA
**Filters:** Search by name, filter by deal stage

### 📌 Kanban Tab
**See:** Leads organized by pipeline stage
**Use:** Quick visual of what stage each lead is in
**Show:** Count of leads per stage

### 📅 Follow-Ups Tab
**See:** Who you need to call (sorted by follow-up date)
**Use:** Plan your week
**Note:** Red highlight = overdue (you're behind!)

### 📊 Analytics Tab
**See:** Charts of opportunity (where's the most NMA?)
**Use:** Decide where to focus effort
**Show:** Top counties, deal stage breakdown

---

## Quick Tasks

### "Find all PANOLA county leads"
1. Go to **Grid tab**
2. Click the search box
3. Type "PANOLA"
4. Leads filter instantly

### "See what I need to call today"
1. Go to **Follow-Ups tab**
2. Look for today's date
3. Call them in order

### "Which county has the most opportunity?"
1. Go to **Analytics tab**
2. Look at "Top Counties by NMA" chart
3. That's where the money is

### "Sort by how much NMA"
1. Go to **Grid tab**
2. Click the "NMA" column header
3. Highest NMA leads sort to top
4. Click again to reverse order

### "Just show me leads ready for outreach"
1. Go to **Grid tab**
2. Use the "Deal Stage" filter dropdown
3. Select your stage
4. Only those leads show

---

## When Your Team Updates the Sheet

If you've set up Google Sheets sync (see GOOGLE_SHEETS_SETUP.md):

1. Your team adds new leads to the Google Sheet
2. You **refresh the dashboard** (F5 or browser refresh button)
3. New leads appear instantly
4. You can start calling

**No re-downloading, no CSV exports.** Just refresh.

---

## Contact Info Fast Path

**In the Grid view:**
- Column 8 (far right) shows **Phone** number
- Click it, call directly
- Update the sheet when done with this call

---

## Understanding the Stats (Top of Dashboard)

| Stat | Means |
|------|-------|
| **Total Leads** | How many prospects you're working |
| **Total NMA** | Sum of all mineral acres (measure of opportunity) |
| **Initial Outreach** | Leads you haven't contacted yet (priority!) |
| **Overdue Follow-Ups** | Leads past their follow-up date (catch up!) |

---

## Tips for Success

### Daily
- Open dashboard first thing
- Check **Follow-Ups tab** for today's calls
- Plan your day around high-NMA leads (Analytics tab)

### Weekly
- Check **Kanban tab** to see pipeline flow
- Make sure follow-up dates are current in the sheet
- Add new leads from research team to sheet

### Monthly
- Look at **Analytics** to see which counties are hot
- Identify dead leads and close them out
- Celebrate the deals that closed!

---

## What Data Shows Where

**Your team puts this in the Google Sheet:**
- Owner name & contact info
- County & property details
- NMA (net mineral acres)
- Title research status
- Deal stage

**Dashboard shows it here:**
- **Grid:** All fields, sortable table
- **Kanban:** Organized by deal stage
- **Calendar:** Sorted by follow-up date
- **Analytics:** Visualized as charts

---

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Refresh data | F5 or Ctrl+R |
| Browser back | Alt+← |
| Zoom in | Ctrl++ |
| Zoom out | Ctrl+- |
| Find on page | Ctrl+F |

---

## FAQ

**Q: Can I edit leads in the dashboard?**  
A: Not yet. Edit in your Google Sheet, then refresh the dashboard. (Future feature: quick-edit modal)

**Q: What if I'm on the phone and need a number?**  
A: Pull up the Grid tab, search the name, call from there. Dashboard works on phone too.

**Q: Can my team see the dashboard?**  
A: Yes. Once set up, share the file or get a GitHub Pages link (see SETUP.md).

**Q: What if I close the browser? Is my data safe?**  
A: Yes. Data is in your Google Sheet. Dashboard just views it. Close anytime.

**Q: Do I need to download something?**  
A: No. Just open the HTML file in your browser. Works offline with your last data.

**Q: Can multiple people use the dashboard at once?**  
A: Yes. Everyone's looking at the same live Google Sheet, so if one person updates it, everyone sees the change (refresh to see immediately).

---

## Troubleshooting

**Dashboard shows old data?**
- Press F5 (refresh)
- Check that edits were saved in Google Sheet
- Wait 5 seconds for sheet to sync

**Numbers look wrong?**
- Make sure NMA column in sheet has only numbers
- Check dates are formatted as MM/DD/YYYY

**Can't find a lead?**
- Try searching in Grid tab
- Make sure your team added it to the sheet
- Refresh the page

**Charts not showing?**
- Refresh the page
- Try a different browser

---

## Next Steps

1. ✅ Open the dashboard (you can do this now)
2. 🔄 (Optional) Set up Google Sheets sync for live updates (5 min, see GOOGLE_SHEETS_SETUP.md)
3. 📞 Start using the Follow-Ups tab to plan your calls

**That's it. You're ready to go.**

Questions? Check browser console (F12) — it tells you what's happening. Or reach out to Josh.

---

**Built for:** Wendy's mineral lead acquisition workflow  
**Team:** Wendy (contacts leads) + Research team (updates data)  
**Data:** Your shared Google Sheet (~100 leads)  
**Status:** Ready to use now
