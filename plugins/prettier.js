/**
 * @see [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
 * @see [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
 */
module.exports = {
  plugins: ['prettier'],

  extends: ['prettier', 'prettier/@typescript-eslint', 'prettier/vue'],

  rules: {
    'prettier/prettier': 'error',
  },
};
