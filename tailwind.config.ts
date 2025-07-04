import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  safelist: [
    // Font classes
    "font-main",

    // Animation classes
    "animate-spin",

    // ALL TAILWIND COLORS - comprehensive safelist for dynamic theming
    // Primary colors: red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    // Neutral colors: slate, gray, zinc, neutral, stone
    // All shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

    // Background colors for ALL colors
    ...[
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "slate",
      "gray",
      "zinc",
      "neutral",
      "stone",
    ].flatMap((color) =>
      [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "950",
      ].map((shade) => `bg-${color}-${shade}`)
    ),

    // Text colors for ALL colors
    ...[
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "slate",
      "gray",
      "zinc",
      "neutral",
      "stone",
    ].flatMap((color) =>
      [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "950",
      ].map((shade) => `text-${color}-${shade}`)
    ),

    // Border colors for ALL colors
    ...[
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "slate",
      "gray",
      "zinc",
      "neutral",
      "stone",
    ].flatMap((color) =>
      [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "950",
      ].map((shade) => `border-${color}-${shade}`)
    ),

    // Hover background colors for ALL colors
    ...[
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
      "slate",
      "gray",
      "zinc",
      "neutral",
      "stone",
    ].flatMap((color) =>
      [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "950",
      ].map((shade) => `hover:bg-${color}-${shade}`)
    ),

    // Gradient utilities
    "bg-gradient-to-br",
    "bg-gradient-to-t",
    "bg-gradient-to-r",
    "bg-gradient-to-l",
    "bg-gradient-to-b",
    "to-transparent",

    // Gradient from/via/to for ALL colors (most common shades)
    ...[
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
    ].flatMap((color) => [
      `from-${color}-400`,
      `via-${color}-500`,
      `to-${color}-600`,
      `from-${color}-500`,
      `via-${color}-600`,
      `to-${color}-700`,
      `from-${color}-800/50`,
      `from-${color}-900/50`,
    ]),
  ],
  theme: {
    container: { center: true },
    extend: {
      fontFamily: {
        main: [
          "helvetica-neue-lt-pro",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        manrope: ["Manrope", "sans-serif"],
        sans: [
          "helvetica-neue-lt-pro",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
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
