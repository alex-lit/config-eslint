const x = { B: 2, a: 1, c: 9 };
const { B, a, c } = x;

const xxz = {
  foo(f, n) {
    if (typeof f === 'function') {
      f();
    } else {
      throw new TypeError('foo: A Function is required.');
    }

    if (!n) {
      return false;
    }

    return this.foo(f, n);
  },

  name: 'Bar',

  types: [{ f: 'function' }, { n: 'number' }],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Xxx {
  a: 1;
  x: 1;
}

// Bad:
class User {
  aaa = () => 'Hello';

  greet = () => 'Hello';
}

console.log(a, B, User, c, xxz);

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
