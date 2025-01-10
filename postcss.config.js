/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    require("autoprefixer"), // Adds vendor prefixes automatically
    require("cssnano")({
      // Minifies the CSS
      preset: "default",
    }),
  ],
};
