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
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: { extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'] },
      alias: {
        map: [
          ['@', './src'],
          ['~', './src'],
          ['~~', './'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
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
