/* eslint-disable no-useless-constructor */
/* eslint-disable spellcheck/spell-checker, jsdoc/require-jsdoc */
/* eslint-disable @typescript-eslint/no-empty-function */
export class Example {
  static staticProperty;

  static staticArrowFunctionProperty = () => {};

  static get staticAccessorPair() {
    return 'true';
  }

  static set staticAccessorPair(value) {}

  static get staticGetter() {
    return 'true';
  }

  static set staticSetter(value) {}

  static staticMethod() {}

  static async astaticAsyncMethod() {}

  static async staticAsyncMethod() {}

  @Prop
  decoratedProperty1 = 'bar';

  @Prop
  property2 = 'bar';

  readonly property = 'bar';

  property1 = true;

  arrowFunctionProperty = () => {};

  constructor() {}

  get accessorPair() {
    return 'true';
  }

  set accessorPair(value) {}

  get getter() {
    return 'true';
  }

  set setter(value) {}

  @Watch
  onAdecoratedMethod1() {}

  onBdecoratedMethod() {}

  @Watch
  onXcoratedMethod2() {}

  method() {}

  @decorator
  async decoratedAsyncMethod() {}

  async asyncMethod() {}

  async aasyncMethod() {}

  private static _staticConventionalPrivateProperty;

  private static _staticConventionalPrivateMethod() {}

  private static async _staticAsyncConventionalPrivateMethod() {}

  private _conventionalPrivateProperty = 1;

  private _conventionalPrivateMethod() {}

  private async _asyncConventionalPrivateMethod() {}
}
