/* eslint-disable no-undef */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
    },
    extend: {
      maxWidth: {
        "8xl": "88rem",
      },
      spacing: {
        112: "28rem",
        128: "32rem",
        180: "45rem",
      },
      zIndex: {
        1: "1",
        20: "20",
        100: "100",
        1000: "1000",
      },
    },
  },
};
