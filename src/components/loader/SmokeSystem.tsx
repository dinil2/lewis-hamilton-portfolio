import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/animation';

interface SmokeSystemProps {
  active: boolean;
  carProgress: number; // 0 to 1
}

export const SmokeSystem: React.FC<SmokeSystemProps> = ({ active }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const PUFF_COUNT = 14;

  useEffect(() => {
    if (!active || !containerRef.current) return;

    const puffs = containerRef.current.querySelectorAll('.smoke-puff');
    const ctx = gsap.context(() => {
      puffs.forEach((puff, i) => {
        gsap.set(puff, {
          x: 0,
          y: 0,
          scale: 0.2,
          opacity: 0,
        });

        // Loop animation for pooled puffs
        gsap.to(puff, {
          x: () => -40 - Math.random() * 60,
          y: () => -5 - Math.random() * 20,
          scale: () => 1.2 + Math.random() * 0.8,
          opacity: 0.7,
          duration: 0.8,
          repeat: -1,
          repeatDelay: 0.1,
          delay: (i / PUFF_COUNT) * 0.9,
          ease: 'power2.out',
          onRepeat: function () {
            gsap.fromTo(
              puff,
              { opacity: 0.7 },
              { opacity: 0, duration: 0.6, ease: 'power1.out' }
            );
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [active]);

  return (
    <div
      ref={containerRef}
      className="absolute top-1/2 -left-4 -translate-y-1/2 w-24 h-16 pointer-events-none overflow-visible"
      aria-hidden="true"
    >
      {Array.from({ length: PUFF_COUNT }).map((_, i) => (
        <svg
          key={i}
          className="smoke-puff absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 text-rosso/40 dark:text-cream-200/40"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      ))}
    </div>
  );
};
