/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rebeccapurple': '#639',
      },
      backgroundImage: {
        'bg-hero': "url(`src/assets/images/bg.jpeg`)"
      },
      keyframes: {
        wiggle: {
          '0%,100%': { transform: 'translateY(-20px) ' },
          '50%': { transform: 'translateY(20px)' },
        },
        moveText: {
          'to': {
            width: '100%'
          },
        }
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        moveText: ' moveText 1s linear both'
      },
      screens: {
        '-md': { max: '768px' }
      }
    },
  },
  plugins: [require('tailwindcss-text-fill-stroke'),],
}

