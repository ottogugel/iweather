import colors from './src/styles/colors.ts'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        bluelight: {
          100: "#8FB2F5",
        },
        bluedark: {
          100: "#1E1E29",
        },
        grayt: {
          200: "#BFBFD4",
          300: "#BEBED4",
        },
      },
    },
  },
  plugins: [],
};
