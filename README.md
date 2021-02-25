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
    './node_modules/@alexlit/config-eslint/plugins/optional/jest',
    './node_modules/@alexlit/config-eslint/plugins/optional/jest-formatting',
    './node_modules/@alexlit/config-eslint/plugins/optional/react',
    './node_modules/@alexlit/config-eslint/plugins/optional/react-hooks',
    './node_modules/@alexlit/config-eslint/plugins/optional/svelte',
    './node_modules/@alexlit/config-eslint/plugins/optional/vuetify',
  ],
};
```
