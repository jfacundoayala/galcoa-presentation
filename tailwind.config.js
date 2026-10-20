/** @type {import('tailwindcss').Config} */
// Tokens de DESIGN.md (GALCOA+ · Structured Intelligence / Verified Evidence)
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Radio global 0px: formas rectas en todo el producto
    borderRadius: {
      none: '0',
      sm: '0',
      DEFAULT: '0',
      md: '0',
      lg: '0',
      xl: '0',
      '2xl': '0',
      '3xl': '0',
      full: '0',
    },
    extend: {
      colors: {
        brand: {
          navy: '#1E3A5F',
          accent: '#7DB4F5',
        },
        ink: '#0B1220',
        surface: {
          DEFAULT: '#111B2E',
          deep: '#0A101C',
        },
        line: '#26344D',
        text: {
          DEFAULT: '#F1F5F9',
          muted: '#AAB6C8',
        },
        paper: '#F1F5F9',
        danger: '#F87171',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1360px',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
