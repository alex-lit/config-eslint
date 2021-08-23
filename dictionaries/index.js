/* eslint-disable global-require */

const programming = [
  ...require('./programming/bash'),
  ...require('./programming/django'),
  ...require('./programming/elixir'),
  ...require('./programming/go'),
  ...require('./programming/java'),
  ...require('./programming/latex'),
  ...require('./programming/lua'),
  ...require('./programming/php'),
  ...require('./programming/python'),
  ...require('./programming/ruby'),
  ...require('./programming/rust'),
  ...require('./programming/scala'),
];

const specialized = [
  ...require('./specialized/cryptocurrencies'),
  ...require('./specialized/html-symbol-entities'),
  ...require('./specialized/lorem-ipsum'),
];

module.exports = [...programming, ...specialized, ...require('./default')];
