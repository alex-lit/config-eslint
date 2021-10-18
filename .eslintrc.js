// @ts-check
/* eslint-disable sonarjs/no-duplicate-string */

const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  env: {
    browser: true,
    node: true,
  },

  extends: [
    /**
     * @see [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
     */
    'airbnb-base',

    /* plugins */
    ...[
      './plugins/array-func',
      './plugins/compat',
      // './plugins/decorator-position', // wait for eslint@8 support
      './plugins/eslint-comments',
      './plugins/ext',
      './plugins/filenames',
      './plugins/import',
      './plugins/jsdoc',
      './plugins/jsx-a11y',
      './plugins/lit',
      './plugins/lit-a11y',
      './plugins/more',
      './plugins/no-constructor-bind',
      './plugins/no-loops',
      './plugins/no-secrets',
      './plugins/no-use-extend-native',
      './plugins/nuxt',
      './plugins/promise',
      './plugins/regexp',
      './plugins/security',
      './plugins/simple-import-sort',
      './plugins/sonar',
      './plugins/sort-destructure-keys',
      './plugins/sort-keys-fix',
      './plugins/spellcheck',
      './plugins/sql',
      './plugins/typescript',
      './plugins/typescript-sort-keys',
      './plugins/unicorn',
      './plugins/unused-imports',
      './plugins/vue',
      './plugins/vuejs-accessibility',
      './plugins/wc',
      './plugins/write-good-comments',
      // './plugins/no-inferred-method-name', // buggy

      /* prettier */
      './plugins/prettier',

      /* optional */
      // './plugins/optional/jest',
      // './plugins/optional/jest-formatting',
      // './plugins/optional/node',
      // './plugins/optional/react',
      // './plugins/optional/react-hooks',
      // './plugins/optional/svelte',
      // './plugins/optional/vuetify',
    ].map((config) => require.resolve(config)),
  ],

  ignorePatterns: [
    '.*',
    '**/build/**',
    '**/dist/**',
    '**/docs/**',
    '**/node_modules/**',
    '**/storybook-*/**',
    '**/sw.js',
    '!.*.js',
    '!.node',
    '!.storybook',
  ],

  overrides: [
    {
      files: ['.*.js', '.*.ts', '*.config.js', '*.config.ts'],

      rules: {
        'global-require': 'off',
      },
    },
    // wait for eslint@8 support
    // {
    //   extends: [require.resolve('./plugins/testing-library')],

    //   files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
    // },
  ],

  parserOptions: {
    ecmaFeatures: { jsx: true },
    parser: '@typescript-eslint/parser',
  },

  root: true,

  rules: {
    'class-methods-use-this': 'off',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],

    'lines-around-comment': [
      'warn',
      {
        afterBlockComment: false,
        afterLineComment: false,

        allowArrayEnd: true,
        allowArrayStart: true,

        allowBlockEnd: true,
        allowBlockStart: true,

        allowClassEnd: true,
        allowClassStart: true,

        allowObjectEnd: true,
        allowObjectStart: true,

        beforeBlockComment: true,
        beforeLineComment: false,
      },
    ],

    'no-console': 'off',
    'no-implicit-coercion': 'error',
    'no-return-await': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off', // delegate to eslint-plugin-unused-imports

    'no-use-before-define': 'off',

    'padding-line-between-statements': [
      'warn',
      // always
      { blankLine: 'always', next: '*', prev: 'block-like' },
      { blankLine: 'always', next: '*', prev: 'case' },
      { blankLine: 'always', next: '*', prev: 'cjs-export' },
      { blankLine: 'always', next: '*', prev: 'cjs-import' },
      { blankLine: 'always', next: '*', prev: 'class' },
      { blankLine: 'always', next: '*', prev: 'default' },
      { blankLine: 'always', next: '*', prev: 'directive' },
      { blankLine: 'always', next: '*', prev: 'expression' },
      { blankLine: 'always', next: '*', prev: 'iife' },
      { blankLine: 'always', next: '*', prev: 'multiline-block-like' },
      { blankLine: 'always', next: '*', prev: 'multiline-const' },
      { blankLine: 'always', next: '*', prev: 'multiline-expression' },
      { blankLine: 'always', next: '*', prev: 'multiline-let' },
      { blankLine: 'always', next: '*', prev: 'multiline-var' },
      { blankLine: 'always', next: '*', prev: 'singleline-const' },
      { blankLine: 'always', next: '*', prev: 'singleline-let' },
      { blankLine: 'always', next: '*', prev: 'singleline-var' },
      { blankLine: 'always', next: 'block-like', prev: '*' },
      { blankLine: 'always', next: 'cjs-export', prev: '*' },
      { blankLine: 'always', next: 'cjs-import', prev: '*' },
      { blankLine: 'always', next: 'class', prev: '*' },
      { blankLine: 'always', next: 'expression', prev: '*' },
      { blankLine: 'always', next: 'function', prev: '*' },
      { blankLine: 'always', next: 'iife', prev: '*' },
      { blankLine: 'always', next: 'multiline-block-like', prev: '*' },
      { blankLine: 'always', next: 'multiline-const', prev: '*' },
      { blankLine: 'always', next: 'multiline-expression', prev: '*' },
      { blankLine: 'always', next: 'multiline-let', prev: '*' },
      { blankLine: 'always', next: 'multiline-var', prev: '*' },
      { blankLine: 'always', next: 'return', prev: '*' },
      { blankLine: 'always', next: 'switch', prev: '*' },
      // any
      { blankLine: 'any', next: 'expression', prev: 'expression' },
      {
        blankLine: 'any',
        next: 'singleline-const',
        prev: 'singleline-const',
      },
      { blankLine: 'any', next: 'singleline-let', prev: 'singleline-let' },
      { blankLine: 'any', next: 'singleline-var', prev: 'singleline-var' },
      // never
      { blankLine: 'never', next: 'cjs-export', prev: 'cjs-export' },
      { blankLine: 'never', next: 'cjs-import', prev: 'cjs-import' },
      { blankLine: 'never', next: 'directive', prev: 'directive' },
    ],

    quotes: ['error', 'single'],
    'require-await': 'off',
    'sort-imports': 'off',

    'sort-keys': [
      'warn',
      'asc',
      { caseSensitive: true, minKeys: 2, natural: true },
    ],

    'sort-vars': 'warn',
  },
});
