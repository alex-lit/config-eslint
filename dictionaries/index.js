const HTML_SYMBOL_ENTITIES = require('./specialized/html-symbol-entities');
const CRYPTOCURRENCIES = require('./specialized/cryptocurrencies');
const LOREM_IPSUM = require('./specialized/lorem-ipsum');

module.exports = [...CRYPTOCURRENCIES, ...HTML_SYMBOL_ENTITIES, ...LOREM_IPSUM];
