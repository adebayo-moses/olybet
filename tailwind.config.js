module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {},
  },
  variants: {
    outline: ["focus", "responsive", "hover"],
    borderWidth: ["responsive", "last", "hover", "focus"],
  },
  plugins: [],
};
