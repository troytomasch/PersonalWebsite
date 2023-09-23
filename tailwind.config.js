/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        bounce: "bounce 2s ease-out infinite alternate",
        slide: "slide 1s ease-out",
      },
      keyframes: {
        bounce: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(-100%) translateY(25%)" },
          "50%": { transform: "translateX(100%) translateY(0%)" },
          "75%": { transform: "translateX(-100%) translateY(-25%)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        slide: {
          "0%": { transform: "translateX(-20%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
