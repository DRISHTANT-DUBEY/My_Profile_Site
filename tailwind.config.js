/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FB923C',
        green: {
          DEFAULT: '#2CC295',
          dark: '#03624C',
          deep: '#021B1A',
        },
        bg: {
          DEFAULT: '#020C0A',
          alt: '#010907',
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", 'sans-serif'],
        mono: ["'DM Mono'", 'monospace'],
      },
    },
  },
  plugins: [],
}
