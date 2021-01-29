module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    jest: true,
  },

  ignorePatterns: [
    '.*',
    '**/build/**',
    '**/dist/**',
    '**/docs/**',
    '**/node_modules/**',
    '**/storybook-*/**',
    '**/sw.js',
    '!.*.js',
    '!.storybook',
  ],

  extends: [
    require.resolve('./plugins/nuxt.js'),
    require.resolve('./plugins/import.js'),
    require.resolve('./plugins/simple-import-sort.js'),
    require.resolve('./plugins/jsdoc.js'),
    require.resolve('./plugins/sonar.js'),
    require.resolve('./plugins/decorator-position.js'),
    require.resolve('./plugins/typescript.js'),
    require.resolve('./plugins/testing-library.js'),
    require.resolve('./plugins/yaml.js'),
    require.resolve('./plugins/json.js'),
    require.resolve('./plugins/no-loops.js'),
    require.resolve('./plugins/no-secrets.js'),
    require.resolve('./plugins/filenames.js'),
    require.resolve('./plugins/sql.js'),
    require.resolve('./plugins/vue.js'),
    require.resolve('./plugins/prettier.js'),

    /**
     * Optional plugins
     */
    // require.resolve('./plugins/optional/vuetify.js'),
  ],

  rules: {
    'no-console': 'off',
    'no-use-before-define': 'off',
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
    ],
    'require-await': 'off',
    'sort-imports': 'off',
  },
};
