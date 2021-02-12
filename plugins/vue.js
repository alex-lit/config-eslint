/**
 * @see [eslint-plugin-vue](https://eslint.vuejs.org/rules/)
 */
module.exports = {
  plugins: ['vue'],

  extends: ['plugin:vue/recommended'],

  rules: {
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true,
      },
    ],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/eqeqeq': ['error'],
    'vue/html-comment-content-newline': ['warn'],
    'vue/html-comment-content-spacing': ['warn'],
    'vue/html-comment-indent': ['warn'],
    'vue/html-end-tags': ['error'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'never',
        },
        svg: 'always',
        math: 'always',
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
    'vue/no-deprecated-scope-attribute': ['error'],
    'vue/no-deprecated-slot-attribute': ['error'],
    'vue/no-deprecated-slot-scope-attribute': ['error'],
    'vue/no-empty-component-block': ['error'],
    'vue/no-irregular-whitespace': ['error'],
    'vue/no-multiple-objects-in-class': ['error'],
    'vue/no-parsing-error': ['error'],
    'vue/no-potential-component-option-typo': ['error'],
    'vue/no-reserved-component-names': ['error'],
    'vue/no-restricted-component-options': ['error'],
    'vue/no-restricted-props': ['error'],
    'vue/no-unsupported-features': ['error'],
    'vue/no-unused-components': ['error'],
    'vue/no-useless-mustaches': ['error'],
    'vue/no-useless-v-bind': ['error'],
    'vue/no-v-html': 'off',
    'vue/padding-line-between-blocks': ['error'],
    'vue/require-direct-export': 'off',
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
