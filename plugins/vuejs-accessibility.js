/**
 * @see [eslint-plugin-vuejs-accessibility](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility)
 */
module.exports = {
  plugins: ['vuejs-accessibility'],

  extends: ['plugin:vuejs-accessibility/recommended'],

  rules: {
    'vuejs-accessibility/label-has-for': [
      'warn',
      {
        allowChildren: true,
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
};
