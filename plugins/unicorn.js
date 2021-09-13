/**
 * @see [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
 */
module.exports = {
  extends: ['plugin:unicorn/recommended'],

  plugins: ['unicorn'],

  rules: {
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',

    'unicorn/prevent-abbreviations': [
      'warn',
      {
        allowList: {
          ProcessEnv: true,
          i18n: true,
        },

        checkFilenames: false, // delegate to eslint-plugin-filenames

        replacements: {
          index18n: {
            i18n: true,
          },
        },
      },
    ],
  },
};
