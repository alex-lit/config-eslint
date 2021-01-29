/**
 * @see [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
 */
module.exports = {
  plugins: ['import'],

  extends: ['plugin:import/typescript'],

  rules: {
    'import/order': 'off',
  },
};
