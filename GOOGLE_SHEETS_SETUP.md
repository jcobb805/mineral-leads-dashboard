# Google Sheets Integration Setup

## Your Sheet Details

- **Sheet URL:** https://docs.google.com/spreadsheets/d/1XMUs-qCWV_cgP86J7l9xIXI8MHSB3HFajIsH8-3UEp8/
- **Sheet ID:** `1XMUs-qCWV_cgP86J7l9xIXI8MHSB3HFajIsH8-3UEp8`
- **Sheet Name:** `Grants_Title_Review_Tracker`
- **Current Rows:** ~100 mineral lead records
- **Team Access:** Multiple people can edit the sheet; Wendy uses the dashboard to view and contact leads

The dashboard is now pre-configured to pull from this sheet. You just need to enable API access.

### How It Works

1. **Team updates Google Sheet** (research, add new leads, notes)
2. **Wendy opens dashboard** (sees live data instantly)
3. **Wendy contacts leads** (updates last contact date/notes in sheet)
4. **Dashboard refreshes** (shows updated status to team)

No Excel import/export headaches. One source of truth.

---

## Step 1: Make Your Google Sheet Publicly Accessible

1. Open your sheet: https://docs.google.com/spreadsheets/d/1XMUs-qCWV_cgP86J7l9xIXI8MHSB3HFajIsH8-3UEp8/
2. Click **Share** (top right)
3. Change permissions to **"Anyone with the link can view"**
4. Click **Copy link** → Save it
5. Click **Done**

✅ Your sheet is now public-readable.

---

## Step 2: Get a Google API Key

### Option A: Quick Setup (5 minutes)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. If you don't have a Google Cloud project:
   - Click the **Project** dropdown (top left)
   - Click **New Project**
   - Name it "Mineral Leads" → Create
3. Wait for project to load, then click the Project dropdown again and select your new project

### Option B: Use Existing Project (If you already have one)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project from the dropdown

---

## Step 3: Enable Google Sheets API

1. In Google Cloud Console, search for **"Google Sheets API"** (use the search bar)
2. Click on it
3. Click the blue **Enable** button
4. Wait for it to enable (takes ~10 seconds)

---

## Step 4: Create an API Key

1. In Google Cloud Console, go to **Credentials** (left sidebar)
2. Click **+ Create Credentials** (top)
3. Select **API Key**
4. A key will appear in a popup — **Copy it** (blue copy button)
5. Store it somewhere safe — you'll use it next

---

## Step 5: Update the Dashboard

1. Open `index.html` in a text editor (VS Code, Notepad, etc.)
2. Find this line near the top of the `<script>` section:

```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```

3. Replace with your actual API key:

```javascript
const API_KEY = 'AIzaSyD1234567890abcdefghijklmnop';
```

4. **Save the file**

---

## Step 6: Test It

1. Open `index.html` in your browser (or refresh if already open)
2. Check the browser console (F12 → Console)
3. You should see: **"Data loaded from Google Sheets"**
4. Stats should show ~100 leads instead of 44
5. All data comes from your live Google Sheet now ✅

---

## Now What?

### Edit Data

- Edit your Google Sheet normally: https://docs.google.com/spreadsheets/d/1XMUs-qCWV_cgP86J7l9xIXI8MHSB3HFajIsH8-3UEp8/
- Changes appear in the dashboard within **5 seconds** (refresh page to see immediately)
- No need to re-export CSV

### Share the Dashboard

Once set up, you can share `index.html` or deploy to GitHub Pages:

**Local folder:** Just send the folder with `index.html` and `data.csv` — it will work both ways (with or without API key)

**Live link (GitHub Pages):**
1. Create GitHub repo: `mineral-leads-dashboard`
2. Upload `index.html` and `data.csv`
3. Enable GitHub Pages
4. Live at: `https://yourusername.github.io/mineral-leads-dashboard/`
5. Anyone can view your live dashboard (pulls from your public Google Sheet)

### Add More Data

- Add rows directly to your Google Sheet
- Refresh the dashboard — new leads appear instantly
- No CSV syncing needed

### For Team Collaboration

If Wendy and others edit the sheet:
1. Share the Google Sheet with them (as usual)
2. Give them the `index.html` file or GitHub Pages link
3. Everyone sees the same live data
4. No conflicts — Google Sheets handles concurrency

---

## Troubleshooting

**"Data loaded from Google Sheets" doesn't appear in console?**
- Did you replace `YOUR_API_KEY_HERE` with your actual key?
- Is the key from the **Credentials** page?
- Try refreshing (Ctrl+F5 for hard refresh)

**CORS error in console?**
- This is normal for public sheets with API keys — Google Sheets API handles it
- If you see it, the data should still load anyway

**Still showing old CSV data?**
- Hard refresh: **Ctrl+F5** (or Cmd+Shift+R on Mac)
- Clear browser cache
- Check that Sheet ID is exactly: `1XMUs-qCWV_cgP86J7l9xIXI8MHSB3HFajIsH8-3UEp8`

**Data shows 0 leads?**
- Check that sheet name is exactly: `Grants_Title_Review_Tracker` (case-sensitive)
- Verify sheet is public ("Anyone with link can view")
- Check API key is correct (no spaces, full string)

**API Key errors?**
- Go back to [Google Cloud Console](https://console.cloud.google.com/)
- Verify Google Sheets API is **Enabled**
- Verify the API Key exists in **Credentials** section
- Try creating a new key if the first one seems broken

---

## Security Note

**Google API Keys are semi-public** — anyone with the key can read your (public) sheet. This is fine because:
- Your sheet is already publicly readable (anyone with the link can view it)
- The API key only grants read access
- API Key cannot write, delete, or modify data

If you ever need to restrict access, create a private Google Sheet instead and adjust sharing.

---

## How Your Team Workflow Works

### The Setup
- **Google Sheet:** Shared with entire team (Wendy + researchers/admins)
- **Dashboard:** Wendy uses this to see live data and plan her contacts
- **Data Flow:** Researchers add leads → Wendy contacts them → Updates sync back to sheet

### Example Daily Flow

**Morning (Research Team):**
1. Add 5 new leads to Google Sheet
2. Update notes on existing leads

**Afternoon (Wendy):**
1. Open the dashboard
2. See all 100+ leads with latest research (updated 5 min ago)
3. Filter by county or deal stage
4. Click phone number, make call
5. Update "Last Contact Date" and "Last Contact Summary" in sheet
6. Dashboard refreshes, team sees her updates

**No Emails, No Files, No Conflicts** — Single source of truth.

### Permissions

- **Google Sheet:** Share with "Editor" access to team members
- **Dashboard:** Read-only (pulls from public sheet)
- **Who Can Edit:** Anyone with sheet access
- **Who Can View Dashboard:** Anyone with the file or GitHub Pages link

---

## Next: Deploy to GitHub Pages (Optional)

Once Google Sheets is working locally, you can go live:

1. **Create a GitHub repo:**
   ```bash
   git init mineral-leads-dashboard
   cd mineral-leads-dashboard
   git add .
   git commit -m "Initial mineral leads dashboard"
   ```

2. **Push to GitHub:**
   - Create repo on GitHub (same name)
   - Follow the push instructions GitHub shows

3. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: main branch
   - Save
   - Live at: `https://yourusername.github.io/mineral-leads-dashboard/`

4. **Share the link** — anyone can now use your dashboard live

---

**Done!** Your dashboard is now synced to your live Google Sheet. 🎉

Questions or issues? Check browser console (F12) for error messages.
