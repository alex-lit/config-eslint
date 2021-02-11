/**
 * @see [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
 */
module.exports = {
  plugins: ['jest'],

  env: {
    'jest/globals': true,
  },

  extends: ['plugin:jest/all'],
};
