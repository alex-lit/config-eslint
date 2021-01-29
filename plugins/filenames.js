/**
 * @see [eslint-plugin-filenames](https://github.com/selaux/eslint-plugin-filenames)
 */
module.exports = {
  plugins: ['filenames'],

  rules: {
    'filenames/match-regex': ['error', /^(\.?[a-z0-9-]+)+$/, true],
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
    {
      files: ['**/pages/**/{0,1,2,3,4,5,6,7,8,9}*.vue'],
      rules: {
        'filenames/match-exported': 'off',
      },
    },
  ],
};
