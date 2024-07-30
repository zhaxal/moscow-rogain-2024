/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["Gotham", "sans-serif"],
        mossport: ["'Mossport'", "sans-serif"],
        gothamProBold: ["'Gotham Pro Bold'", "sans-serif"],
        gothamProMedium: ["'Gotham Pro Medium'", "sans-serif"],
        gothamProLight: ["'Gotham Pro Light'", "sans-serif"],
        gothamProRegular: ["'Gotham Pro Regular'", "sans-serif"],
        cover: ["'Cover'", "sans-serif"],
      },
      colors: {
        customGreen: "#6DAD3A",
        customRed: "#E93734",
        mossport: "#EB3333",
        accordionGreen: "#3FBA52",
        customPurple: "#734294"
      },
      lineHeight: {
        mossport: 0.85,
      },
    },
  },
  plugins: [],
};
