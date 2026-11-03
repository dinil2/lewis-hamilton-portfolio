import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFBF8',
          100: '#F6F4EF',
          200: '#EBE7DD',
          300: '#DFD8C9',
          400: '#CEC3AD',
        },
        rosso: {
          DEFAULT: '#E10600',
          dark: '#B00500',
          light: '#FF2A24',
          glow: 'rgba(225, 6, 0, 0.4)',
        },
        ferrariYellow: {
          DEFAULT: '#FFF200',
          dark: '#E6D900',
        },
        raceDark: {
          DEFAULT: '#0E0E0E',
          surface: '#171717',
          card: '#1F1F1F',
          border: '#2E2E2E',
        },
      },
      fontFamily: {
        serifTitle: ['"Italiana"', '"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        displayGrotesk: ['"Cabinet Grotesk"', '"Syne"', '"Barlow Condensed"', '"Impact"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        pill: '9999px',
        card: '20px',
      },
      letterSpacing: {
        widestHeader: '0.15em',
        compressed: '-0.04em',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
