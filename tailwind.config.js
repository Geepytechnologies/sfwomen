/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E91E62",
        brown: "#331725",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      rob: ["Roboto", "sans-serif"],
      danc: ["Dancing Script", "cursive"],
      popp: ["Poppins", "sans-serif"],
      open: ["Open Sans", "sans-serif"],
      lora: ["Lora", "serif"],
    },
  },
  plugins: [],
};
