# Shadow Hunter

## Updating your app on GitHub

You changed the sprites, so **two things must be uploaded**: the new
`index.html` and the `sprites/` folder. And `sw.js` must have a new
version number, or your phone keeps serving the old cached copy.

### Steps

1. Open your repository on github.com
2. Click **Add file** -> **Upload files**
3. Drag in the new `index.html`, `sw.js`, and the whole `sprites` folder
4. Scroll down, click **Commit changes**
5. Wait ~2 minutes, then open the app on your phone
6. **Close it fully and reopen it** (swipe it out of recent apps first) -
   the service worker only swaps in the new version on a fresh start

If it still looks old, open the site in Chrome (not the installed app),
pull down to refresh, then reopen the installed app.

### Every time you update, from now on

Open `sw.js` and bump the version:

    const VERSION = 'shadow-hunter-v5';   ->   'shadow-hunter-v6'

That one line is what tells every installed copy to fetch the new files.
Forget it and nothing changes on your phone.

### Before updating

Open the app, Settings -> **Voortgang exporteren**. Your save is not
touched by an update, but it costs nothing to have a copy.

## Files

| File | What it is |
|---|---|
| `index.html` | The app |
| `sprites/` | 61 PNGs - 24 sprites plus animation frames |
| `sw.js` | Offline caching. Bump VERSION on every update |
| `manifest.json` | Makes it installable |
| `icon-192.png`, `icon-512.png` | App icons |
