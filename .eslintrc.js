/* eslint-disable sonarjs/no-duplicate-string */
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
      './plugins/eslint-comments',
      './plugins/filenames',
      './plugins/import',
      './plugins/jsdoc',
      './plugins/jsx-a11y',
      './plugins/no-loops',
      './plugins/no-secrets',
      './plugins/no-use-extend-native',
      './plugins/nuxt',
      './plugins/promise',
      './plugins/regexp',
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
      // './plugins/optional/jest',
      // './plugins/optional/jest-formatting',
      // './plugins/optional/react',
      // './plugins/optional/react-hooks',
      // './plugins/optional/svelte',
      // './plugins/optional/vuetify',
    ].map((config) => require.resolve(config)),
  ],

  rules: {
    'class-methods-use-this': 'off',
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
    'no-implicit-coercion': 'error',
    'no-return-await': 'off',
    'no-shadow': 'off', // delegated to typescript-eslint plugin
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off', // delegated to typescript-eslint plugin
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'cjs-export' },
      { blankLine: 'always', prev: '*', next: 'cjs-import' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'iife' },
      { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
      { blankLine: 'always', prev: '*', next: 'multiline-const' },
      { blankLine: 'always', prev: '*', next: 'multiline-expression' },
      { blankLine: 'always', prev: '*', next: 'multiline-let' },
      { blankLine: 'always', prev: '*', next: 'multiline-var' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: 'case', next: '*' },
      { blankLine: 'always', prev: 'cjs-export', next: '*' },
      { blankLine: 'always', prev: 'cjs-import', next: '*' },
      { blankLine: 'always', prev: 'class', next: '*' },
      { blankLine: 'always', prev: 'default', next: '*' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'always', prev: 'iife', next: '*' },
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
      { blankLine: 'always', prev: 'multiline-const', next: '*' },
      { blankLine: 'always', prev: 'multiline-expression', next: '*' },
      { blankLine: 'always', prev: 'multiline-let', next: '*' },
      { blankLine: 'always', prev: 'multiline-var', next: '*' },
      { blankLine: 'always', prev: 'singleline-const', next: '*' },
      { blankLine: 'always', prev: 'singleline-let', next: '*' },
      { blankLine: 'always', prev: 'singleline-var', next: '*' },

      { blankLine: 'never', prev: 'cjs-export', next: 'cjs-export' },
      { blankLine: 'never', prev: 'cjs-import', next: 'cjs-import' },
      { blankLine: 'never', prev: 'directive', next: 'directive' },
      {
        blankLine: 'never',
        prev: 'singleline-const',
        next: 'singleline-const',
      },
      { blankLine: 'never', prev: 'singleline-let', next: 'singleline-let' },
      { blankLine: 'never', prev: 'singleline-var', next: 'singleline-var' },
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
