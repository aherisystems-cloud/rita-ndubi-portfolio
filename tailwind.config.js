/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          // RN logo orange (#F16232 = 500). Use 700+ for small text on white (contrast).
          50: '#FEF4EE',
          100: '#FDE5D6',
          200: '#FAC7AA',
          300: '#F6A077',
          400: '#F37E4F',
          500: '#F16232',
          600: '#DB4A1C',
          700: '#B53A16',
          800: '#8F3118',
          900: '#742B17',
          950: '#3F130A',
        },
        navy: {
          800: '#0f172a',
          900: '#0a0f1d',
          950: '#060a14',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
