# ESLint Configuration

## Installation

```sh
npm i @alexlit/config-eslint -D
```

## Connection

```js
// .eslintrc.js
module.exports = {
  extends: [
    './node_modules/@alexlit/config-eslint',

    /* optional */
    // './node_modules/@alexlit/config-eslint/plugins/optional/jest',
    // './node_modules/@alexlit/config-eslint/plugins/optional/jest-formatting',
    // './node_modules/@alexlit/config-eslint/plugins/optional/react',
    // './node_modules/@alexlit/config-eslint/plugins/optional/react-hooks',
    // './node_modules/@alexlit/config-eslint/plugins/optional/svelte',
    // './node_modules/@alexlit/config-eslint/plugins/optional/vuetify',
  ],
};
```

## Recipes

### Vue

- If you use vue.js with `options api` syntax you need to turn off `sort-keys`
  rule for `*.vue` files

  ```js
  // .eslintrc.js
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'sort-keys': 'off',
      },
    },
  ];
  ```

### Spell check

- Skip some words

  ```js
  // .eslintrc.js
  module.exports = {
    rules: {
      'spellcheck/spell-checker': [
        'warn',
        {
          skipWords: [
            ...require('@alexlit/config-eslint/plugins/spellcheck').rules[
              'spellcheck/spell-checker'
            ][1].skipWords,

            'word1',
            'word2',
          ],
        },
      ],
    },
  };
  ```

- Disable spell checking

  ```js
  // .eslintrc.js
  module.exports = {
    rules: {
      'spellcheck/spell-checker': 'off',
    },
  };
  ```
