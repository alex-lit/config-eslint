/**
 * @see [eslint-plugin-etc](https://github.com/cartant/eslint-plugin-etc)
 */
module.exports = {
  extends: ['plugin:etc/recommended'],

  plugins: ['etc'],

  rules: {
    'etc/no-misused-generics': 'error',
    'etc/no-t': 'error',
    'etc/prefer-less-than': 'error',
    'etc/underscore-internal': 'error',
  },
};
