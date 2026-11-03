import React from 'react';

export const RaceCarSvg: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-28 sm:w-36 h-auto drop-shadow-md ${className}`}
    >
      {/* Front Wing & Nosecone */}
      <path
        d="M175 42 L 200 45 L 180 50 L 160 48 Z"
        fill="#E10600"
      />
      {/* Main Body Chassis */}
      <path
        d="M25 40 L 45 28 L 85 24 L 110 32 L 145 35 L 180 44 L 160 48 L 40 48 L 25 44 Z"
        fill="#E10600"
      />
      {/* Halo & Cockpit Opening */}
      <path
        d="M90 24 C 95 16, 115 16, 120 25 L 110 32 L 95 30 Z"
        fill="#111111"
        stroke="#E10600"
        strokeWidth="1.5"
      />
      {/* Driver Yellow Helmet in Cockpit */}
      <circle cx="104" cy="22" r="5" fill="#FFE500" stroke="#111" strokeWidth="1" />
      <path d="M102 21 H 107" stroke="#111" strokeWidth="1.2" />

      {/* Rear Wing Structure */}
      <path
        d="M12 20 L 32 20 L 26 42 L 16 42 Z"
        fill="#111111"
      />
      <rect x="10" y="15" width="26" height="5" rx="1.5" fill="#E10600" />

      {/* Number 44 on Sidepod */}
      <text
        x="80"
        y="42"
        fill="#FFE500"
        fontFamily="'Syne', sans-serif"
        fontWeight="900"
        fontSize="10"
        fontStyle="italic"
      >
        44
      </text>

      {/* Rear Wheel (Left) */}
      <circle cx="45" cy="46" r="13" fill="#111111" stroke="#333" strokeWidth="2" />
      <circle cx="45" cy="46" r="6" fill="#E10600" />
      <circle cx="45" cy="46" r="2" fill="#FFF200" />

      {/* Front Wheel (Right) */}
      <circle cx="155" cy="46" r="12" fill="#111111" stroke="#333" strokeWidth="2" />
      <circle cx="155" cy="46" r="5.5" fill="#E10600" />
      <circle cx="155" cy="46" r="2" fill="#FFF200" />

      {/* Rear Exhaust emission point */}
      <circle cx="16" cy="38" r="2.5" fill="#FFF200" opacity="0.8" />
    </svg>
  );
};

