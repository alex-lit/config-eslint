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
    /* base */
    require.resolve('./plugins/nuxt'),

    /* plugins */
    require.resolve('./plugins/decorator-position'),
    require.resolve('./plugins/filenames'),
    require.resolve('./plugins/import'),
    require.resolve('./plugins/jsdoc'),
    require.resolve('./plugins/no-loops'),
    require.resolve('./plugins/no-secrets'),
    require.resolve('./plugins/promise'),
    require.resolve('./plugins/simple-import-sort'),
    require.resolve('./plugins/sonar'),
    require.resolve('./plugins/sql'),
    require.resolve('./plugins/testing-library'),
    require.resolve('./plugins/typescript'),
    require.resolve('./plugins/unicorn'),
    require.resolve('./plugins/vue'),
    require.resolve('./plugins/vuejs-accessibility'),

    /* prettier */
    require.resolve('./plugins/prettier'),

    /**
     * Optional plugins
     */
    // require.resolve('./plugins/optional/vuetify'),
  ],

  rules: {
    'lines-around-comment': [
      'warn',
      {
        beforeBlockComment: true,
        afterBlockComment: false,

        beforeLineComment: false,
        afterLineComment: false,

        allowBlockStart: true,
        allowBlockEnd: true,

        allowClassStart: true,
        allowClassEnd: true,

        allowObjectStart: true,
        allowObjectEnd: true,

        allowArrayStart: true,
        allowArrayEnd: true,
      },
    ],
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
