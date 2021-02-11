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
    './node_modules/@alexlit/config-eslint/plugins/optional/vuetify',
    './node_modules/@alexlit/config-eslint/plugins/optional/react',
    './node_modules/@alexlit/config-eslint/plugins/optional/react-hooks',
  ],
};
```
