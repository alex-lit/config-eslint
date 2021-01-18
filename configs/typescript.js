module.exports = {
  plugins: ['@typescript-eslint'],

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  extends: ['plugin:@typescript-eslint/recommended'],

  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',

          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',

          'public-field',
          'protected-field',
          'private-field',

          'static-field',
          'instance-field',

          'field',

          'constructor',

          'public-static-method',
          'protected-static-method',
          'private-static-method',

          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',

          'public-method',
          'protected-method',
          'private-method',

          'static-method',
          'instance-method',

          'method',
        ],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { args: 'all', argsIgnorePattern: '^_' },
    ],
  },
};
