/**
 * @see [eslint-plugin-nuxt](https://github.com/nuxt/eslint-plugin-nuxt)
 */
module.exports = {
  plugins: ['nuxt'],

  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended'],

  rules: {
    'nuxt/require-func-head': 'error',
  },
};
