/**
 * @see [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
 */
module.exports = {
  plugins: ['jsdoc'],

  extends: ['plugin:jsdoc/recommended'],

  rules: {
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-jsdoc': [
      'warn',
      {
        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration: false,
          ClassExpression: false,
          FunctionDeclaration: true,
          FunctionExpression: false,
          MethodDefinition: true,
        },
      },
    ],
  },
};