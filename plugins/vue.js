/* eslint-disable spellcheck/spell-checker */
/**
 * @see [eslint-plugin-vue](https://eslint.vuejs.org/rules/)
 */
module.exports = {
  extends: ['plugin:vue/recommended'],

  plugins: ['vue'],

  rules: {
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true,
      },
    ],

    'vue/block-lang': [
      'error',
      {
        script: { lang: 'ts' },
        style: { lang: 'scss' },
        template: {},
      },
    ],

    // 'vue/component-api-style': [
    //   'error',
    //   ['script-setup', 'composition', 'options'],
    // ],

    'vue/component-definition-name-casing': ['error', 'kebab-case'],

    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        ignores: [],
        registeredComponentsOnly: false,
      },
    ],

    'vue/component-options-name-casing': ['error', 'PascalCase'],

    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],

    'vue/eqeqeq': ['error'],

    'vue/html-button-has-type': ['error'],

    'vue/html-comment-content-newline': ['warn'],

    'vue/html-comment-content-spacing': ['warn'],

    'vue/html-comment-indent': ['warn'],

    'vue/html-end-tags': ['error'],

    'vue/html-self-closing': [
      'error',
      {
        html: {
          component: 'never',
          normal: 'never',
          void: 'always',
        },

        math: 'always',
        svg: 'always',
      },
    ],

    'vue/match-component-file-name': ['error'],

    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
      },
    ],

    'vue/new-line-between-multi-line-property': ['error'],

    'vue/next-tick-style': ['error', 'promise'],

    'vue/no-child-content': ['error'],

    'vue/no-deprecated-scope-attribute': ['error'],

    'vue/no-deprecated-slot-attribute': ['error'],

    'vue/no-deprecated-slot-scope-attribute': ['error'],

    'vue/no-empty-component-block': ['error'],

    'vue/no-invalid-model-keys': ['error'],

    'vue/no-irregular-whitespace': ['error'],

    'vue/no-loss-of-precision': ['error'],

    'vue/no-multiple-objects-in-class': ['error'],

    'vue/no-parsing-error': ['error'],

    'vue/no-potential-component-option-typo': ['error'],

    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVue3BuiltInComponents: true,
        disallowVueBuiltInComponents: true,
      },
    ],

    'vue/no-restricted-component-options': ['error'],

    'vue/no-restricted-props': ['error'],

    'vue/no-this-in-before-route-enter': ['error'],

    'vue/no-unsupported-features': ['error'],

    'vue/no-unused-components': ['error'],

    'vue/no-unused-refs': ['warn'],

    'vue/no-use-computed-property-like-method': ['error'],

    'vue/no-useless-mustaches': ['error'],

    'vue/no-useless-template-attributes': ['error'],

    'vue/no-useless-v-bind': ['error'],

    'vue/no-v-html': ['error'],

    'vue/no-v-text': ['error'],

    'vue/padding-line-between-blocks': ['error'],

    'vue/prefer-separate-static-class': ['error'],

    'vue/require-direct-export': 'off',

    'vue/sort-keys': [
      'warn',
      'asc',
      {
        caseSensitive: true,
        minKeys: 2,
        natural: true,
      },
    ],

    'vue/static-class-names-order': 'off',

    'vue/this-in-template': ['error', 'never'],

    'vue/v-for-delimiter-style': ['error'],

    'vue/v-on-event-hyphenation': ['error'],

    'vue/v-on-function-call': ['error', 'always'],

    'vue/valid-next-tick': ['error'],

    'vue/valid-v-bind-sync': ['error'],

    'vue/valid-v-slot': ['error'],
  },
};
