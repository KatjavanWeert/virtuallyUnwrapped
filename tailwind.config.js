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
        qrBlue: "#35a9a5",
      },
    },
  },
  plugins: [],
};
