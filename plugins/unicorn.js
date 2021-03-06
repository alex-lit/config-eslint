/**
 * @see [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
 */
module.exports = {
  extends: ['plugin:unicorn/recommended'],

  plugins: ['unicorn'],

  rules: {
    'unicorn/no-array-for-each': 'off',

    'unicorn/prevent-abbreviations': [
      'warn',
      {
        whitelist: {
          ProcessEnv: true,
        },
      },
    ],
  },
};
