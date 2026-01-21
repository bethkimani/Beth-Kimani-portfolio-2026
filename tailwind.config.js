
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#06b6d4', // Cyan 500
          dark: '#0891b2',    // Cyan 600
          light: '#22d3ee',   // Cyan 400
        },
        accent: {
          DEFAULT: '#f97316', // Orange 500
          hover: '#ea580c',   // Orange 600
        },
        slate: {
          850: '#1e293b',     // Custom dark slate
          900: '#0f172a',     // Deep slate
          950: '#020617',     // Darkest slate
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
