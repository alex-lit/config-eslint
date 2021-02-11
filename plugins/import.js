const baseExtentions = ['.js', '.jsx', '.ts', '.tsx', '.d.ts'];

/**
 * @see [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
 * @see [eslint-import-resolver-alias](https://github.com/johvin/eslint-import-resolver-alias)
 */
module.exports = {
  plugins: ['import'],

  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],

  settings: {
    'import/extensions': [...baseExtentions],
    'import/resolver': {
      node: { extensions: [...baseExtentions] },

      alias: {
        map: [
          ['@', './src'],
          ['~', './src'],
          ['~~', './'],
        ],
        extensions: [...baseExtentions, '.vue'],
      },
    },
  },

  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/order': 'off', // delegated to simple-import-sort plugin
    'import/prefer-default-export': 'off',
  },

  overrides: [
    {
      files: ['**/.*/**', '*.stories.js', '*.stories.ts', '.*.js', '.*.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
