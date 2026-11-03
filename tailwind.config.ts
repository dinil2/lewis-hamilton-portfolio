import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkCarbon: {
          DEFAULT: '#080809',
          surface: '#111113',
          card: '#161619',
          border: 'rgba(255, 255, 255, 0.08)',
          subtle: '#222226',
        },
        rosso: {
          DEFAULT: '#E10600',
          dark: '#B00500',
          light: '#FF2A24',
          glow: 'rgba(225, 6, 0, 0.4)',
        },
        ferrariYellow: {
          DEFAULT: '#FFE500',
          dark: '#E6CF00',
        },
        raceDark: {
          DEFAULT: '#080809',
          surface: '#111113',
          card: '#161619',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        display: ['"Outfit"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        displayGrotesk: ['"Outfit"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        telemetry: ['"Chakra Petch"', '"JetBrains Mono"', 'monospace'],
        serifTitle: ['"Outfit"', 'sans-serif'], // Replaced Italiana with modern bold Outfit
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        pill: '9999px',
        card: '16px',
      },
      letterSpacing: {
        widestHeader: '0.2em',
        compressed: '-0.03em',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
        'scanline': 'scanline 4s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
