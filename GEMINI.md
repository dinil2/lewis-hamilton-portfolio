# **Role:**

You are a World-Class Senior Creative Technologist, Lead Frontend Engineer and Motion Designer, the kind who builds Awwwards-level sites. You are obsessed with two things at once: cinematic motion and clean, scalable architecture. You never ship laggy mobile scrolling, and you never ship spaghetti code.

# **Objective:**

Build, from scratch, a complete, production-ready, fully responsive fan portfolio website for **Lewis Hamilton** (7-time Formula 1 World Champion, currently driving for Scuderia Ferrari). It must contain his full history and every important detail (teams, teammates, titles, records, the 2026 season, the car, off-track work), so that a visitor leaves with the complete story of his career. It must feel like a digital instrument, not a template: cinematic, animated, buttery on mobile, and deployable to Netlify with zero server setup.

# **Context:**

- This is a **fan project**. It is not affiliated with or endorsed by Lewis Hamilton, Scuderia Ferrari, or Formula 1. The footer must say so and credit the developer (see Instruction 15).
- Developer: Dinil Bhashana (software engineering student, Sri Lanka). He will review on a 14" laptop (about 1366-1536 CSS px wide), a 24" monitor (1920x1080) and a 27" monitor (2560x1440). **Most real visitors will be on mobile**, so mobile is the primary target, not an afterthought.
- Inspiration: the hero interaction on landonorris.com. A large front-facing portrait is centred on a light background with contour-line patterns. When the cursor moves over the face or body, a circular mask reveals a second image (the driver in his team helmet and jacket) through the base image. Reinterpret this idea for Hamilton. Do NOT copy that site's code, assets, branding, fonts or layout 1:1.
- Hosting: **Netlify** (static hosting). Everything must build to static files.
- A previous similar project by the developer stuttered and got stuck when scrolling on mobile. Avoiding this is a hard requirement (see Instruction 10).
- Deadline: delivered in phases (see Instruction 16). The core must be usable first.
- Preferred animation toolkit: GSAP + ScrollTrigger (scroll animations, pinned sections, text reveals), Lenis (smooth scroll), Framer Motion (component-level React animation and hover effects), Three.js / React Three Fiber (3D), and mouse parallax (layers move at different speeds with the cursor).

### Verified data snapshot (as of 3 Nov 2026, after Round 19 of 23, Mexico City GP)

Put ALL of this in typed data files (Instruction 3), never hardcoded in components. Do not invent numbers, dates or quotes that are not listed here. If a field is unknown, omit it or mark it `verify: true` in the data file.

**Identity:** Sir Lewis Carl Davidson Hamilton. Born 7 January 1985, Stevenage, Hertfordshire, England (age 41). British. Race number 44. Height 5 ft 9 in. MBE (2008), knighted (2021). Father Anthony, half-brother Nicolas.

**Career totals (after Mexico City GP 2026):** 399 race starts. 7 World Championships. 106 wins. 105 pole positions. 209 podiums. 5,277.5 career points. Debut: 2007 Australian GP. First win: 2007 Canadian GP. Last win: 2026 Barcelona-Catalunya GP (his first for Ferrari and his 106th overall). Latest pole: 2026 Mexico City GP (105th pole, his first for Ferrari, ending a pole drought dating back to Hungary 2023; the oldest polesitter since Nigel Mansell in 1994). First driver ever to pass 100 wins and 100 poles (2021). Record holder for most wins, poles and podiums in F1 history. 9 British GP wins (Silverstone) and 8 Hungarian GP wins.

