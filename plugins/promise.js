/**
 * @see [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
 */
module.exports = {
  plugins: ['promise'],

  extends: ['plugin:promise/recommended'],

  rules: {
    'promise/catch-or-return': ['warn', { allowFinally: true }],
    'promise/no-promise-in-callback': 'off',
  },
};
