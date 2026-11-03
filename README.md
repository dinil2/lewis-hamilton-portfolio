# Sir Lewis Hamilton — Formula 1 Digital Portfolio

> An Awwwards-level interactive portfolio & career archive for **Sir Lewis Hamilton** (7-time Formula 1 World Champion, driving for Scuderia Ferrari HP in car #44). Built from scratch with Vite, React 19, TypeScript, Tailwind CSS, GSAP 3, Lenis, and Framer Motion.

**🌐 Live Production Site**: [https://lewis-hamilton-44.netlify.app](https://lewis-hamilton-44.netlify.app)

---

## 🏎 Features & Architecture

- **Signature Hero Hover-Reveal**: Reinterprets the interactive mask mechanic inspired by landonorris.com. A smooth, 60fps lerped radial mask reveals Lewis in his Scuderia Ferrari helmet and scarlet race suit over his civilian portrait. On touch screens, it follows finger touch/drag (`touch-action: pan-y`) with an idle scanner sequence for immediate discoverability.
- **Buttery-Smooth Mobile Scrolling**: Built to eliminate mobile stutter completely:
  - GSAP Ticker-synchronized Lenis with `syncTouch: false` to retain native hardware-accelerated momentum scrolling on touch devices.
  - `ScrollTrigger.config({ ignoreMobileResize: true })`.
  - Responsive pinning via `gsap.matchMedia()` (horizontal track on desktop, vertical stacked flow on mobile).
  - Heavy transforms & blurs avoided on mobile; hardware-contained sections (`contain: layout paint`).
- **4-Second Formula 1 Loader Screen**:
  - Centered wordmark with racing helmet drop-in (0–0.6s).
  - Side-view SF-26 race car speeding across the track with a pooled GSAP smoke puff exhaust system and a synchronized 0–100% counter (0.6–3.4s).
  - Curtain clip-path split reveal (3.4–4.0s).
  - Preloads hero assets; skips automatically on subsequent visits via `sessionStorage` (force with `?loader=1`). Reduced motion preference shortens to ~1.2s without smoke.
- **2026 Season Hub**:
  - Standings table for top 7 drivers and top 4 constructors (with Hamilton & Ferrari highlighted).
  - Last race review (Mexico City GP: Pole #105, P2 finish, +0.799s gap).
  - Next race card (São Paulo Grand Prix at Interlagos).
  - 2026 podium ledger and remaining rounds calendar.
  - Head-to-head points duel with teammate Charles Leclerc (259 vs 245 pts).
- **Interactive SF-26 Machine**:
  - Detailed Rosso Corsa aerodynamic vector blueprint with 7 interactive component hotspots (front wing, halo, power unit, "macarena" rotating rear wing, venturi floor, tyres, #44 livery).
  - Exploded view toggle animating subassemblies outward.
  - Full keyboard accessibility (`Enter`/`Space` to inspect, `Left`/`Right` arrows to cycle, `Escape` to close).
- **Interactive Helmets & Number 44**:
  - Era-specific illustrated helmets (McLaren Senna tribute yellow, Mercedes purple/neon, Ferrari fluo yellow & Rosso Corsa).
  - Tap/click to cycle through eras with quote highlights.
- **Career in Numbers & Stacking World Titles**:
  - Animated count-up statistics (7 titles, 106 wins, 105 poles, 209 podiums, 399 starts, 5,277.5 points).
  - 7 World Title cards with a high-performance stacking scroll effect.
- **Race Mode Easter Egg**:
  - Press `4` twice in quick succession (or tap the floating `44` badge in the bottom left) to activate the 5-light FIA starting grid gantry, sound-wave countdown, screen reaction, and celebratory confetti.
- **Night Race Dark Mode**:
  - Seamless toggle between light default theme (warm off-white `#F6F4EF`) and "Night Race" dark theme (`#0A0A0A`) with CSS custom properties.

---

## 🛠 Tech Stack

- **Framework**: Vite + React 19 + TypeScript (Strict)
- **Styling**: Tailwind CSS + Custom CSS Design Tokens
- **Motion & Scroll**: GSAP 3 (ScrollTrigger) + Lenis Smooth Scroll + Framer Motion
- **Icons**: Lucide React
- **Confetti**: canvas-confetti
- **Deployment**: Static Netlify SPA (`netlify.toml` included)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized, chunked static bundle in `dist/`.

### 4. Run Linting
```bash
npm run lint
```

---

## 🔄 How to Update Data After Each Race

All data is strictly decoupled from UI components and maintained in typed objects in `src/data/`:

| File | What to Update |
| :--- | :--- |
| `src/data/site.ts` | Update `lastUpdated` (e.g. `'8 November 2026'`) and `snapshotLabel` (e.g. `'After Round 20, São Paulo GP'`). |
| `src/data/career.ts` | Update `starts`, `wins`, `poles`, `podiums`, `points`, `lastWin`, and `latestPole`. |
| `src/data/season2026.ts` | Update 2026 points, standings, `lastRace` summary, and `nextRace` details. |
| `src/data/teammates.ts` | Update teammate stats or partnership notes if needed. |
| `src/data/records.ts` | Update record numbers and historical firsts. |

Once updated in `src/data/`, the entire site updates its statistics, standings, next race cards, and telemetry automatically!

---

## 🖼 How to Swap Hero & Gallery Images

### Hero Images
Drop your high-resolution images into:
- `public/assets/hero/hamilton-base.webp` (Lewis facing forward, shoulders to mid-torso, 4:5 aspect ratio)
- `public/assets/hero/hamilton-helmet.webp` (Lewis in Ferrari helmet and team jacket, with **identical framing and head position** as the base image)

> **Important**: To ensure a flawless reveal effect, ensure both portraits have identical dimensions and head center points. If images are missing, the site automatically renders pixel-aligned vector SVG illustrations without breaking.

### Gallery Images
Place up to 12 images named `01.webp` through `12.webp` into:
- `public/assets/gallery/`

---

## 🌐 Deploying to Netlify

This project is configured as a zero-configuration static SPA for Netlify:
1. Connect your repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The included `netlify.toml` automatically configures:
   - Node 20 environment
   - SPA fallback redirects (`/* -> /index.html 200`)
   - 1-year immutable caching for static hashed assets (`/assets/*`)
   - Production security headers (X-Frame-Options, XSS protection, nosniff, referrer-policy)

---

## ⚖️ Legal & Fan Disclaimer

This is an independent fan project. It is **not** affiliated with or endorsed by Sir Lewis Hamilton, Scuderia Ferrari, or Formula 1. All registered trademarks, logos, and car names belong to their respective owners.

### Developer
- **Designed & Developed by**: Dinil Bhashana (Software Engineering Student, Sri Lanka)
- **LinkedIn**: [dinil-bhashana](https://www.linkedin.com/in/dinil-bhashana)

