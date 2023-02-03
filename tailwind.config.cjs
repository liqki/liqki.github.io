/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0d1117",
        light: "#d4d2d2",
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
      },
      height: {
        footer: "calc(100vh - 40px)",
      },
      minHeight: {
        footer: "calc(100vh - 40px)",
      },
      animation: {
        move: "move 7s infinite ease-in-out",
        "slide-in": "slide-in 0.5s forwards",
        "slide-out": "slide-out 0.5s forwards",
      },
      keyframes: {
        move: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(10px, -20px) scale(1.05)",
          },
          "66%": {
            transform: "translate(-10px, 10px) scale(0.95)",
          },
          "100%": {
            transform: "translate(0, 0) scale(1)",
          },
        },
        "slide-in": {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "slide-out": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
