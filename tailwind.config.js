/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        "back-1": "url('src/assets/back-carts/1.png')",
        "back-2": "url('src/assets/back-carts/2.png')",
        "back-3": "url('src/assets/back-carts/3.png')",
        "back-4": "url('src/assets/back-carts/4.png')",
      },
      fontFamily: {
        pixel: ["Pixelify Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
