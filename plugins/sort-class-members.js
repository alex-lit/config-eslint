/**
 * @see [eslint-plugin-sort-class-members](https://github.com/bryanrsmith/eslint-plugin-sort-class-members)
 */
module.exports = {
  plugins: ['sort-class-members'],

  rules: {
    'sort-class-members/sort-class-members': [
      'error',
      {
        accessorPairPositioning: 'getThenSet',

        groups: {
          'async-conventional-private-methods': [
            {
              async: true,
              name: '/_.+/',
              sort: 'alphabetical',
              type: 'method',
            },
          ],

          'static-accessor-pairs': [
            {
              accessorPair: true,
              sort: 'alphabetical',
              static: true,
            },
          ],

          'static-arrow-function-properties': [
            {
              propertyType: 'ArrowFunctionExpression',
              sort: 'alphabetical',
              static: true,
            },
          ],

          'static-async-conventional-private-methods': [
            {
              async: true,
              name: '/_.+/',
              sort: 'alphabetical',
              static: true,
              type: 'method',
            },
          ],

          'static-async-methods': [
            {
              async: true,
              sort: 'alphabetical',
              static: true,
              type: 'method',
            },
          ],

          'static-conventional-private-methods': [
            {
              name: '/_.+/',
              sort: 'alphabetical',
              static: true,
              type: 'method',
            },
          ],

          'static-conventional-private-properties': [
            {
              name: '/_.+/',
              sort: 'alphabetical',
              static: true,
              type: 'property',
            },
          ],

          'static-getters': [
            {
              kind: 'get',
              sort: 'alphabetical',
              static: true,
            },
          ],

          'static-setters': [
            {
              kind: 'set',
              sort: 'alphabetical',
              static: true,
            },
          ],
        },

        order: [
          // static
          '[static-properties]',
          '[static-arrow-function-properties]',
          '[static-accessor-pairs]',
          '[static-getters]',
          '[static-setters]',
          '[static-methods]',
          '[static-async-methods]',

          // properties
          '[properties]',
          '[arrow-function-properties]',

          // constructor
          'constructor',

          // accessor
          '[accessor-pairs]',
          '[getters]',
          '[setters]',

          // methods
          '[methods]',
          '[async-methods]',

          // static private
          '[static-conventional-private-properties]',
          '[static-conventional-private-methods]',
          '[static-async-conventional-private-methods]',

          // private
          '[conventional-private-properties]',
          '[conventional-private-methods]',
          '[async-conventional-private-methods]',
        ],
      },
    ],
  },
};
