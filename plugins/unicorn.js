/**
 * @see [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
 */
module.exports = {
  plugins: ['unicorn'],

  extends: ['plugin:unicorn/recommended'],

  rules: {
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
