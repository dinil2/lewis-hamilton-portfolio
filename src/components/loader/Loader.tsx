import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/animation';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const curtainRef = useRef<HTMLDivElement | null>(null);
  const [rpmValue, setRpmValue] = useState(0);
  const [lightsCount, setLightsCount] = useState(0); // 0 to 5

  useEffect(() => {
    // Check if reduced motion is requested
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Preload hero assets
    const preloadHero = () => {
      const img1 = new Image();
      img1.src = '/assets/hero/hamilton-base.webp';
      const img2 = new Image();
      img2.src = '/assets/hero/hamilton-helmet.webp';
      const img3 = new Image();
      img3.src = '/assets/car/ferrari-sf26.webp';
    };
    preloadHero();

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      if (prefersReducedMotion) {
        masterTl.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      } else {
        const counterObj = { rpm: 0 };

        // 0 to 0.5s: Entrance of telemetry HUD
        masterTl.from('.loader-fade-in', {
          y: 20,
          opacity: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
        });

        // 0.5s to 3.0s: Telemetry revs up to redline, 5 start lights illuminate
        masterTl.to(
          counterObj,
          {
            rpm: 100,
            duration: 2.6,
            ease: 'power1.inOut',
            onUpdate: function () {
              const current = Math.round(counterObj.rpm);
              setRpmValue(current);
              // Light up 1 to 5 lights as progress reaches 20%, 40%, 60%, 80%, 100%
              const currentLight = Math.min(5, Math.floor(current / 20));
              setLightsCount(currentLight);
            },
          },
          0.5
        );

        // 3.2s: Lights OUT!
        masterTl.add(() => {
          setLightsCount(0); // Lights out!
        }, 3.3);

        // 3.4s to 4.0s: Curtain wipe reveal
        masterTl.to(
          curtainRef.current,
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            duration: 0.6,
            ease: 'power4.inOut',
          },
          3.4
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <aside
      ref={containerRef}
      aria-label="Loading Screen"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#080809] text-white overflow-hidden select-none"
    >
      {/* Clip-path curtain wrapper */}
      <div
        ref={curtainRef}
        className="absolute inset-0 w-full h-full bg-[#080809] flex flex-col items-center justify-between p-8 sm:p-12 [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] carbon-grid-bg"
      >
        {/* Top Telemetry Header */}
        <div className="w-full max-w-4xl flex items-center justify-between border-b border-white/10 pb-4 font-telemetry text-xs tracking-wider text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-rosso animate-ping" />
            <span className="font-bold text-white tracking-widest uppercase">
              SCUDERIA FERRARI HP
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-zinc-500 font-mono">CHASSIS: SF-26</span>
            <span className="text-rosso font-bold">#44 HAMILTON</span>
          </div>
        </div>

        {/* Center: Monolithic Brand Lockup & FIA Start Lights */}
        <div className="flex flex-col items-center max-w-2xl w-full my-auto text-center">
          {/* 5 FIA Start Lights Gantry */}
          <div className="loader-fade-in flex items-center gap-3 bg-[#111114] px-6 py-4 rounded-2xl border border-white/10 shadow-2xl mb-8">
            {[1, 2, 3, 4, 5].map((idx) => {
              const isLit = lightsCount >= idx;
              return (
                <div key={idx} className="flex flex-col gap-2">
                  <div
                    className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full border transition-all duration-150 ${
                      isLit
                        ? 'bg-rosso border-rosso shadow-[0_0_16px_#E10600]'
                        : 'bg-[#180808] border-white/10'
                    }`}
                  />
                  <div
                    className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full border transition-all duration-150 ${
                      isLit
                        ? 'bg-rosso border-rosso shadow-[0_0_16px_#E10600]'
                        : 'bg-[#180808] border-white/10'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Subtitle */}
          <span className="loader-fade-in block font-telemetry text-xs sm:text-sm uppercase tracking-widest text-rosso font-bold mb-2">
            FORMULA 1 WORLD CHAMPIONSHIP
          </span>

          {/* Clean Modern Typography */}
          <h1 className="loader-fade-in font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase leading-none mb-6">
            LEWIS HAMILTON
          </h1>

          {/* Telemetry Progress RPM Bar */}
          <div className="loader-fade-in w-full max-w-md">
            <div className="flex items-center justify-between font-telemetry text-xs text-zinc-400 mb-2">
              <span className="flex items-center gap-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-rosso" />
                SYSTEM INITIALIZATION
              </span>
              <span className="font-bold text-white font-mono tabular-nums">
                {rpmValue}%
              </span>
            </div>

            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-rosso to-ferrariYellow transition-all duration-75"
                style={{ width: `${rpmValue}%` }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Telemetry Status Grid */}
        <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 font-mono text-[11px] text-zinc-400">
          <div>
            <span className="block text-zinc-600 text-[10px]">POWER UNIT</span>
            <span className="text-zinc-200 font-semibold">1.6L TURBO HYBRID</span>
          </div>
          <div>
            <span className="block text-zinc-600 text-[10px]">AERO SYSTEM</span>
            <span className="text-zinc-200 font-semibold">ACTIVE DRS MODE</span>
          </div>
          <div>
            <span className="block text-zinc-600 text-[10px]">TYRE COMPOUND</span>
            <span className="text-rosso font-semibold">PIRELLI SOFT</span>
          </div>
          <div className="text-right">
            <span className="block text-zinc-600 text-[10px]">LAUNCH STATUS</span>
            <span className="text-ferrariYellow font-bold">
              {lightsCount === 5 ? 'GRID READY' : 'PREPARING'}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
