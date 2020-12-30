module.exports = {
  extends: [
    require.resolve("./configs/nuxt"),
    require.resolve("./configs/import"),
    require.resolve("./configs/simple-import-sort"),
    require.resolve("./configs/jsdoc"),
    require.resolve("./configs/sonar"),
    require.resolve("./configs/typescript"),
    require.resolve("./configs/vue"),
    require.resolve("./configs/prettier"),
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
