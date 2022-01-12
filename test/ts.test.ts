/* eslint-disable unused-imports/no-unused-vars */
import { bb } from './export';

const names = [3, 4];

interface Person {
  age: number;
  name: string;
}

/**
 * Foo
 */
// export class Example {
//   static staticProperty;

//   static staticArrowFunctionProperty = () => {};

//   /**
//    * Z
//    */
//   static get staticAccessorPair() {}

//   /**
//    * Z
//    */
//   static set staticAccessorPair(value) {}

//   /**
//    * Z
//    */
//   static get staticGetter() {}

//   /**
//    * Z
//    */
//   static set staticSetter(value) {}

//   /**
//    * Z
//    */
//   static staticMethod() {}

//   /**
//    * Z
//    */
//   static async astaticAsyncMethod() {}

//   /**
//    * Z
//    */
//   static async staticAsyncMethod() {}

//   @decorator
//   decoratedProperty = 'bar';

//   property = 'bar';

//   arrowFunctionProperty = () => {};

//   /**
//    * Z
//    */
//   constructor() {}

//   /**
//    * Z
//    */
//   get accessorPair() {}

//   /**
//    * Z
//    */
//   set accessorPair(value) {}

//   /**
//    * Z
//    */
//   get getter() {}

//   /**
//    * Z
//    */
//   set setter(value) {}

//   /**
//    * Z
//    */
//   method() {}

//   /**
//    * Z
//    */
//   @decorator
//   decoratedMethod() {}

//   /**
//    * Z
//    */
//   @decorator
//   async decoratedAsyncMethod() {}

//   /**
//    * Z
//    */
//   async asyncMethod() {}

//   /**
//    * Z
//    */
//   async aasyncMethod() {}

//   static _staticConventionalPrivateProperty;

//   /**
//    * Z
//    */
//   static _staticConventionalPrivateMethod() {}

//   /**
//    * Z
//    */
//   static async _staticAsyncConventionalPrivateMethod() {}

//   _conventionalPrivateProperty;

//   /**
//    * Z
//    */
//   _conventionalPrivateMethod() {}

//   async _asyncConventionalPrivateMethod() {}
// }

/**
 * Валидность данных bic 'formData.bic'
 */
console.log(bb);

const array = [...'example'].map((char) => char.codePointAt(0));
const red = array.reduceRight((p, c) => p + c, '');
const flattenedAndMapped = array.flat();

console.log(red, flattenedAndMapped);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface Xxx {
  a: 1;
  x: 1;
}

/**
 * Данные о сессии
 */
interface AuthState {
  //
  /**
   * Токен доступа
   */
  accessToken: string;

  /**
   * Код для генерации токена
   */
  code: string;

  /**
   * Генерируемый верификатор кода для генерации токена
   */
  codeVerifier: string;

  /**
   * Если истина то пользователь вошел в систему
   */
  isLoggedIn: boolean;

  /**
   * Состояние для генерации токена
   */
  state: string;

  /**
   * Данные по пользователю
   */
  user: Record<string, any>;
}

/**
 * @param z
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function SET(z) {
  return z;
}

/**
 * Дефолтное состояние
 */
const defaultState: AuthState = {
  accessToken: '',
  code: '',
  codeVerifier: '',
  isLoggedIn: false,
  state: '',
  user: {},
};

export const state = (): AuthState => defaultState;

export const mutations = {
  RESET_AUTH_DATA() {
    return true;
  },

  SET_ACCESS_TOKEN: SET('accessToken'),

  SET_CODE: SET('code'),

  SET_CODE_VERIFIER: SET('codeVerifier'),

  SET_EXPIRES_IN: SET('expiresIn'),

  SET_IS_LOGGED_IN: SET('isLoggedIn'),

  SET_REFRESH_TOKEN: SET('refreshToken'),

  SET_STATE: SET('state'),

  SET_USER: SET('user'),
};
