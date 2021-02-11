/**
 * @see [eslint-plugin-eslint-comments](hhttps://github.com/mysticatea/eslint-plugin-eslint-comments)
 */
module.exports = {
  plugins: ['eslint-comments'],

  extends: ['plugin:eslint-comments/recommended'],

  rules: {
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  },
};
