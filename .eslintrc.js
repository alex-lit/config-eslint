module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
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
    /**
     * base
     *
     * @see [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
     */
    'airbnb-base',

    /* plugins */
    ...[
      './plugins/decorator-position',
      './plugins/filenames',
      './plugins/import',
      './plugins/jsdoc',
      './plugins/jsx-a11y',
      './plugins/no-loops',
      './plugins/no-secrets',
      './plugins/nuxt',
      './plugins/promise',
      './plugins/simple-import-sort',
      './plugins/sonar',
      './plugins/sql',
      './plugins/testing-library',
      './plugins/typescript',
      './plugins/unicorn',
      './plugins/vue',
      './plugins/vuejs-accessibility',

      /* prettier */
      './plugins/prettier',

      /* optional */
      // './plugins/jest',
      // './plugins/jest-formatting',
      // './plugins/optional/react',
      // './plugins/optional/react-hooks',
      // './plugins/optional/vuetify',
    ].map((config) => require.resolve(config)),
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
    'no-shadow': 'off', // delegated to typescript-eslint plugin
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off', // delegated to typescript-eslint plugin
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
    'sort-imports': 'off', // delegated to simple-import-sort plugin
  },

  overrides: [
    {
      files: ['.*.js', '.*.ts', '*.config.js', '*.config.ts'],
      rules: {
        'global-require': 'off',
      },
    },
  ],
};
