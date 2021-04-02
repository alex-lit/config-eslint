/**
 * @see [eslint-plugin-vue-extras](https://www.npmjs.com/package/eslint-plugin-vue-extras)
 */
module.exports = {
  plugins: ['vue-extras'],

  rules: {
    'vue-extras/no-this-in-before-route-enter': 'error',
    'vue-extras/use-attribute-shortcut': 'warn',
  },
};
