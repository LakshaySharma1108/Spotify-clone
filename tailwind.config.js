// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        dark: "#121212",
        light_grey: "#1F1F1F"
      },
      fontFamily: {
        spotify: [
          "SpotifyMixUI",
          "CircularSp",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
