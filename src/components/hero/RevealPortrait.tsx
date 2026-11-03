import React from 'react';
import { usePointerReveal } from '@/hooks/usePointerReveal';
import { Sparkles } from 'lucide-react';

export const RevealPortrait: React.FC = () => {
  const { containerRef, hasInteracted } = usePointerReveal({
    maxRadius: 180,
    lerpFactor: 0.14,
    autoScan: true,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[440px] md:max-w-[480px] lg:max-w-[500px] aspect-[4/5] mx-auto cursor-crosshair select-none touch-pan-y rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0E0E11]"
      style={{
        touchAction: 'pan-y', // never block vertical page scroll on touch
      }}
    >
      {/* Layer 1: Base Portrait (Real Lewis Hamilton Face in Scuderia Ferrari Suit) */}
      <img
        src="/assets/hero/hamilton-base.webp"
        alt="Sir Lewis Hamilton in Scuderia Ferrari HP Suit"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Layer 2: Reveal Portrait (Lewis Hamilton in Ferrari Helmet) - Radial Masked */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none hero-reveal-mask"
        aria-hidden="true"
      >
        <img
          src="/assets/hero/hamilton-helmet.webp"
          alt="Sir Lewis Hamilton in Ferrari Helmet"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Subtle bottom vignette gradient so text/chips read with high contrast */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080809] to-transparent pointer-events-none" />

      {/* Touch / Hover Discovery Hint */}
      {!hasInteracted && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/80 text-white backdrop-blur-md text-[11px] font-mono tracking-wider flex items-center gap-2 border border-white/10 shadow-xl animate-pulse-subtle pointer-events-none transition-opacity duration-700">
          <Sparkles className="w-3.5 h-3.5 text-rosso" />
          <span>HOVER / TOUCH TO REVEAL HELMET #44</span>
        </div>
      )}
    </div>
  );
};
