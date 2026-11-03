import React, { useState, useRef, useEffect } from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { FerrariSf26Svg } from './FerrariSf26Svg';
import { carHotspots } from '@/data/car';
import { CarHotspot } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Wrench, Zap } from 'lucide-react';

export const InteractiveCar: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<CarHotspot | null>(null);
  const [isExploded, setIsExploded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Desktop mouse tilt parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8; // Max 4 deg tilt
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Keyboard navigation for active hotspot
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeHotspot) return;

      if (e.key === 'Escape') {
        setActiveHotspot(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = carHotspots.findIndex((h) => h.id === activeHotspot.id);
        const nextIndex = (currentIndex + 1) % carHotspots.length;
        setActiveHotspot(carHotspots[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = carHotspots.findIndex((h) => h.id === activeHotspot.id);
        const prevIndex = (currentIndex - 1 + carHotspots.length) % carHotspots.length;
        setActiveHotspot(carHotspots[prevIndex]);
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
      {/* Controls Bar: Exploded View Toggle & Hotspot Counter */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExploded(!isExploded)}
            className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-2 border ${
              isExploded
                ? 'bg-rosso text-white border-rosso shadow-lg shadow-rosso/20'
                : 'glass-panel text-text-primary border-surface-border hover:border-rosso/50'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>{isExploded ? 'Reassemble Chassis' : 'Explode Components'}</span>
          </button>

          <span className="text-xs font-mono text-text-muted hidden sm:inline-block">
            {isExploded ? 'Exploded technical view active' : 'Tap any hotspot to inspect'}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
          <span className="w-2 h-2 rounded-full bg-rosso animate-ping" />
          <span>7 Active Hotspots</span>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full rounded-card glass-panel border border-surface-border p-4 sm:p-8 md:p-12 overflow-hidden transition-transform duration-300"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-circuit-contour-bg opacity-15 pointer-events-none" />

        {/* F1 Car SVG with Exploded Mode Support */}
        <FerrariSf26Svg isExploded={isExploded} />

        {/* Interactive Hotspot Pins */}
        <div className="absolute inset-0 pointer-events-none">
          {carHotspots.map((hotspot) => {
            const posX = isExploded ? hotspot.x + (hotspot.explodeX / 10) : hotspot.x;
            const posY = isExploded ? hotspot.y + (hotspot.explodeY / 10) : hotspot.y;
            const isSelected = activeHotspot?.id === hotspot.id;

            return (
              <button
                key={hotspot.id}
                onClick={() => setActiveHotspot(hotspot)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveHotspot(hotspot);
                  }
                }}
                tabIndex={0}
                aria-label={`Inspect ${hotspot.name}`}
                style={{
                  left: `${posX}%`,
                  top: `${posY}%`,
                }}
                className={`pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full group focus:outline-none focus:ring-2 focus:ring-rosso transition-transform ${
                  isSelected ? 'scale-125 z-30' : 'hover:scale-125 z-20'
                }`}
              >
                {/* Pulsing ring */}
                <span className="relative flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rosso opacity-75" />
                  <span
                    className={`relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 border-2 border-white dark:border-raceDark ${
                      isSelected ? 'bg-ferrariYellow' : 'bg-rosso'
                    }`}
                  />
                </span>

                {/* Desktop hover label */}
                <span className="hidden md:group-hover:block absolute left-1/2 -translate-x-1/2 top-full mt-1.5 whitespace-nowrap px-2.5 py-1 rounded bg-raceDark text-white text-[10px] font-mono tracking-wider shadow-lg z-30 pointer-events-none">
                  {hotspot.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hotspot Drawer / Info Modal */}
      <AnimatePresence>
        {activeHotspot && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mt-6 p-6 sm:p-8 rounded-card glass-panel border border-rosso/40 shadow-xl relative"
          >
            <button
              onClick={() => setActiveHotspot(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-cream-200 dark:hover:bg-raceDark text-text-muted hover:text-text-primary transition-colors"
              aria-label="Close hotspot information"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-rosso uppercase mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>{activeHotspot.tag}</span>
            </div>

            <h3 className="font-displayGrotesk font-black text-2xl sm:text-3xl text-text-primary mb-2">
              {activeHotspot.name}
            </h3>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl mb-6">
              {activeHotspot.fullDesc}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-surface-border text-xs font-mono text-text-muted">
              <span>Use Left / Right arrow keys to cycle hotspots · Esc to close</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    const currentIndex = carHotspots.findIndex((h) => h.id === activeHotspot.id);
                    const prevIndex = (currentIndex - 1 + carHotspots.length) % carHotspots.length;
                    setActiveHotspot(carHotspots[prevIndex]);
                  }}
                  className="p-1 rounded hover:bg-cream-200 dark:hover:bg-raceDark text-text-primary"
                  aria-label="Previous component"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const currentIndex = carHotspots.findIndex((h) => h.id === activeHotspot.id);
                    const nextIndex = (currentIndex + 1) % carHotspots.length;
                    setActiveHotspot(carHotspots[nextIndex]);
                  }}
                  className="p-1 rounded hover:bg-cream-200 dark:hover:bg-raceDark text-text-primary"
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
