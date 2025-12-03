/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Government-style colors: White, Blue, Saffron
        'gov-blue': '#003F87',
        'gov-saffron': '#FF9933',
        'gov-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

