module.exports = {
  extends: [
    "./configs/nuxt",
    "./configs/import",
    "./configs/simple-import-sort",
    "./configs/jsdoc",
    "./configs/sonar",
    "./configs/typescript",
    "./configs/vue",
    "./configs/prettier",
  ],

  root: true,

  env: {
    browser: true,
    node: true,
  },

  ignorePatterns: [
    "**/.git/**",
    "**/build/**",
    "**/dist/**",
    "**/docs/**",
    "**/node_modules/**",
    "**/sw.js",
  ],
};
