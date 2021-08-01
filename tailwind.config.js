
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      custom: ["Space Grotesk", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
