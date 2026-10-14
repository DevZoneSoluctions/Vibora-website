/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vibora: {
          bg:       '#0a0620',   // main dark
          bgSoft:   '#0d0824',   // alternate (lighter)
          bgDeep:   '#080418',   // alternate (darker)
          bgWarm:   '#0b0526',   // alternate (purple-ish)
          cream:    '#f5ede0',
          blue:     '#5b8def',
          purple:   '#a855f7',
          magenta:  '#d946ef',
          pink:     '#ec4899',
          orange:   '#fb923c',
          gold:     '#f5c518',   // NEW — logo se gold/dark yellow
        },
      },
    },
  },
  plugins: [],
};
