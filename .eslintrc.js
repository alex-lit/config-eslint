module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  ignorePatterns: [
    '**/.git/**',
    '**/build/**',
    '**/dist/**',
    '**/docs/**',
    '**/node_modules/**',
    '**/sw.js',
  ],

  extends: [
    require.resolve('./configs/nuxt.js'),
    require.resolve('./configs/import.js'),
    require.resolve('./configs/simple-import-sort.js'),
    require.resolve('./configs/jsdoc.js'),
    require.resolve('./configs/sonar.js'),
    require.resolve('./configs/typescript.js'),
    require.resolve('./configs/vue.js'),
    require.resolve('./configs/prettier.js'),
  ],

  rules: {
    'no-console': 'off',
    'no-use-before-define': 'off',
  },
};
