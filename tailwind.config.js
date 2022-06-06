module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "outer-qr": "url('/public/bg1.png')",
        "inner-qr": "url('/public/bg2.png')",
      },
      colors: {
        qrBlue: {
          light: "#75acd3",
          DEFAULT: "#3982b5",
          dark: "#184869",
        },
      },
    },
  },
  plugins: [],
};
