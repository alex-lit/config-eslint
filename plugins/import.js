/**
 * @see [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
 */
module.exports = {
  plugins: ['import'],

  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],

  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },

  rules: {
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'error',
    'import/order': 'off',
  },

  overrides: [
    {
      files: ['.*.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
