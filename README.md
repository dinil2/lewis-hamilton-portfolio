# Sir Lewis Hamilton — Formula 1 Digital Portfolio & Archive

[![Netlify Status](https://api.netlify.com/api/v1/badges/67ecbc68-eec7-458f-8f60-c866cef16c8b/deploy-status)](https://app.netlify.com/projects/lewis-hamilton-44)
[![React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![GSAP 3](https://img.shields.io/badge/GSAP-3-green.svg)](https://greensock.com/gsap/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF.svg)](https://vitejs.dev/)

**🌐 Live Production Site**: [https://lewis-hamilton-44.netlify.app](https://lewis-hamilton-44.netlify.app)  
**💻 GitHub Repository**: [https://github.com/dinil2/lewis-hamilton-portfolio](https://github.com/dinil2/lewis-hamilton-portfolio)

---

## 📖 Why I Created This Site

As a software engineering student and lifelong motorsport enthusiast, I built this website as a tribute to **Sir Lewis Hamilton**—the most successful driver in Formula 1 history—celebrating his chapter piloting the iconic Rosso Corsa scarlet of **Scuderia Ferrari HP** in car **#44**.

Most fan sites and sports pages feel like static wiki clones or generic AI templates with laggy mobile scrolling. My goal was to create an **Awwwards-level digital instrument**:
1. **Cinematic & Photorealistic**: Real high-resolution photography, telemetry aesthetics, and luxury motorsport design rather than cartoon illustrations.
2. **Smooth Mobile-First Experience**: Eliminate the mobile stutter and scroll-jank common on animation-heavy websites by synchronizing Lenis with GSAP's internal ticker and maintaining native momentum scrolling on touch devices.
3. **Interactive Visual Storytelling**: Instead of just reading stats, visitors interact with the car, reveal the helmet through the driver's face, inspect technical telemetry, and feel the excitement of race day with live countdown timers.

---

## ⚡ What This Website Features

### 1. Signature Hero Dual-Layer Reveal
- Inspired by bespoke editorial portfolios, a front-facing civilian portrait of Lewis Hamilton reveals his Ferrari helmet and scarlet race suit through a hardware-accelerated radial mask.
- On desktop, it tracks cursor velocity with a smooth lerp loop (`requestAnimationFrame`).
- On touch devices, it follows finger press and swipe gestures (`touch-action: pan-y`) with an idle scanner sequence for discoverability without locking vertical scroll.

### 2. FIA 5-Light Start Gantry & Telemetry Launch Sequence
- A custom F1 launch sequence featuring 5 sequential red start lights, live RPM redline audio-visual progression, and power unit status indicators (PU, ERS, HYDRAULICS), leading into a carbon curtain wipe transition.
- Runs once per session via `sessionStorage` (force with `?loader=1`) and respects `prefers-reduced-motion`.

### 3. Dynamic 2026 Season Hub & Auto-Rollover Calendar
- **Live Countdown to Lights Out**: Real-time ticker counting down days, hours, minutes, and seconds to the next race start.
- **Smart Rollover Engine (`src/lib/schedule.ts`)**: Built-in calendar logic that automatically detects when a race finishes (e.g. after São Paulo GP on Nov 8) and seamlessly advances the Next Race Card to the subsequent Grand Prix (Las Vegas, Qatar, Abu Dhabi) with zero manual code changes.
- **Official Standings Ledger**: Top 7 Drivers and Top 4 Constructors standings tables with Hamilton and Ferrari highlighted.
- **Intra-Team Duel**: Head-to-head points tracker between Lewis Hamilton (#44) and Charles Leclerc (#16).

### 4. Interactive Ferrari SF-26 Aerodynamic Machine
- Photorealistic studio display of the Ferrari SF-26 F1 car with an active laser scan sweep.
- **7 Telemetry Hotspots**: Pulsing radar nodes over the active front wing, halo cockpit, V6 turbo hybrid power unit, "macarena" rotating rear wing, venturi floor tunnels, Pirelli tyres, and #44 livery.
- Clicking any node opens an interactive HUD technical spec drawer with keyboard accessibility (`Esc` to close, arrow keys to navigate).

### 5. Career in Numbers & Stacking World Titles
- Count-up statistics showcasing 399 starts, 106 wins, 105 poles, 209 podiums, 5,277.5 points, and 7 World Championships.
- Stacking scroll card sequence detailing each of his 7 World Championship campaigns (2008 McLaren, 2014–2020 Mercedes).

### 6. Helmets Archive, Records Wall & Teammates Grid
- **Helmets Showcase**: Real photographic archive of his Ferrari helmets (Silver Glitter Edition, Fluo Yellow Senna Tribute, and Podium Celebration).
- **Historic Records Wall**: First driver to 100 wins and 100 poles, oldest polesitter since 1994, 9 British GP victories at Silverstone, and 8 Hungarian GP wins.
- **All 8 Teammates**: Complete grid from Fernando Alonso (2007) to Charles Leclerc (2025–present).

### 7. Interactive Race Mode Easter Egg
- Double-press the `4` key on desktop (or tap the floating `#44` indicator) to trigger a starting-lights sequence, track vibration reaction, and celebratory victory confetti.

---

## 🛠 Tech Stack & Architecture

| Technology | Purpose |
| :--- | :--- |
| **Vite** | Lightning-fast static SPA bundler and dev server |
| **React 19** | Component architecture and state management |
| **TypeScript (Strict)** | End-to-end type safety for all career and season data |
| **Tailwind CSS** | Design token architecture with custom colors (`rosso`, `darkCarbon`, `ferrariYellow`) |
| **GSAP 3 + ScrollTrigger** | Pinning, parallax layers, text reveals, and sequence timelines |
| **Lenis** | Smooth wheel scrolling on desktop with native momentum retained on touch |
| **Framer Motion** | Component-level spring animations, popover drawers, and presence transitions |
| **Lucide React** | Clean, accessible iconography |
| **Canvas Confetti** | Celebratory particles for race mode |
| **Netlify Edge** | High-performance static SPA hosting with zero server setup |

### Mobile Scroll Optimization Rules
To ensure 60fps scrolling on mobile devices:
1. `Lenis` is driven directly by GSAP's ticker with `syncTouch: false`—ensuring touch devices use native iOS/Android hardware momentum without event interception.
2. `ScrollTrigger.config({ ignoreMobileResize: true })` prevents aggressive recalculations when address bars collapse.
3. Complex pinning is isolated to desktop via `gsap.matchMedia()`, falling back to clean vertical flows on phones.
4. CSS layout containment (`contain: layout paint`) is applied to major page sections.

---

## 📂 Project Directory Structure

```
lewis-hamilton-portfolio/
├── public/
│   ├── assets/
│   │   ├── car/             # High-resolution SF-26 car renders
│   │   ├── gallery/         # 12 curated career photographs (WebP)
│   │   ├── helmets/         # Real helmet photography (Silver, Yellow, Celebration)
│   │   └── hero/            # Dual-layer aligned portraits (Civilian & Helmet)
│   ├── favicon.svg          # Custom racing helmet vector favicon
│   ├── robots.txt           # SEO crawler rules
│   └── sitemap.xml          # Search engine sitemap
├── src/
│   ├── components/
│   │   ├── car/             # InteractiveCar, Telemetry Hotspots, HUD Drawer
│   │   ├── hero/            # Dual-layer RevealPortrait, NextRaceCard, HeroBackdrop
│   │   ├── layout/          # Pill Navbar, MobileMenu, Footer, SectionWrapper
│   │   ├── loader/          # 5-Light FIA Gantry Sequence
│   │   ├── sections/        # Numbers, Story, Teams, Titles, Season2026, Teammates, Gallery, FAQ
│   │   └── ui/              # Buttons, Cards, CustomCursor, ScrollProgressBar
│   ├── data/                # Strongly typed career, season, and team data files
│   ├── hooks/               # useRaceCountdown, useLenis, useGsapContext, usePointerReveal
│   ├── lib/                 # schedule.ts (calendar engine), animation.ts (GSAP eases)
│   ├── styles/              # globals.css, tokens.css
│   └── types/               # TypeScript interfaces
├── netlify.toml             # Netlify SPA redirect rules & caching headers
└── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 20+
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/dinil2/lewis-hamilton-portfolio.git

# Navigate into the project
cd lewis-hamilton-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
# Compile TypeScript and build static bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🔄 Updating Data After Races

All statistics are decoupled from the UI inside `src/data/`:
* `src/data/season2026.ts`: Update driver points, constructor standings, and podium finishes.
* `src/data/career.ts`: Update career start count, wins, poles, or points.
* `src/lib/schedule.ts`: Add or modify future race dates and starting times.

---

## ⚖️ Legal & Fan Disclaimer

This is an **independent, non-commercial fan project** created for educational and portfolio demonstration purposes. It is **not affiliated with, endorsed by, or sponsored by** Sir Lewis Hamilton, Scuderia Ferrari HP, Formula 1, or the FIA. All trademarks, logos, and brand names belong to their respective owners.

---

## 👨‍💻 Developer & Author

**Dinil Bhashana**  
Software Engineering Student — Sri Lanka  
- **LinkedIn**: [https://www.linkedin.com/in/dinil-bhashana](https://www.linkedin.com/in/dinil-bhashana)  
- **GitHub**: [@dinil2](https://github.com/dinil2)  
- **Portfolio**: [https://lewis-hamilton-44.netlify.app](https://lewis-hamilton-44.netlify.app)
