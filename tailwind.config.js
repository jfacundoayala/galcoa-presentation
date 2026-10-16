/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FDFCF7',
          100: '#F6F3EB',
          200: '#EAE4D5',
          300: '#DCD4C0',
          800: '#3A3528',
          900: '#1C1A14',
        },
        forest: {
          500: '#1B4D3E',
          600: '#143C30',
          700: '#0E2C23',
        },
        amber: {
          500: '#D9822B',
          600: '#B86A1D',
        },
        ocean: {
          500: '#1F536B',
          600: '#163E50',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
