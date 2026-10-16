# Range — your daily mobility practice

A functional, iPhone-first stretching coach built on the supplied Range HTML/CSS/JavaScript project. No build step, account, API keys, or backend is required.

## Preview

```sh
cd /workspace/range-mobility-app
python3 -m http.server 8000 --bind 0.0.0.0
```

On your own computer, run the same command from the downloaded project folder. Open `http://localhost:8000` in your browser. Use your browser's responsive device mode for an iPhone-sized preview. The server in the prepared cloud workspace is already running on port 8000; this does not create a publicly accessible website.

To preview from your iPhone on the same local Wi-Fi as your computer, use `http://YOUR-COMPUTER-LAN-IP:8000` in Safari. Local-network HTTP supports the basic app but not the offline service worker. Your firewall must permit the connection. Use HTTPS for the installed experience.

## Install on iPhone

1. Upload the static app files to an HTTPS static host, such as Netlify, Cloudflare Pages, or GitHub Pages. There is no build command; publish the project root containing `index.html`. For a manual upload, include `app.js`, `visuals.js`, `styles.css`, `sw.js`, `manifest.webmanifest`, and all icons alongside it.
2. Open the resulting HTTPS address in Safari on your iPhone.
3. Choose **Share → Add to Home Screen → Add** (and **Open as Web App**, if offered).
4. Launch Range from its Home Screen icon. Open it online once so the local assets can be cached; afterward the built-in library and your saved data work offline.

This is an installable web app, not an App Store binary. No Apple developer account is needed for Home Screen installation. A later native release can wrap this app using Capacitor, then use Xcode and an Apple Developer account for TestFlight/App Store distribution. That packaging has not been performed here.

## What works

- **Today:** the original eight-movement, exactly 12-minute lower-body starter practice, covering hips, hamstrings, calves, ankles, and quads.
- **Guided sessions:** accurate elapsed-time countdowns, explicit halfway side switches, pause/resume, optional gentle sound cues, and screen wake requests when supported. Each movement stops at zero so you can give feedback and move on at your own pace; a session can therefore take more than 12 minutes including setup and feedback.
- **30 built-in exercises:** original vector position guides for every movement, with slow, pausable illustrative loops for the 12 dynamic movements. Setup, intended sensation, and form cautions accompany each guide. Reduced-motion preferences are respected.
- **Routine builder:** add/remove exercises, reorder both directions, edit individual total durations (10–1800 seconds), substitute from any area while retaining the slot's duration, and save/load named practices with their own durations.
- **Custom movements:** create and edit your own names, instructions, body areas, durations, and side-switch preferences without code. Custom movements use your written instructions rather than an invented demonstration.
- **Personal discovery:** mark movements Helpful, Not feeling it, or Uncomfortable. Preview a 12-minute suggestion based on your chosen focus and feedback. Helpful exercises are favored, uncomfortable exercises are excluded, and all five focus areas remain represented. Nothing replaces your current routine until you apply the suggestion. You can still manually select any movement.
- **Progress:** session history, practiced time, active days, exercise feedback, knee-to-wall distance, seated reach gap, and subjective movement comfort. Check-ins show baseline changes and recent values; erroneous measurements can be deleted.
- **Your data:** local browser persistence, validated JSON backups, and offline app assets. Imports validate before replacing existing data. Old MVP backups are supported.

## Findings and changes

The supplied app already had working routine controls, local storage, feedback, and a basic player. It had only 18 movements, emoji demonstration placeholders, a focus label that did not change suggestions, and no mobility assessments. Its timer relied on interval ticks, skipped movements increased completion counts, and imported exercise IDs were insufficiently validated.

This implementation keeps that data model and browser architecture, expands the catalog, adds original local guides and explicit personalization, and fixes those timer/history/import problems. Session history records actual timer time; skips do not count as completed movements, and an entirely skipped practice produces no session record. Early exits are marked partial. Routine durations are snapshotted for the active session.

## Tests

The functional tests use Python Playwright. The prepared environment already has Playwright and `/usr/bin/chromium`.

With the app server running in another terminal:

```sh
python3 -m unittest discover -s tests -v
node --check app.js
node --check visuals.js
node --check sw.js
```

On a fresh development machine, optionally create a virtual environment and install the test tools:

```sh
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements-dev.txt
python -m playwright install chromium
python -m unittest discover -s tests -v
```

The runner uses `/usr/bin/chromium` when present, otherwise Playwright's installed browser. Set `CHROMIUM_PATH` to another browser executable if needed. `RANGE_TEST_URL` can override the default local server address.

**Verified:** 14 Chromium browser tests pass: a full 720-second session using a controlled clock; pause/resume and side switching; skips and partial exits; feedback and in-session swaps; duration persistence; routine save/reorder/load/delete; custom creation/editing; suggestions; measurements; backup export/import and invalid data rejection; offline reload; library search/filtering; and layouts at 320, 390, 430, and 1280 pixels. JavaScript syntax checks pass. Physical iPhone/Safari, sound output, and screen-wake behavior need device testing.

## Practical limits

- Illustrations are original schematic teaching aids, not filmed demonstrations or clinically reviewed biomechanics. Before a public coaching release, have a qualified movement professional review the instructions and illustrations and replace/augment them with reviewed video where needed. Stop movements that cause pain, numbness, or pinching.
- Keep Range in the foreground. Locked screens and background execution may suspend browser timers or audio. The timer reconciles elapsed wall time on return and stops at the current movement's end; it does not silently advance through the remaining routine.
- Sessions in progress are not persisted across a reload; the browser asks before leaving. Completed sessions, customizations, and measurements persist locally.
- Data stays in this browser/profile and does not automatically sync across devices or between Safari and an installed Home Screen app. Export a backup before changing devices or installations. Clearing site storage can erase your history.
- Mobility measurements are self-reported personal trends, not camera measurements or medical assessments. Use the same leg and setup each time. Comfort is subjective.
- There is no hosted deployment, cloud sync, HealthKit integration, or native iOS package included. No public deployment was made.

## Files

`app.js` preserves and extends the original application, exercise catalog, storage, routine editing, player, feedback, and progress. `visuals.js` contains original SVG guides and UI icons. `styles.css` is the mobile-first visual system; `sw.js` caches local app assets. The original uploaded ZIP is unchanged.
