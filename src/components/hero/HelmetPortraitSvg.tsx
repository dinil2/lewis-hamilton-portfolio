import React from 'react';

export const HelmetPortraitSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 600 750"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full object-cover select-none pointer-events-none ${className}`}
      preserveAspectRatio="xMidYMax slice"
      aria-label="Lewis Hamilton in Ferrari helmet and race suit"
    >
      <defs>
        {/* Rosso Corsa Suit Gradient */}
        <linearGradient id="ferrariSuit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E10600" />
          <stop offset="50%" stopColor="#C40500" />
          <stop offset="100%" stopColor="#9E0400" />
        </linearGradient>

        {/* Helmet Shell Gradient (Rosso Corsa & Yellow) */}
        <radialGradient id="helmetShell" cx="50%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#FFEA00" />
          <stop offset="35%" stopColor="#FFF200" />
          <stop offset="55%" stopColor="#E10600" />
          <stop offset="100%" stopColor="#9B0300" />
        </radialGradient>

        {/* Visor Mirror/Tint Gradient */}
        <linearGradient id="visorGrad" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#151515" />
          <stop offset="40%" stopColor="#301934" /> {/* Subtle purple sheen from his signature helmet */}
          <stop offset="70%" stopColor="#111111" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>

        {/* Visor Glare */}
        <linearGradient id="visorGlare" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Shoulders & Torso - Scuderia Ferrari Race Suit */}
      <path
        d="M60 750 C 90 620, 170 540, 240 520 L 360 520 C 430 540, 510 620, 540 750 Z"
        fill="url(#ferrariSuit)"
      />

      {/* Suit Racing Lines (Black carbon accents) */}
      <path d="M120 750 L 220 540" stroke="#111" strokeWidth="8" opacity="0.8" />
      <path d="M480 750 L 380 540" stroke="#111" strokeWidth="8" opacity="0.8" />

      {/* Suit Zip / Collar Band */}
      <path d="M250 525 L 300 750 L 350 525" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M260 520 L 300 590 L 340 520" fill="#111111" />
      <rect x="290" y="525" width="20" height="8" rx="2" fill="#E10600" stroke="#FFF" strokeWidth="1" />

      {/* Race Number 44 Badge on Left Chest */}
      <g transform="translate(190, 600)">
        <circle cx="28" cy="28" r="28" fill="#111111" stroke="#FFF200" strokeWidth="2.5" />
        <text
          x="28"
          y="38"
          fill="#FFF200"
          fontFamily="'Syne', sans-serif"
          fontWeight="900"
          fontSize="24"
          textAnchor="middle"
          letterSpacing="-1px"
        >
          44
        </text>
      </g>

      {/* HANS Device / Carbon Neck Support */}
      <path
        d="M230 450 C 220 500, 240 535, 270 535 L 330 535 C 360 535, 380 500, 370 450 Z"
        fill="#181818"
        stroke="#333"
        strokeWidth="3"
      />

      {/* Helmet Base Dome */}
      <path
        d="M190 320 C 185 200, 240 120, 300 120 C 360 120, 415 200, 410 320 C 410 400, 380 465, 300 465 C 220 465, 190 400, 190 320 Z"
        fill="url(#helmetShell)"
        stroke="#111111"
        strokeWidth="4"
      />

      {/* Fluorescent Yellow Crown Stripes */}
      <path
        d="M260 125 C 275 220, 275 250, 265 260 L 335 260 C 325 250, 325 220, 340 125 Z"
        fill="#FFE500"
      />

      {/* 44 Graphic on Helmet Crown */}
      <text
        x="300"
        y="190"
        fill="#111111"
        fontFamily="'Syne', sans-serif"
        fontWeight="900"
        fontSize="34"
        textAnchor="middle"
      >
        44
      </text>

      {/* Aero Chin Spoiler & Jaw */}
      <path
        d="M215 390 C 215 440, 245 460, 300 460 C 355 460, 385 440, 385 390 L 375 355 L 225 355 Z"
        fill="#E10600"
        stroke="#111111"
        strokeWidth="3"
      />
      {/* Front chin air intake mesh */}
      <rect x="270" y="420" width="60" height="18" rx="4" fill="#111111" stroke="#444" strokeWidth="1" />
      <line x1="285" y1="420" x2="285" y2="438" stroke="#333" strokeWidth="2" />
      <line x1="300" y1="420" x2="300" y2="438" stroke="#333" strokeWidth="2" />
      <line x1="315" y1="420" x2="315" y2="438" stroke="#333" strokeWidth="2" />

      {/* Visor Frame & Visor Window */}
      <path
        d="M205 320 C 205 275, 230 260, 300 260 C 370 260, 395 275, 395 320 C 395 365, 370 375, 300 375 C 230 375, 205 365, 205 320 Z"
        fill="#111111"
      />
      {/* Dark Mirrored Visor Tint */}
      <path
        d="M210 320 C 210 280, 235 268, 300 268 C 365 268, 390 280, 390 320 C 390 360, 365 368, 300 368 C 235 368, 210 360, 210 320 Z"
        fill="url(#visorGrad)"
        stroke="#555"
        strokeWidth="1.5"
      />
      {/* Visor Glare Reflection */}
      <path
        d="M225 285 Q 290 275 375 285 Q 360 305 235 305 Z"
        fill="url(#visorGlare)"
      />

      {/* Visor Tear-Off Post Left & Right */}
      <circle cx="218" cy="320" r="5" fill="#FFE500" stroke="#111" strokeWidth="2" />
      <circle cx="382" cy="320" r="5" fill="#FFE500" stroke="#111" strokeWidth="2" />

      {/* Visor Top Sunstrip Band */}
      <path
        d="M210 270 C 235 264, 365 264, 390 270 L 388 288 C 365 282, 235 282, 212 288 Z"
        fill="#E10600"
      />
      <text
        x="300"
        y="282"
        fill="#FFFFFF"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontWeight="800"
        fontSize="9"
        textAnchor="middle"
        letterSpacing="2px"
      >
        HAMILTON
      </text>

      {/* 7 World Championship Stars along Visor Edge */}
      <g fill="#FFE500" transform="translate(235, 370)">
        <polygon points="5,0 6.5,3.5 10,3.5 7,6 8.5,9.5 5,7 1.5,9.5 3,6 0,3.5 3.5,3.5" transform="scale(0.8) translate(0, 0)" />
        <polygon points="5,0 6.5,3.5 10,3.5 7,6 8.5,9.5 5,7 1.5,9.5 3,6 0,3.5 3.5,3.5" transform="scale(0.8) translate(22, 0)" />
        <polygon points="5,0 6.5,3.5 10,3.5 7,6 8.5,9.5 5,7 1.5,9.5 3,6 0,3.5 3.5,3.5" transform="scale(0.8) translate(44, 0)" />
        <polygon points="5,0 6.5,3.5 10,3.5 7,6 8.5,9.5 5,7 1.5,9.5 3,6 0,3.5 3.5,3.5" transform="scale(0.8) translate(66, 0)" />
        <polygon points="5,0 6.5,3.5 10,3.5 7,6 8.5,9.5 5,7 1.5,9.5 3,6 0,3.5 3.5,3.5" transform="scale(0.8) translate(88, 0)" />
        <polygon points="5,0 6.5,3.5 10,3.5 7,6 8.5,9.5 5,7 1.5,9.5 3,6 0,3.5 3.5,3.5" transform="scale(0.8) translate(110, 0)" />
        <polygon points="5,0 6.5,3.5 10,3.5 7,6 8.5,9.5 5,7 1.5,9.5 3,6 0,3.5 3.5,3.5" transform="scale(0.8) translate(132, 0)" />
      </g>
    </svg>
  );
};

