/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBg: '#080B12',
        darkSurface: '#0F172A',
        card: '#111827',
        accent: '#22D3EE',
        accentAlt: '#818CF8',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34, 211, 238, 0.2), 0 14px 40px rgba(15, 23, 42, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

