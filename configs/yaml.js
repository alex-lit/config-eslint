/**
 * Конфиг линтера `.yaml`
 *
 * [docs](https://ota-meshi.github.io/eslint-plugin-yml/)
 */
module.exports = {
  extends: ['plugin:yml/standard'],

  rules: {
    'yml/quotes': ['error', { prefer: 'single' }],
  },
};
