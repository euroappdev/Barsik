/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Nanum Pen Script", "cursive"],
        montserrat: ["Montserrat"],
      },
      colors: {
        main: {
          200: "#2AECD5",
          250: "#43FFE8",
          300: "#43FAA2",
          400: "#2AEC8F",
          500: "#24D982",
          700: "#1B8B55",
          800: "#0DD1BA",
          900: "#0FCC72",
        },
        dark: {
          200: "#858F9E",
          500: "#414854",
          600: "#2B313C",
          800: "#111419",
          900: "#090B0E",
        },
        blue: "#0EBCD5",
      },
      dropShadow: {
        4: "2px 4px 0 #090B0E",
        10: "5px 10px 0 #090B0E",
      },
      boxShadow: {
        4: "2px 4px 0 #090B0E",
        10: "5px 10px 0 #090B0E",
      },
    },
  },
  plugins: [],
};
