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
