import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "primary-light": "#D0EC1A",
        "primary-dark": "#07401A",
        "purple-light": "#A595FF",
        "purple-dark": "#151042",
        "yellow-light": "#FFC116",
        "yellow-dark": "#392B02",
        dc: {
          50: "#FAFAF9",
          100: "#F1F0EE",
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A6A09D",
          500: "#78726E",
          600: "#56524E",
          700: "#44403C",
          800: "#282524",
          900: "#1C1917",
          950: "#121110",
        },
      },
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
