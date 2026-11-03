import React, { useState, useRef, useEffect } from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Zap, Radio, Activity } from 'lucide-react';

interface RealCarHotspot {
  id: string;
  name: string;
  tag: string;
  x: number; // percentage
  y: number; // percentage
  shortDesc: string;
  fullDesc: string;
  telemetry: {
    label: string;
    value: string;
  };
}

const realCarHotspots: RealCarHotspot[] = [
  {
    id: 'front-wing',
    name: 'Active Front Wing Aerodynamics',
    tag: 'Aero Diagnostics',
    x: 68,
    y: 62,
    shortDesc: 'Dynamic low-drag / high-downforce active flap telemetry.',
    fullDesc:
      'Under the 2026 technical regulations, the front wing features dynamic flap control. Actuators switch elements automatically into low-drag mode on straights and high-downforce mode under braking to maximize cornering grip.',
    telemetry: { label: 'FLAP ANGLE', value: 'ACTIVE DRS DUAL-MODE' },
  },
  {
    id: 'halo-cockpit',
    name: 'Titanium Halo & Cockpit Telemetry',
    tag: 'Driver Safety',
    x: 43,
    y: 33,
    shortDesc: 'Grade 5 titanium structure with driver biometric monitoring.',
    fullDesc:
      'Engineered to withstand 120 kN of structural impact load, enclosing Hamilton’s custom-moulded carbon seat. Features biometric glove telemetry tracking heart rate and oxygen saturation in real-time.',
    telemetry: { label: 'LOAD RATING', value: '120 kN GRADE 5 Ti' },
  },
  {
    id: 'power-unit',
    name: 'Ferrari 1.6L Turbo Hybrid V6',
    tag: 'Powertrain',
    x: 35,
    y: 28,
    shortDesc: '350kW MGU-K electric output & 100% advanced sustainable biofuel.',
    fullDesc:
      'Maranello’s 2026 engine architecture features an exact 50/50 balance between internal combustion and electrical power, running exclusively on certified zero-net-carbon sustainable fuels.',
    telemetry: { label: 'MGU-K OUTPUT', value: '350 kW ELECTRIC' },
  },
  {
    id: 'sidepods',
    name: 'Venturi Underfloor & Cooling Inlets',
    tag: 'Ground Effect',
    x: 27,
    y: 48,
    shortDesc: 'Tightly shrink-wrapped sidepod undercuts feeding the underfloor Venturis.',
    fullDesc:
      'Radical aerodynamic undercuts direct high-velocity airflow directly toward the rear diffuser tunnels, generating stable ground-effect downforce across high-speed bends without porpoising.',
    telemetry: { label: 'UNDERFLOOR', value: 'TUNNEL VENTURI 2026' },
  },
  {
    id: 'rear-wing',
    name: 'Rotating "Macarena" Rear Wing',
    tag: 'Active Aerodynamics',
    x: 10,
    y: 36,
    shortDesc: 'Ferrari’s proprietary rotating rear plane mechanism debuted in Shanghai.',
    fullDesc:
      'Debuted by Scuderia Ferrari at the Chinese GP, this groundbreaking mechanism rotates the rear wing planes dynamically on straights, virtually eliminating turbulent drag and unlocking devastating top speeds.',
    telemetry: { label: 'DRS ROTATION', value: 'ACTIVE MULTI-PLANE' },
  },
  {
    id: 'wheels-tyres',
    name: '18" Pirelli P Zero Racing Compounds',
    tag: 'Chassis & Tyre Wear',
    x: 48,
    y: 56,
    shortDesc: 'Low-profile Pirelli tyres mounted on magnesium wheels with aero covers.',
    fullDesc:
      'Bespoke Pirelli 18-inch compounds engineered for high thermal resilience, paired with Ferrari pushrod suspension designed to maintain a consistent aerodynamic ride height under heavy braking.',
    telemetry: { label: 'COMPOUND', value: 'PIRELLI 18" SLICK' },
  },
  {
    id: 'livery-44',
    name: 'Scuderia Ferrari #44 Livery',
    tag: 'Driver Identity',
    x: 20,
    y: 35,
    shortDesc: 'Rosso Corsa scarlet accented with Hamilton’s signature yellow #44.',
    fullDesc:
      'Sir Lewis Hamilton has driven with the iconic #44 since his karting debut in 1993. On the Ferrari SF-26, the high-visibility yellow number sits proudly over Maranello’s deep Rosso Corsa lacquer.',
    telemetry: { label: 'RACE NUMBER', value: '#44 SIR LEWIS' },
  },
];

