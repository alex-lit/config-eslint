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
          '^[0-9a-f]{3,6}$', // HEX colors
          /* prettier-ignore */
          '^\'',
        ],

        skipWords,
      },
    ],
  },
};
