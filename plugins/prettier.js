/**
 * @see [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
 */
module.exports = {
  plugins: ['prettier'],

  extends: ['prettier'],

  rules: {
    'prettier/prettier': 'error',

    /** fix for prettier/vue */
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'never',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
};
