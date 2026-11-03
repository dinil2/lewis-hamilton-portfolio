import React from 'react';

export const HeroBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {/* Circuit Topographic Contour SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40 dark:opacity-20 text-text-primary/10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 200 C 300 100, 500 450, 900 250 C 1200 100, 1400 400, 1600 300"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
          strokeDasharray="4 8"
        />
        <path
          d="M-100 350 C 350 200, 600 600, 1000 400 C 1300 250, 1450 600, 1600 450"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-100 500 C 400 300, 700 750, 1100 550 C 1350 400, 1500 750, 1600 600"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-100 650 C 450 450, 800 850, 1200 700 C 1400 550, 1550 850, 1600 750"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 6"
        />
      </svg>

      {/* Giant Parallax "44" in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[32vw] md:text-[28vw] font-displayGrotesk font-black text-text-primary/[0.035] dark:text-cream-100/[0.03] leading-none select-none">
        44
      </div>

      {/* Radial soft ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rosso/[0.04] dark:bg-rosso/[0.07] rounded-full blur-3xl" />
    </div>
  );
};

