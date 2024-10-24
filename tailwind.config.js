/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.pug", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        violet: "#6C48F0",
        lavender: "#805EFF",
        primary: "#FF7361",
        purple: "#DBD9FF",
        dark: "#0E1B2C",
        blue: "#226CF5",
        grey: "#64647A",
        pink: "#FFDCD8",
        midnight: "#D0D0D0",
        yellow: "#FDAF4D",
        shadow: "#0000001A",
      },
      boxShadow: {
        lg: "0px 8px 25px 0px #0000001A",
        md: "0px 6px 50px 0px #0000001a",
        sm: "-5px 4px 50px 0px #0000001A",
      },
    },
    screens: {
      xl: "1280px",
      lg: "1024px",
      md: "900px",
      sm: "600px",
    },
  },
  plugins: [],
};
