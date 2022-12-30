module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "press-start": ["Press Start 2P", "cursive"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", " sans-serif"],
        "dyna-puff":["DynaPuff", "cursive"],
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
