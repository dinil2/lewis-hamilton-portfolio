import React, { useEffect, useRef, useState } from 'react';
import { RaceCarSvg } from './RaceCarSvg';
import { SmokeSystem } from './SmokeSystem';
import { gsap } from '@/lib/animation';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const curtainRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const carWrapperRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);

  const [counterValue, setCounterValue] = useState(0);
  const [isDriving, setIsDriving] = useState(false);

  useEffect(() => {
    // Check if reduced motion is requested
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Preload hero assets during the loading animation
    const preloadHero = () => {
      const img1 = new Image();
      img1.src = '/assets/hero/hamilton-base.webp';
      const img2 = new Image();
      img2.src = '/assets/hero/hamilton-helmet.webp';
    };
    preloadHero();

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      if (prefersReducedMotion) {
        // Fast simplified fade
        masterTl
          .to('.loader-counter-obj', {
            val: 100,
            duration: 0.9,
            ease: 'power2.inOut',
            onUpdate: function () {
              setCounterValue(Math.round(this.targets()[0].val));
            },
          })
          .to(containerRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
      } else {
        // Full cinematic 4-second experience per Instruction 5
        const counterObj = { val: 0 };

        // 0 to 0.6s: Name reveals with masked text reveal, helmet drops in
        masterTl
          .from('.loader-helmet-icon', {
            y: -30,
            opacity: 0,
            duration: 0.5,
            ease: 'back.out(1.7)',
          })
          .from(
            '.loader-text-mask',
            {
              y: 40,
              opacity: 0,
              stagger: 0.1,
              duration: 0.5,
              ease: 'power3.out',
            },
            '-=0.3'
          )
          .from(
            trackRef.current,
            {
              scaleX: 0,
              opacity: 0,
              duration: 0.4,
              ease: 'power2.out',
            },
            '-=0.2'
          );

        // 0.6s to 3.4s (2.8s duration): Car drives across track, counter climbs 0 to 100%
        masterTl.add(() => setIsDriving(true), 0.6);

        masterTl.to(
          carWrapperRef.current,
          {
            x: () => {
              const trackWidth = trackRef.current ? trackRef.current.offsetWidth : window.innerWidth * 0.8;
              return trackWidth + 120;
            },
            duration: 2.8,
            ease: 'power1.inOut',
          },
          0.6
        );

        masterTl.to(
          counterObj,
          {
            val: 100,
            duration: 2.8,
            ease: 'power1.inOut',
            onUpdate: function () {
              setCounterValue(Math.round(counterObj.val));
            },
          },
          0.6
        );

        // 3.4s to 4.0s (0.6s duration): Curtain splits with clip-path reveal
        masterTl.add(() => setIsDriving(false), 3.4);

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-raceDark text-cream-100 overflow-hidden"
    >
      {/* Clip-path curtain wrapper */}
      <div
        ref={curtainRef}
        className="absolute inset-0 w-full h-full bg-raceDark flex flex-col items-center justify-center p-6 [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]"
      >
        {/* Subtle background circuit contour */}
        <div className="absolute inset-0 bg-circuit-contour-bg opacity-10 pointer-events-none" />

        {/* Center Content Lockup */}
        <div className="relative z-10 flex flex-col items-center max-w-lg w-full">
          {/* Racing Helmet SVG Icon above name */}
          <div className="loader-helmet-icon mb-4">
            <svg
              className="w-12 h-12 text-rosso"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
              <path
                d="M12 28C12 19 18 12 28 12C36 12 40 18 40 25C37 25 34 27 32 30H18C15 30 12 33 12 36V28Z"
                fill="#E10600"
              />
              <path d="M22 23H38C39 23 40 24 40 26V27H22V23Z" fill="#FFF200" />
              <text x="25" y="38" fill="#FFF200" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
                44
              </text>
            </svg>
          </div>

          {/* Wordmark with masked text reveal */}
          <div className="overflow-hidden flex flex-col items-center text-center mb-6">
            <span className="loader-text-mask block font-serifTitle italic text-lg sm:text-xl text-cream-200 tracking-widest uppercase">
              Scuderia Ferrari
            </span>
            <h1 className="loader-text-mask font-displayGrotesk font-black text-3xl sm:text-5xl text-cream-100 tracking-tight mt-1">
              LEWIS HAMILTON
            </h1>
          </div>

          {/* Race Track & Animated Car Progress Line */}
          <div className="relative w-full max-w-md h-24 flex items-center justify-center">
            {/* The Track Line */}
            <div
              ref={trackRef}
              className="relative w-full h-[2px] bg-raceDark-border overflow-visible"
            >
              {/* Completed track distance highlighted in Rosso */}
              <div
                className="absolute top-0 left-0 h-full bg-rosso"
                style={{ width: `${counterValue}%` }}
              />

              {/* Driving Race Car and Smoke Container */}
              <div
                ref={carWrapperRef}
                className="absolute -top-7 -left-14 will-change-transform"
                style={{ transform: 'translateX(0px)' }}
              >
                <SmokeSystem active={isDriving} carProgress={counterValue / 100} />
                <RaceCarSvg />
              </div>
            </div>
          </div>

          {/* 0-100% Progress Counter & Telemetry Status */}
          <div className="flex items-center justify-between w-full max-w-md mt-4 px-2 font-mono text-xs text-text-muted">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rosso animate-pulse" />
              <span>WARMING TYRES · SF-26</span>
            </span>
            <span
              ref={counterRef}
              className="text-base font-bold font-mono text-cream-100 tabular-nums"
            >
              {counterValue.toString().padStart(3, '0')}%
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
