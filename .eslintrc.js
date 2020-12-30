module.exports = {
  extends: [
    "./configs/nuxt.js",
    "./configs/import.js",
    "./configs/simple-import-sort.js",
    "./configs/jsdoc.js",
    "./configs/sonar.js",
    "./configs/typescript.js",
    "./configs/vue.js",
    "./configs/prettier.js",
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
