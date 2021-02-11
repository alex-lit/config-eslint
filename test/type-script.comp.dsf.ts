const sadf = {
  plugins: ['import'],
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: { extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'] },
      alias: {
        map: [
          ['@', './src'],
          ['~', './src'],
          ['~~', './'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.vue'],
      },
    },
  },
};

console.log(sadf);

const array = [1, 2, 3];

array.forEach((item) => item);

/**
 *
 */
function bar() {
  return 2;
}

/**
 *
 */
bar();

/**
 *
 */
function foo() {
  bar();

  return 2;
}

foo();
