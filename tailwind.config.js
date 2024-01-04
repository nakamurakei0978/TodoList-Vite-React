/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'ping-1': {
          '75%, 100%': {
            transform: 'scale(1.2)',
            opacity: '0.5',
          },
        },
      },
      animation: {
        'spin-5s': 'spin 5s linear infinite',
        'ping-1': 'ping-1 1s cubic-bezier(0, 0, 0.1, 1) infinite'
      }
    },
  },
  plugins: [],
}

