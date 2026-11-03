import React from 'react';

interface FerrariSf26SvgProps {
  isExploded: boolean;
  className?: string;
}

export const FerrariSf26Svg: React.FC<FerrariSf26SvgProps> = ({ isExploded, className = '' }) => {
  return (
    <svg
      viewBox="0 0 1000 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto select-none transition-all duration-700 ease-out ${className}`}
    >
      <defs>
        {/* Rosso Corsa Body Gradient */}
        <linearGradient id="carRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1E16" />
          <stop offset="40%" stopColor="#E10600" />
          <stop offset="100%" stopColor="#9B0300" />
        </linearGradient>

        {/* Carbon Fiber Underfloor Gradient */}
        <linearGradient id="carbon" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#222222" />
          <stop offset="100%" stopColor="#0B0B0B" />
        </linearGradient>

        {/* Fluo Yellow Accent Gradient */}
        <linearGradient id="yellowAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFF200" />
          <stop offset="100%" stopColor="#FFE000" />
        </linearGradient>

        {/* Tyre Rubber */}
        <radialGradient id="tyreRubber" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="#181818" />
          <stop offset="100%" stopColor="#0A0A0A" />
        </radialGradient>
      </defs>

      {/* Ground Shadow */}
      <ellipse cx="500" cy="385" rx="420" ry="18" fill="#000000" opacity="0.4" />

      {/* GROUP 1: FRONT WING & NOSECONE ASSEMBLY */}
      <g
        className="transition-transform duration-700 ease-out"
        style={{
          transform: isExploded ? 'translate(-60px, 20px)' : 'none',
        }}
      >
        {/* Nosecone */}
        <path
          d="M85 240 L 220 230 L 260 215 L 230 245 L 85 248 Z"
          fill="url(#carRed)"
          stroke="#111"
          strokeWidth="1.5"
        />
        {/* Active Front Wing Mainplane */}
        <path
          d="M20 248 L 130 242 L 140 262 L 20 264 Z"
          fill="url(#carbon)"
        />
        {/* Active Front Flaps */}
        <path
          d="M25 240 L 120 235 L 125 244 L 25 247 Z"
          fill="url(#carRed)"
        />
        <path
          d="M30 233 L 115 228 L 118 236 L 30 239 Z"
          fill="url(#yellowAccent)"
        />
        {/* Endplate */}
        <path
          d="M18 220 L 45 220 L 42 272 L 15 272 Z"
          fill="url(#carRed)"
          stroke="#111"
          strokeWidth="1.5"
        />
      </g>

      {/* GROUP 2: CHASSIS & COCKPIT & HALO */}
      <g
        className="transition-transform duration-700 ease-out"
        style={{
          transform: isExploded ? 'translate(0px, -45px)' : 'none',
        }}
      >
        {/* Monocoque Body */}
        <path
          d="M220 230 C 320 210, 420 180, 500 175 L 640 180 C 720 195, 800 230, 850 250 L 850 290 L 220 290 Z"
          fill="url(#carRed)"
        />
        {/* Cockpit Opening */}
        <path
          d="M440 178 C 460 145, 530 145, 550 178 Z"
          fill="#0E0E0E"
        />
        {/* Titanium Halo */}
        <path
          d="M430 175 C 460 135, 540 135, 570 175 L 555 180 C 530 148, 470 148, 445 180 Z"
          fill="#1F1F1F"
          stroke="#E10600"
          strokeWidth="1.5"
        />
        <line x1="495" y1="140" x2="495" y2="185" stroke="#1F1F1F" strokeWidth="4" />

        {/* Lewis Fluorescent Yellow Helmet in Cockpit */}
        <circle cx="510" cy="162" r="14" fill="#FFF200" stroke="#111" strokeWidth="1.5" />
        <path d="M504 160 H 522" stroke="#111" strokeWidth="3" strokeLinecap="round" />
        <text x="510" y="165" fill="#E10600" fontSize="7" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
          44
        </text>

        {/* Engine Airbox Intake */}
        <path
          d="M555 140 C 570 130, 600 130, 615 145 L 610 180 L 555 180 Z"
          fill="url(#carRed)"
        />
        <ellipse cx="578" cy="148" rx="8" ry="10" fill="#0A0A0A" />

        {/* Yellow 44 on Sidepod */}
        <g transform="translate(370, 215)">
          <text
            x="0"
            y="26"
            fill="#FFF200"
            fontFamily="'Syne', sans-serif"
            fontWeight="900"
            fontSize="32"
            fontStyle="italic"
            letterSpacing="-1px"
          >
            44
          </text>
        </g>
      </g>

      {/* GROUP 3: UNDERFLOOR & VENTURI TUNNELS */}
      <g
        className="transition-transform duration-700 ease-out"
        style={{
          transform: isExploded ? 'translate(0px, 45px)' : 'none',
        }}
      >
        <path
          d="M200 290 L 840 290 L 860 325 L 180 325 Z"
          fill="url(#carbon)"
        />
        {/* Floor Edge Strakes */}
        <line x1="300" y1="315" x2="420" y2="315" stroke="#FFF200" strokeWidth="2.5" />
        <line x1="460" y1="315" x2="600" y2="315" stroke="#FFF200" strokeWidth="2.5" />
        {/* Rear Diffuser upward sweep */}
        <path d="M840 290 L 890 260 L 895 320 L 860 325 Z" fill="#151515" />
      </g>

      {/* GROUP 4: ROTATING "MACARENA" REAR WING ASSEMBLY */}
      <g
        className="transition-transform duration-700 ease-out"
        style={{
          transform: isExploded ? 'translate(65px, -35px)' : 'none',
        }}
      >
        {/* Rear Wing Support Pylons */}
        <path d="M840 210 L 860 120 L 875 120 L 855 210 Z" fill="#1F1F1F" />
        {/* Main Rear Wing Plane */}
        <rect x="830" y="115" width="100" height="15" rx="3" fill="url(#carRed)" />
        {/* Active Rotating DRS Flap (nicknamed 'macarena') */}
        <rect
          x="840"
          y="95"
          width="85"
          height="12"
          rx="2"
          fill="url(#yellowAccent)"
          stroke="#111"
          strokeWidth="1"
        />
        {/* Rear Endplates */}
        <path
          d="M825 85 L 945 85 L 935 220 L 835 220 Z"
          fill="url(#carRed)"
          opacity="0.9"
        />
        <text
          x="885"
          y="155"
          fill="#FFF200"
          fontFamily="'Syne', sans-serif"
          fontWeight="900"
          fontSize="18"
          textAnchor="middle"
        >
          44
        </text>
      </g>

      {/* GROUP 5: 18-INCH WHEELS AND TYRES (FRONT & REAR) */}
      <g
        className="transition-transform duration-700 ease-out"
        style={{
          transform: isExploded ? 'translate(-40px, 40px)' : 'none',
        }}
      >
        {/* Front Wheel (Left) */}
        <g transform="translate(230, 290)">
          <circle cx="0" cy="0" r="68" fill="url(#tyreRubber)" stroke="#333" strokeWidth="4" />
          <circle cx="0" cy="0" r="44" fill="#0E0E0E" stroke="#555" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="44" fill="none" stroke="#E10600" strokeWidth="2.5" strokeDasharray="14 10" />
          <circle cx="0" cy="0" r="18" fill="#E10600" />
          <circle cx="0" cy="0" r="6" fill="#FFF200" />
        </g>
      </g>

      <g
        className="transition-transform duration-700 ease-out"
        style={{
          transform: isExploded ? 'translate(40px, 40px)' : 'none',
        }}
      >
        {/* Rear Wheel (Right) */}
        <g transform="translate(770, 290)">
          <circle cx="0" cy="0" r="72" fill="url(#tyreRubber)" stroke="#333" strokeWidth="4" />
          <circle cx="0" cy="0" r="46" fill="#0E0E0E" stroke="#555" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="46" fill="none" stroke="#E10600" strokeWidth="2.5" strokeDasharray="14 10" />
          <circle cx="0" cy="0" r="20" fill="#E10600" />
          <circle cx="0" cy="0" r="7" fill="#FFF200" />
        </g>
      </g>
    </svg>
  );
};

