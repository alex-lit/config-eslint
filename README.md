# Конфигурация ESLint

## Установка

```sh
npm i @alexlit/config-eslint -D
```

## Подключение

```js
// .eslintrc.js
module.exports = {
  extends: ['./node_modules/@alexlit/config-eslint'],
};
```

Дополнительные плагины:

```js
// .eslintrc.js
module.exports = {
  extends: ['./node_modules/@alexlit/config-eslint/plugins/optional/vuetify'],
};
```
