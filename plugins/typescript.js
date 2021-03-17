/**
 * @see [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
 */
module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],

  overrides: [
    {
      files: ['*.d.ts'],

      rules: {
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],

  plugins: ['@typescript-eslint'],

  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array' }],

    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],

    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],

    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: {
          memberTypes: [
            // Index signature
            'signature',

            // Fields
            'public-static-field',
            'protected-static-field',
            'private-static-field',

            'public-decorated-field',
            'protected-decorated-field',
            'private-decorated-field',

            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',

            'public-abstract-field',
            'protected-abstract-field',
            'private-abstract-field',

            'public-field',
            'protected-field',
            'private-field',

            'static-field',
            'instance-field',
            'abstract-field',

            'decorated-field',

            'field',

            // Constructors
            'public-constructor',
            'protected-constructor',
            'private-constructor',

            'constructor',

            // Methods
            'public-static-method',
            'protected-static-method',
            'private-static-method',

            'public-decorated-method',
            'protected-decorated-method',
            'private-decorated-method',

            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',

            'public-abstract-method',
            'protected-abstract-method',
            'private-abstract-method',

            'public-method',
            'protected-method',
            'private-method',

            'static-method',
            'instance-method',
            'abstract-method',

            'decorated-method',

            'method',
          ],

          order: 'alphabetically',
        },
      },
    ],

    '@typescript-eslint/method-signature-style': ['error', 'method'],

    '@typescript-eslint/naming-convention': [
      'error',

      /**
       * ESLint's camelcase conventions
       */
      {
        format: ['camelCase'],
        selector: 'default',
      },
      {
        format: ['camelCase' /* 'UPPER_CASE' */],
        selector: 'variable',
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        selector: 'parameter',
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'require',
        modifiers: ['private'],
        selector: 'memberLike',
      },
      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },

      /**
       * Custom
       */

      // interface
      {
        custom: {
          match: false,
          regex: '^I[A-Z]',
        },

        format: ['PascalCase'],
        selector: 'interface',
      },

      // objectLiteralProperty
      {
        format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        selector: 'objectLiteralProperty',
      },

      // objectLiteralMethod
      {
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        selector: 'objectLiteralMethod',
      },

      // parameter
      {
        format: ['camelCase', 'PascalCase'],
        modifiers: ['destructured'],
        selector: 'parameter',
      },

      // variable
      {
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        modifiers: ['const'],
        selector: 'variable',
      },
      {
        format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
        leadingUnderscore: 'allow',
        modifiers: ['destructured'],
        selector: 'variable',
      },
    ],

    '@typescript-eslint/no-explicit-any': 'off',

    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
      },
    ],

    '@typescript-eslint/no-shadow': ['error'],

    '@typescript-eslint/no-unused-vars': [
      'error',
      { args: 'all', argsIgnorePattern: '^_' },
    ],

    '@typescript-eslint/no-use-before-define': ['warn'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/sort-type-union-intersection-members': ['error'],
    '@typescript-eslint/unified-signatures': ['error'],
  },
};
