let foo = '2';

let s = `${foo}`;
s = `${foo}`;
foo = String(foo);
foo += s;

const array = [1, 2, 3];

array.forEach((item) => item);

/**
 * @param x dfdf
 *
 * @see [sdfsdf](https://github.com/gajus/eslint-plugin-jsdoc/releases)
 */
function bar(x?: string): string {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const foox = bar();
  /* eslint-enable @typescript-eslint/no-unused-vars */

  return x;
}

/**
 *
 */
bar();

try {
  //
} catch {
  //
}
