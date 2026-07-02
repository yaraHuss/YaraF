/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        navy: 'var(--color-navy)',
        navy2: 'var(--color-navy2)',
        electric: 'var(--color-electric)',
        cyan: 'var(--color-cyan)',
        mist: 'var(--color-mist)',
        offwhite: 'var(--color-offwhite)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(34, 211, 238, 0.25)',
        glowSm: '0 0 16px rgba(34, 211, 238, 0.35)',
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(180deg, rgba(34,211,238,0.06), transparent 70%)',
      },
      keyframes: {
        traceline: {
          '0%': { strokeDashoffset: '240' },
          '100%': { strokeDashoffset: '0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        traceline: 'traceline 3s linear forwards',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
