/**
 * @see [eslint-plugin-vue-extras](https://github.com/przemyslawjanpietrzak/eslint-plugin-vue-extras)
 */
module.exports = {
  plugins: ['vue-extras'],

  rules: {
    'vue-extras/no-this-in-before-route-enter': 'error',
    'vue-extras/use-attribute-shortcut': 'off',
  },
};