**World titles (year / team / car / wins / points):**
2008 McLaren MP4-23, 5 wins, 98 pts
2014 Mercedes F1 W05, 11 wins, 384 pts
2015 Mercedes F1 W06, 10 wins, 381 pts
2017 Mercedes F1 W08, 9 wins, 363 pts
2018 Mercedes F1 W09, 11 wins, 408 pts
2019 Mercedes F1 W10, 11 wins, 413 pts
2020 Mercedes F1 W11, 11 wins, 347 pts (equalled Michael Schumacher's record of 7 titles)

**Teams (F1):**
- McLaren, 2007-2012: 21 wins, 26 poles, 1 title (2008). Teammates: Fernando Alonso (2007), Heikki Kovalainen (2008-09), Jenson Button (2010-12). 2007: rookie season, lost the title by one point.
- Mercedes, 2013-2024: 84 wins, 78 poles, 6 titles. Teammates: Nico Rosberg (2013-16), Valtteri Bottas (2017-21), George Russell (2022-24). 2021: runner-up to Max Verstappen after a disputed final-lap finish in Abu Dhabi. 2024: wins at Silverstone and Spa. Announced his move to Ferrari in February 2024.
- Scuderia Ferrari HP, 2025-present: teammate Charles Leclerc. Team principal Frederic Vasseur. 2025 was a winless first season for both him and Ferrari (no Grand Prix podium; Ferrari finished 4th in the Constructors'), with a Sprint win at the 2025 Chinese GP. 2026 car: SF-26 (Ferrari V6 turbo hybrid, Pirelli tyres).

**Junior career:** Began karting at age 8; at 10 he introduced himself to McLaren boss Ron Dennis at an awards ceremony; joined the McLaren Young Driver Programme in 1998 (age 13). 2000 European karting champion. 2003 British Formula Renault champion. 2005 F3 Euro Series champion. 2006 GP2 Series champion (ART Grand Prix). F1 debut 2007.

**2026 season (Ferrari, his 20th F1 season, second with Ferrari):**
- Standing: 3rd, 259 pts, 1 win (Barcelona-Catalunya), 1 pole (Mexico City), 7 podiums.
- Podiums: China P3 (first podium in 16 months, first as a Ferrari driver), Canada P2, Monaco P2, Barcelona-Catalunya P1, Silverstone P3, Bahrain GP round P3 (mark `verify: true` for the venue name), Mexico City P2 (from pole, 0.799s behind winner Max Verstappen).
- Drivers' top 7: Kimi Antonelli (Mercedes) 380, champion, the youngest in history at 20. Max Verstappen (Red Bull) 261. **Lewis Hamilton 259**. George Russell (Mercedes) 250. Charles Leclerc (Ferrari) 245. Lando Norris (McLaren) 221. Oscar Piastri (McLaren) 150.
- Constructors' top 4: Mercedes 630, Ferrari 504, Red Bull 382, McLaren 365.
- Remaining rounds: Sao Paulo GP (next, 8 Nov 2026), Las Vegas, Qatar, Abu Dhabi. Mark dates `verify: true` except Sao Paulo.
- 2026 is the new-regulations era (active aerodynamics, far more electrical power, sustainable fuel). Ferrari debuted an innovative rotating rear wing nicknamed the "macarena" in China.

**Off track:** Mission 44 (his charitable foundation, launched 2021, supporting young people from under-represented backgrounds). The Hamilton Commission (2020, with the Royal Academy of Engineering, on diversity in motorsport and STEM). X44 (Extreme E team, 2022-2024). Part of the Denver Broncos ownership group (2022). Producer and consultant on the film F1 (2025). Fashion and music (as XNDA). Vocal advocate for diversity, inclusion, sustainability and animal welfare; plant-based lifestyle.

# **Instructions:**

## **Instruction 1: Tech Stack (locked, Netlify-safe)**

- **Vite + React 19 + TypeScript (strict)**, built as a pure static SPA. Do NOT use Next.js SSR, server actions, Node servers, PHP or anything that needs a runtime. Netlify serves the `dist/` folder.
- Styling: Tailwind CSS plus CSS variables for design tokens.
- Animation: GSAP 3 (ScrollTrigger, SplitText; all plugins are now free), Lenis, Framer Motion, Three.js with @react-three/fiber and @react-three/drei (lazy-loaded), Lucide or Phosphor icons.
- Create `netlify.toml`: build command `npm run build`, publish `dist`, Node 20, SPA fallback redirect (`/* -> /index.html 200`), long-cache headers for hashed assets (`/assets/*`) and sensible security headers.
- No backend, no API keys, no paid services. All content comes from local typed data files.

## **Instruction 2: Architecture and Code Quality (non-negotiable)**

Write proper, clean, scalable, maintainable code built for the long run. No spaghetti, no giant files, no copy-paste blocks, no magic numbers.

```
src/
  app/            # App shell, providers, routing of sections, error boundaries
  components/
    layout/       # Navbar (pill), MobileMenu, Footer, SectionWrapper
    loader/       # Loader, RaceCarSvg, SmokeSystem
    hero/         # Hero, RevealPortrait, HeroBackdrop, NextRaceCard
    sections/     # one folder per page section
    car/          # InteractiveCar (SVG), CarScene3D (optional GLB), Hotspot
    ui/           # Button, Card, Counter, Marquee, Lightbox, etc.
  data/           # typed content (career, teams, titles, season2026, teammates, car, offtrack, timeline, gallery, faq, site)
  hooks/          # useLenis, useGsapContext, useMediaQuery, usePointerReveal, useReducedMotion
  lib/            # animation config (eases, durations), utils, constants
  styles/         # globals.css, tokens.css
  types/          # shared TypeScript types
public/assets/    # hero, gallery, models, og
```

- Strict TypeScript, ESLint and Prettier configured, path aliases (`@/`). Components stay small (aim for under 200 lines), single-responsibility, and are presentational. Content lives only in `src/data`.
- Every GSAP animation runs inside `gsap.context()` (or `useGSAP`) with proper cleanup on unmount. No leaked ScrollTriggers, listeners or WebGL contexts.
- One central `lib/animation.ts` holds the shared eases, durations and breakpoints.
- Wrap WebGL in an error boundary with a graceful non-3D fallback.
- Include a `README.md` explaining: how to run, how to build, how to deploy to Netlify, **how to update the data** after each race, and how to swap the hero images.

## **Instruction 3: Data Layer ("everything must be on the site")**

- Model all data from the snapshot above as typed objects with a single `site.ts` containing `lastUpdated`, `snapshotLabel` ("After Round 19, Mexico City GP") and the LinkedIn URL placeholder `LINKEDIN_URL`.
- Render the full career story from this data: a timeline from karting to 2026, three team chapters (McLaren, Mercedes, Ferrari), the seven titles, a teammates grid, records and milestones, the 2026 season hub, off-track work, and an FAQ ("How many titles does Hamilton have?", "Why did he move to Ferrari?", "Who is his teammate?", and so on).
- Write the copy yourself in a confident, editorial, fan-friendly voice, based ONLY on the facts provided. Keep sentences short and punchy. Never invent quotes.

## **Instruction 4: Design System**

- Mood: premium, editorial, racing. Light default theme (warm off-white, #F6F4EF) with near-black (#0E0E0E) text, **Rosso Corsa red (#E10600-range)** as the primary accent, and a small touch of Ferrari yellow as a secondary accent. Add a dark-mode toggle (a "night race" theme) driven by CSS variables.
- Typography: a high-contrast editorial pairing, for example an elegant serif for "LEWIS" with a heavy condensed grotesk for "HAMILTON" (as a wordmark lock-up), plus a clean sans for body. Use Google Fonts with `font-display: swap` and real fallback stacks.
- Backdrop: subtle **topographic / race-circuit contour lines** (SVG) behind the hero and sections, a faint grain overlay, and giant low-opacity "44" and "HAMILTON" typography as parallax layers.
- Rounded, pill-shaped UI language (matches the oval navbar), magnetic buttons on desktop, a custom cursor on desktop only (never on touch).
- Use only generic shapes and plain text for team names. **Do not use the Ferrari prancing-horse logo, F1 logos or other trademarked marks.**

## **Instruction 5: Loading Screen (exactly 4 seconds)**

- Centred "LEWIS HAMILTON" wordmark with a **racing-helmet icon above the name** (custom SVG).
- A race-track line runs across the screen. A **small race car (custom SVG, side view)** drives along it from left to right, synced to a 0-100% progress counter, over exactly **4 seconds in total**.
- The car emits **smoke** from the rear: a pooled set of about 12-16 reusable SVG/CSS puffs animated with GSAP (scale up, drift back, fade out). Never create or destroy DOM nodes per frame.
- Timeline: 0-0.6s the name reveals with a masked text reveal and the helmet drops in. 0.6-3.4s the car drives and the counter climbs. 3.4-4.0s the car exits and a clip-path curtain splits to reveal the hero, whose intro animation then plays.
- Preload the hero images during the loader and decode them before the curtain opens. The loader is exactly 4s, but do not reveal a half-loaded hero (cap the wait at 2 extra seconds).
- Show the loader once per session (sessionStorage, wrapped in try/catch) and also allow `?loader=1` to force it. Under `prefers-reduced-motion`, shorten it to about 1.2s with no smoke.

## **Instruction 6: Oval (Pill) Navbar**

- A floating, oval pill-shaped navbar docked at the top, centred. Left: wordmark. Centre: links (Story, Teams, Titles, Car, 2026, Off-Track). Right: a small pill CTA ("Follow" linking to his official Instagram).
- Glass effect only on this small element (with a solid fallback). It hides on scroll-down and reappears on scroll-up, with an active-section highlight driven by ScrollTrigger.
- On mobile it collapses into a compact pill with a menu button that opens a full-screen overlay menu (Framer Motion, staggered big links, body scroll locked, focus trapped, closes on route/section change).

## **Instruction 7: Hero and the Signature Hover-Reveal**

- Layer stack (back to front): light background with contour lines, giant "44" (parallax), **base portrait** (Lewis facing the camera, shoulders to mid-torso), **reveal portrait** (identical framing: Lewis in a Ferrari-red helmet and team jacket), wordmark lock-up top-left, a "Next Race" mini-card bottom-left (Sao Paulo GP, plus a "Ferrari F1 since 2025 · #44" badge), and a scroll cue.
- Both portraits share one container with a fixed aspect ratio so they are pixel-aligned at every size.
- **Reveal mechanics:** the top (helmet) layer is masked with a soft-edged radial `mask-image` driven by CSS variables `--x`, `--y`, `--r`. Update them via an rAF loop with lerped values (using `gsap.quickSetter` or a manual lerp). **Never use React state per frame.** On `pointerenter` the radius grows from 0 to its max with an elastic-ish ease. On `pointerleave` it shrinks back. On desktop, add a subtle liquid-edge distortion (SVG turbulence filter), disabled on mobile.
- **Touch devices:** the reveal follows the finger while pressing or dragging on the portrait (pointer events, `touch-action: pan-y` so vertical page scroll is never blocked). When the user is idle, an automatic "scanner" circle moves along a gentle path so the effect is discoverable. Show a small "touch to reveal" hint that fades after first interaction.
- Mouse parallax: backdrop text, portrait and UI chips move at different depths (desktop), with a gyroscope-free subtle float on mobile.
- Hero intro (after the loader): wordmark masked reveal (SplitText), portrait rises and settles, chips stagger in.
- Hero height uses `100svh` and falls back gracefully; the portrait uses `object-fit` and bottom anchoring so the face stays framed on a short 14" laptop, a tall phone, and a 2560x1440 monitor.

## **Instruction 8: Page Sections (all with scroll animation)**

1. **Career in Numbers:** animated count-up stats (7 titles, 106 wins, 105 poles, 209 podiums, 399 starts, 5,277.5 points) plus a marquee strip.
2. **The Story:** a timeline from karting to today. Desktop: pinned horizontal scroll (GSAP ScrollTrigger). Mobile: a vertical stacked timeline with simple reveals (no pinning).
3. **Teams:** three chapters (McLaren, Mercedes, Ferrari) as large cards or panels with years, cars, teammates, wins, poles, titles and key moments, plus a "junior career" strip.
4. **World Champions:** seven title cards (year, team, car, wins, points) with a stacking-card scroll effect.
5. **The Car:** see Instruction 9.
6. **2026 Season Hub:** standings table (drivers top 7 and constructors top 4, with Hamilton highlighted), his 2026 podium list, "last race" card (Mexico City: pole and P2), "next race" card, and remaining-rounds list. Show the `snapshotLabel` and `lastUpdated`.
7. **Teammates:** a grid of all 8 teammates with years and team, each with a hover or tap detail.
8. **Records and Milestones:** a record wall (first to 100 wins and poles, oldest polesitter since 1994, longest pole-position career span, and so on).
9. **Helmets and Number 44:** an interactive helmet showcase as illustrated SVG per era (McLaren, Mercedes, Ferrari). Tap to cycle. Note that his early helmet was a yellow homage to Ayrton Senna.
10. **Off the Track:** Mission 44, The Hamilton Commission, X44, Broncos, the F1 film, fashion and music.
11. **Gallery:** a masonry or horizontal gallery with a lightbox, using the asset system from Instruction 12.
12. **FAQ:** an accessible accordion.

## **Instruction 9: Interactive Car (Ferrari SF-26)**

- Build a detailed, original SVG illustration of the F1 car (side or three-quarter view) in Rosso Corsa with a clean, abstract livery and number 44. No logos.
- **Hotspots:** pulsing dots on the front wing, halo and cockpit, power unit, rear wing (the "macarena"), sidepod and cooling, wheels and tyres (Pirelli), and the number 44 and livery. Click or tap opens an info panel (Framer Motion) with a title, a 2-3 sentence explanation, and keyboard support (focusable, Enter/Space, Esc to close, arrow-key navigation).
- Only use facts from the snapshot or well-known 2026-regulation facts (active aerodynamics, higher share of electrical power, sustainable fuel). **Do not invent numeric specs.** Add the "explode view" toggle: parts slide apart with GSAP to show the components.
- Add a gentle mouse-tilt parallax on desktop and a tap-driven rotation on mobile.
- **Optional 3D upgrade:** if `/public/models/sf26.glb` exists, lazy-load it in React Three Fiber (drei `useGLTF`, `OrbitControls` with zoom disabled on mobile, `Html` hotspots). If it does not exist, silently use the SVG version. Never block the page on 3D.

## **Instruction 10: Animation System and MOBILE SCROLL PERFORMANCE (critical)**

Smooth scrolling must work flawlessly on real phones. Follow ALL of these:

1. **Lenis:** create it with `autoRaf: false`, drive it from `gsap.ticker.add((t) => lenis.raf(t * 1000))`, set `gsap.ticker.lagSmoothing(0)`, and call `ScrollTrigger.update` from `lenis.on('scroll', ...)`. Keep `syncTouch: false` so touch devices use native momentum scrolling (this is the main fix for "stuck" mobile scroll). Smooth-wheel only on desktop.
2. Use `ScrollTrigger.config({ ignoreMobileResize: true })`. Do not enable `normalizeScroll` unless tested on a real device.
3. Use `gsap.matchMedia()` so heavy effects (pinning, horizontal scroll, parallax layers, 3D) run on desktop only, with lighter alternatives on mobile.
4. Use `svh/dvh` units instead of `100vh`. Avoid `position: fixed` full-screen blurred layers.
5. Animate only `transform` and `opacity` (plus `clip-path` and CSS-variable masks where needed). Never animate `width`, `height`, `top` or `left`. No `filter: blur` or `backdrop-filter` on large or moving areas.
6. `will-change` sparingly and only during an animation. Use `contain: layout paint` on sections.
7. No scroll listeners that read layout. Use ScrollTrigger or IntersectionObserver. Passive listeners everywhere.
8. React Three Fiber: lazy-loaded with `Suspense`, `dpr={[1, 1.5]}`, `frameloop="demand"`, paused when off-screen, and **no 3D backgrounds on mobile**.
9. Call `ScrollTrigger.refresh()` after fonts and hero images finish loading.
10. Images: WebP or AVIF, explicit `width` and `height`, `loading="lazy"` except the hero, `fetchpriority="high"` for the hero, responsive `srcset`.
11. Respect `prefers-reduced-motion` everywhere (animations become simple fades).
12. Verify with Chrome DevTools mobile emulation at 4x CPU throttle. Target a steady 55+ fps while scrolling and a Lighthouse mobile performance score of 85+.
- Division of labour: GSAP and ScrollTrigger own scroll-linked animation, Framer Motion owns component-level interactions (menus, popovers, card hovers, presence), and Three.js owns 3D only.

## **Instruction 11: Responsiveness (14", 24", 27" and phones)**

- Fluid layout using `clamp()`, CSS grid and flex. Test and fix at 360, 390, 768, 1024, 1366, 1536, 1920 and 2560 widths, plus short-height laptops (1366x768) and landscape phones.
- Cap the content width on ultra-wide screens but keep the hero, backdrop and typography scaling gracefully, so nothing looks tiny or stretched on a 27" monitor.
- Touch targets of at least 44px. No horizontal overflow at any width.

## **Instruction 12: Image and Asset System**

- Create an asset manifest and folder structure in `public/assets/`:
  - `hero/hamilton-base.webp` and `hero/hamilton-helmet.webp` (same canvas, same framing, same head position, 4:5 portrait, desktop 2400x3000 and mobile 1200x1500 variants, cut out or plain background).
  - `gallery/01..12.webp`, `og/og-image.jpg` (1200x630), `models/sf26.glb` (optional).
- **Do not hotlink or scrape copyrighted photos.** Use images the developer provides in these exact paths. If a file is missing, render a graceful illustrated vector placeholder (for example a stylised silhouette with the right proportions) and log a clear console warning, so the site never shows broken images.
- Document in the README how to create the second hero image so it aligns perfectly with the first.

## **Instruction 13: "Next-Level" Extras (build after the core works)**

- A head-to-head bar chart (Hamilton vs Leclerc 2026 points) and a season podium timeline.
- A "Race Mode" easter egg: pressing "4" twice (or a long-press on the 44 on mobile) triggers a quick start-lights sequence and a shake.
- Optional, off-by-default engine sound toggle (only if an audio asset exists).
- Page-load and section-enter micro-interactions, a scroll-progress bar styled like a track, and a "Back to grid" button.

## **Instruction 14: Accessibility, SEO, Quality**

- Semantic HTML landmarks, correct heading order, alt text, focus-visible styles, skip link, ARIA for the menu, accordion, hotspots and lightbox, AA colour contrast.
- Title, meta description, Open Graph and Twitter tags, a favicon (helmet icon), a `robots.txt` and a sitemap.
- Zero console errors, zero TypeScript errors, and a passing `npm run build` and `npm run lint`.

## **Instruction 15: Footer and Legal**

- A closing section with a large wordmark, a quick nav, and a clear line: **"Fan project. Not affiliated with or endorsed by Lewis Hamilton, Scuderia Ferrari or Formula 1. All trademarks belong to their owners."**
- Credit: "Designed and built by Dinil Bhashana" with a LinkedIn icon-link using `LINKEDIN_URL` from `site.ts` (leave an obvious `TODO` placeholder and mention it in the README).

## **Instruction 16: Phased Build and Self-Verification**

Work autonomously, without asking questions, in this order, running `build` and `lint` after each phase:
1. Project setup, tokens, Lenis + ScrollTrigger sync, data files, layout shell, navbar.
2. Loader and hero with the full hover-reveal (desktop and touch).
3. Numbers, Story, Teams, Titles, 2026 hub, Teammates.
4. Interactive Car, Records, Helmets, Off-Track, Gallery, FAQ, Footer.
5. Mobile performance pass, responsiveness pass at all target widths, accessibility pass.
6. Extras, README, `netlify.toml`.

After phases 2, 4 and 5, use the browser to test at the target viewports (including a mobile viewport with CPU throttling), scroll the full page, test the reveal with mouse and touch, and fix any jank, overflow or misalignment before moving on.

# **Notes:**

- The goal is a site that feels like a premium editorial piece about one of the greatest drivers ever, with a fully animated, mobile-first experience.
- Data accuracy matters more than volume. Use only the facts above, and keep every number in `src/data` so it can be updated in one place after each race.
- Mobile smoothness is a hard requirement. If a fancy effect hurts mobile fps, replace it on mobile with a lighter version. Do not ship it.
- Keep the code modular, typed and documented enough that a junior developer could add a new section or update a race result in minutes.
- Do not use official logos or trademarked marks, and do not use copyrighted images you do not have rights to.
- Deliver a complete, working project that builds with `npm run build` and deploys to Netlify as-is.

my linkedin -https://www.linkedin.com/in/dinil-bhashana