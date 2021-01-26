/**
 * @see [Plugin documentation](https://github.com/selaux/eslint-plugin-filenames)
 */
module.exports = {
  plugins: ['filenames'],

  rules: {
    'filenames/match-regex': ['error', /^(\.?[a-z-]+)+$/, true],
    'filenames/match-exported': ['error', 'kebab', /\.([a-z-]+\.?)+$/],
  },

  overrides: [
    {
      files: ['**/layouts/**/*.vue'],
      rules: {
        'filenames/match-exported': ['error', 'kebab'],
      },
    },
    {
      files: ['**/pages/**/*.vue'],
      rules: {
        'filenames/match-exported': ['error', 'kebab', /^_/],
      },
    },
    {
      files: ['**/pages/index.vue'],
      rules: {
        'filenames/match-exported': 'off',
      },
    },
  ],
};
