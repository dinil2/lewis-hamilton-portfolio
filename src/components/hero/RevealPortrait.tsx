import React from 'react';
import { usePointerReveal } from '@/hooks/usePointerReveal';
import { BasePortraitSvg } from './BasePortraitSvg';
import { HelmetPortraitSvg } from './HelmetPortraitSvg';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
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
      className="relative w-full max-w-[460px] md:max-w-[500px] lg:max-w-[540px] aspect-[4/5] mx-auto cursor-crosshair select-none touch-pan-y"
      style={{
        touchAction: 'pan-y', // Instruction 7: never block vertical page scroll on touch
      }}
    >
      {/* SVG Liquid Edge Filter for Desktop */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="liquid-distortion">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Layer 1: Base Portrait (Civilian / Portrait) */}
      <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-cream-100 dark:bg-raceDark-card">
        <ImageWithFallback
          src="/assets/hero/hamilton-base.webp"
          alt="Sir Lewis Hamilton"
          className="w-full h-full object-cover object-bottom"
          fallbackSvg={<BasePortraitSvg />}
        />
      </div>

      {/* Layer 2: Reveal Portrait (Ferrari Helmet & Race Suit) - Masked by radial CSS variables */}
      <div
        className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden pointer-events-none hero-reveal-mask md:[filter:url(#liquid-distortion)]"
        aria-hidden="true"
      >
        <ImageWithFallback
          src="/assets/hero/hamilton-helmet.webp"
          alt="Sir Lewis Hamilton in Ferrari helmet"
          className="w-full h-full object-cover object-bottom"
          fallbackSvg={<HelmetPortraitSvg />}
        />
      </div>

      {/* Touch / Hover Discovery Hint */}
      {!hasInteracted && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-raceDark/80 dark:bg-cream-100/90 text-white dark:text-raceDark backdrop-blur-md text-[11px] font-mono tracking-wider flex items-center gap-2 shadow-lg animate-pulse-subtle pointer-events-none transition-opacity duration-700">
          <Sparkles className="w-3.5 h-3.5 text-rosso" />
          <span>HOVER / TOUCH TO REVEAL #44</span>
        </div>
      )}
    </div>
  );
};
