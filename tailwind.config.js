/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%': { backgroundPosition: '0 0' },
          '50%': { backgroundPosition: '300% 0' },
          '100%': { backgroundPosition: '0 0' }
        }
      },
      animation: {
        move: 'move 10s linear infinite'
      }
    }
  },
  plugins: [require('daisyui')]
};
