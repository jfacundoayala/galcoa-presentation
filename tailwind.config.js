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
          green: '#174235',
          yellow: '#FCD34D',
        },
        ink: '#101411',
        surface: {
          DEFAULT: '#18221C',
          deep: '#0D110F',
        },
        line: '#35443C',
        text: {
          DEFAULT: '#F5F4EC',
          muted: '#B9C6BD',
        },
        paper: '#F5F4EC',
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