export const InteractiveCar: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<RealCarHotspot | null>(null);
  const [isScannerActive, setIsScannerActive] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mouse tilt parallax on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -4;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeHotspot) return;
      if (e.key === 'Escape') setActiveHotspot(null);
      if (e.key === 'ArrowRight') {
        const idx = realCarHotspots.findIndex((h) => h.id === activeHotspot.id);
        const next = (idx + 1) % realCarHotspots.length;
        setActiveHotspot(realCarHotspots[next]);
      }
      if (e.key === 'ArrowLeft') {
        const idx = realCarHotspots.findIndex((h) => h.id === activeHotspot.id);
        const prev = (idx - 1 + realCarHotspots.length) % realCarHotspots.length;
        setActiveHotspot(realCarHotspots[prev]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeHotspot]);

  return (
    <SectionWrapper
      id="car"
      badge="Engineering Blueprint"
      subtitle="The 2026 Scuderia Ferrari Challenger"
      title="The Ferrari SF-26 Machine"
      description="Engineered for Formula 1’s new active-aerodynamics era. Featuring sustainable biofuels, heightened electric battery output, and Maranello’s revolutionary rotating rear-wing architecture."
    >
      {/* HUD Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-xs font-telemetry">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsScannerActive(!isScannerActive)}
            className={`px-3.5 py-1.5 rounded-full border flex items-center gap-2 transition-all ${
              isScannerActive
                ? 'bg-rosso text-white border-rosso shadow-lg shadow-rosso/20'
                : 'bg-[#121214] text-zinc-400 border-white/10 hover:text-white'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>{isScannerActive ? 'Aero Scanner: ON' : 'Aero Scanner: OFF'}</span>
          </button>
          <span className="text-zinc-500 hidden sm:inline-block">
            Click any telemetry node to inspect vehicle systems
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-rosso">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>LIVE TELEMETRY</span>
          </span>
          <span>7 ACTIVE NODES</span>
        </div>
      </div>

      {/* Main Interactive Stage with REAL Ferrari Car Photo */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full rounded-2xl bg-[#0C0C0E] border border-white/10 p-4 sm:p-8 md:p-10 overflow-hidden shadow-2xl transition-transform duration-300"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        {/* Carbon grid backdrop */}
        <div className="absolute inset-0 carbon-grid-bg opacity-30 pointer-events-none" />

        {/* Photorealistic Ferrari F1 Car Image */}
        <div className="relative w-full aspect-[16/9] flex items-center justify-center overflow-hidden rounded-xl">
          <img
            src="/assets/car/ferrari-sf26.webp"
            alt="Ferrari SF-26 Formula 1 Car"
            className="w-full h-full object-cover object-center filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
          />

          {/* Optional Aero Scanner Laser Sweep */}
          {isScannerActive && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-rosso to-transparent opacity-70 animate-scanline shadow-[0_0_15px_#E10600]" />
            </div>
          )}

          {/* Telemetry Hotspot Nodes */}
          {realCarHotspots.map((hotspot) => {
            const isSelected = activeHotspot?.id === hotspot.id;
            return (
              <button
                key={hotspot.id}
                onClick={() => setActiveHotspot(hotspot)}
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full group focus:outline-none focus:ring-2 focus:ring-rosso transition-transform ${
                  isSelected ? 'scale-125 z-30' : 'hover:scale-125 z-20'
                }`}
                aria-label={`Inspect ${hotspot.name}`}
              >
                {/* Radar pulse rings */}
                <span className="relative flex h-6 w-6 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rosso opacity-75" />
                  <span
                    className={`relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-white ${
                      isSelected ? 'bg-ferrariYellow' : 'bg-rosso shadow-[0_0_10px_#E10600]'
                    }`}
                  />
                </span>

                {/* Desktop hover label */}
                <span className="hidden md:group-hover:flex absolute left-1/2 -translate-x-1/2 top-full mt-2 flex-col items-center whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#111114]/95 border border-white/10 text-white font-mono text-[10px] tracking-wider shadow-2xl z-30 pointer-events-none">
                  <span className="text-rosso font-bold uppercase">{hotspot.tag}</span>
                  <span>{hotspot.name}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Hotspot Telemetry HUD Drawer */}
      <AnimatePresence>
        {activeHotspot && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mt-6 p-6 sm:p-8 rounded-2xl bg-[#121215] border border-rosso/40 shadow-2xl relative"
          >
            <button
              onClick={() => setActiveHotspot(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close telemetry view"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs font-telemetry text-rosso uppercase mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>{activeHotspot.tag}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400 font-mono">{activeHotspot.telemetry.label}: {activeHotspot.telemetry.value}</span>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
              {activeHotspot.name}
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl mb-6 font-sans">
              {activeHotspot.fullDesc}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-zinc-500">
              <span>Use Left / Right arrow keys to cycle telemetry · Esc to close</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    const idx = realCarHotspots.findIndex((h) => h.id === activeHotspot.id);
                    const prev = (idx - 1 + realCarHotspots.length) % realCarHotspots.length;
                    setActiveHotspot(realCarHotspots[prev]);
                  }}
                  className="p-1 rounded hover:bg-white/10 text-white"
                  aria-label="Previous component"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const idx = realCarHotspots.findIndex((h) => h.id === activeHotspot.id);
                    const next = (idx + 1) % realCarHotspots.length;
                    setActiveHotspot(realCarHotspots[next]);
                  }}
                  className="p-1 rounded hover:bg-white/10 text-white"
                  aria-label="Next component"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};
