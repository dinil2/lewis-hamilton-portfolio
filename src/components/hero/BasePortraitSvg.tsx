import React from 'react';

export const BasePortraitSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 600 750"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full object-cover select-none pointer-events-none ${className}`}
      preserveAspectRatio="xMidYMax slice"
      aria-label="Lewis Hamilton artistic portrait"
    >
      <defs>
        <radialGradient id="faceGrad" cx="50%" cy="40%" r="45%">
          <stop offset="0%" stopColor="#C9946B" />
          <stop offset="60%" stopColor="#A8734C" />
          <stop offset="100%" stopColor="#875331" />
        </radialGradient>
        <radialGradient id="highlightGrad" cx="48%" cy="35%" r="25%">
          <stop offset="0%" stopColor="#E3B38D" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#A8734C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="jacketBase" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1E1E" />
          <stop offset="50%" stopColor="#2D2B29" />
          <stop offset="100%" stopColor="#151414" />
        </linearGradient>
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#111111" />
          <stop offset="100%" stopColor="#252525" />
        </linearGradient>
      </defs>

      {/* Shoulders & Torso */}
      <path
        d="M60 750 C 90 620, 170 540, 240 520 L 360 520 C 430 540, 510 620, 540 750 Z"
        fill="url(#jacketBase)"
      />
      {/* Jacket Collar & details */}
      <path
        d="M240 520 L 300 620 L 360 520"
        stroke="#444"
        strokeWidth="4"
        fill="#111"
      />
      <circle cx="300" cy="540" r="4" fill="#C9946B" /> {/* Chain accent */}
      <path d="M280 545 C 290 565, 310 565, 320 545" stroke="#FFE500" strokeWidth="2.5" fill="none" opacity="0.8"/>

      {/* Neck */}
      <path
        d="M260 410 C 260 470, 265 525, 275 530 L 325 530 C 335 525, 340 470, 340 410 Z"
        fill="#9A653F"
      />

      {/* Jawline & Head Base */}
      <path
        d="M230 310 C 220 380, 240 450, 300 450 C 360 450, 380 380, 370 310 C 365 240, 235 240, 230 310 Z"
        fill="url(#faceGrad)"
      />
      <ellipse cx="300" cy="340" rx="60" ry="75" fill="url(#highlightGrad)" />

      {/* Sculpted Beard & Goatee */}
      <path
        d="M255 385 C 265 435, 335 435, 345 385 C 340 415, 330 442, 300 445 C 270 442, 260 415, 255 385 Z"
        fill="#1A1816"
        opacity="0.9"
      />
      {/* Mustache */}
      <path
        d="M275 382 C 285 377, 315 377, 325 382 C 315 387, 285 387, 275 382 Z"
        fill="#1A1816"
        opacity="0.85"
      />

      {/* Eyes and Eyebrows */}
      {/* Left Eyebrow */}
      <path d="M250 295 Q 270 288 285 293" stroke="#1A1816" strokeWidth="5.5" strokeLinecap="round" />
      {/* Right Eyebrow */}
      <path d="M315 293 Q 330 288 350 295" stroke="#1A1816" strokeWidth="5.5" strokeLinecap="round" />
      {/* Eyes */}
      <ellipse cx="268" cy="310" rx="14" ry="7" fill="#F4EFEA" />
      <circle cx="268" cy="310" r="5.5" fill="#362215" />
      <circle cx="266" cy="308" r="1.8" fill="#FFFFFF" />

      <ellipse cx="332" cy="310" rx="14" ry="7" fill="#F4EFEA" />
      <circle cx="332" cy="310" r="5.5" fill="#362215" />
      <circle cx="330" cy="308" r="1.8" fill="#FFFFFF" />

      {/* Nose */}
      <path
        d="M298 300 L 294 345 Q 300 353 306 345 L 302 300"
        stroke="#804E2D"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="290" cy="348" rx="4" ry="2" fill="#6A3F23" />
      <ellipse cx="310" cy="348" rx="4" ry="2" fill="#6A3F23" />

      {/* Lips */}
      <path
        d="M282 388 Q 300 382 318 388 Q 300 398 282 388 Z"
        fill="#824C37"
      />

      {/* Hair / Braided Crown */}
      <path
        d="M225 290 C 220 200, 270 170, 300 170 C 330 170, 380 200, 375 290 C 390 270, 385 190, 350 155 C 310 130, 290 130, 250 155 C 215 190, 210 270, 225 290 Z"
        fill="url(#hairGrad)"
      />
      {/* Braids cascading back */}
      <path d="M235 220 C 215 280, 210 370, 225 430" stroke="#1A1816" strokeWidth="6" strokeLinecap="round" />
      <path d="M250 190 C 230 260, 220 350, 235 410" stroke="#111" strokeWidth="6" strokeLinecap="round" />
      <path d="M350 190 C 370 260, 380 350, 365 410" stroke="#111" strokeWidth="6" strokeLinecap="round" />
      <path d="M365 220 C 385 280, 390 370, 375 430" stroke="#1A1816" strokeWidth="6" strokeLinecap="round" />

      {/* Diamond Stud Earring */}
      <circle cx="230" cy="358" r="3.5" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />
      <circle cx="370" cy="358" r="3.5" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />
    </svg>
  );
};
