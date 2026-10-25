/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#121212',
        elevated: '#181818',
        spotify: '#1DB954',
        cream: {
          DEFAULT: '#FBF6EE',
          card: '#FFFDF9',
          border: '#EFE5D5',
        },
        maroon: {
          DEFAULT: '#8E2A2A',
          dark: '#6E1D1D',
          light: '#A83B3B',
          50: '#FDF2F4',
          100: '#FCE7EB',
          200: '#F8CFD7',
          300: '#F2A7B5',
          400: '#E7708A',
          500: '#D53D62',
          600: '#B82346',
          700: '#941533',
          800: '#8E2A2A',
          900: '#580C1D',
          950: '#380511',
        },
        deepRed: {
          DEFAULT: '#B8302E',
          hover: '#9E2422',
        },
        gold: {
          DEFAULT: '#C9A24B',
          light: '#E2C784',
          bright: '#FFD700',
          dark: '#9A7B1C',
          muted: '#C5A059',
        },
        blush: {
          DEFAULT: '#E8B4B0',
          light: '#F5DBD8',
        },
        ink: {
          DEFAULT: '#3A2A2A',
          muted: '#6B5858',
          light: '#8F7B7B',
        },
        royalWine: '#4A0404',
        velvetMaroon: '#520614',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        gloock: ['"Gloock"', 'serif'],
        rozha: ['"Rozha One"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', '"Gloock"', 'Georgia', 'serif'],
        display: ['"Gloock"', '"Rozha One"', '"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        hindi: ['"Rozha One"', 'serif'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(212,175,55,0.6)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 18px rgba(212,175,55,0)' },
        },
        sealShimmer: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glossSweep: {
          '0%': { transform: 'translateX(-100%) rotate(25deg)' },
          '100%': { transform: 'translateX(200%) rotate(25deg)' },
        },
        ribbonWiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-2deg)' },
          '75%': { transform: 'rotate(2deg)' },
        },
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        eqBar: {
          '0%, 100%': { height: '4px' },
          '50%': { height: '16px' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
        sealShimmer: 'sealShimmer 20s linear infinite',
        glossSweep: 'glossSweep 6s ease-in-out infinite',
        ribbonWiggle: 'ribbonWiggle 3s ease-in-out infinite',
        floatUp: 'floatUp 0.6s ease-out both',
        eq1: 'eqBar 0.8s ease-in-out infinite',
        eq2: 'eqBar 0.8s ease-in-out 0.2s infinite',
        eq3: 'eqBar 0.8s ease-in-out 0.4s infinite',
      },
    },
  },
  plugins: [],
}
