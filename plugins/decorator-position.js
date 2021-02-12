/**
 * @see [eslint-plugin-decorator-position](https://github.com/NullVoxPopuli/eslint-plugin-decorator-position)
 */
module.exports = {
  plugins: ['decorator-position'],

  extends: ['plugin:decorator-position/base'],

  rules: {
    'decorator-position/decorator-position': [
      'warn',
      {
        properties: 'above',
        methods: 'above',
      },
    ],
  },
};
