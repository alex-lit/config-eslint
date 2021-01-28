/**
 * @see [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
 * @see [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
 */
module.exports = {
  extends: ['prettier', 'prettier/@typescript-eslint', 'prettier/vue'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': 'error',
  },
};
