const skipWords = require('../dictionaries');

/**
 * @see [eslint-plugin-spellcheck](https://github.com/aotaduy/eslint-plugin-spellcheck)
 */
module.exports = {
  plugins: ['spellcheck'],

  rules: {
    'spellcheck/spell-checker': [
      'warn',
      {
        ignoreRequire: true,
        minLength: 4,

        skipIfMatch: ['^@.*', '^plugin:.*'],

        skipWordIfMatch: [
          // HEX colors
          '^[0-9a-f]{3,6}$',
          // eslint-disable-next-line prettier/prettier
          "^'",
        ],

        skipWords,
      },
    ],
  },
};
