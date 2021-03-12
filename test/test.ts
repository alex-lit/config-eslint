const x = { B: 2, a: 1, c: 9 };
const { B, a, c } = x;

// Bad:
class User {
  greet = () => 'Hello';
}

console.log(a, B, User, c);

/**
 * Данные о сессии
 */
interface AuthState {
  //
  /**
   * Если истина то пользователь вошел в систему
   */
  isLoggedIn: boolean;

  /**
   * Состояние для генерации токена
   */
  state: string;

  /**
   * Код для генерации токена
   */
  code: string;

  /**
   * Генерируемый верификатор кода для генерации токена
   */
  codeVerifier: string;

  /**
   * Токен доступа
   */
  accessToken: string;

  /**
   * Токен на обновление сессии
   */
  refreshToken: string;

  /**
   * Время истечения срока действия токенов, мс
   */
  expiresIn: number;

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
  expiresIn: Date.now(),
  isLoggedIn: false,
  refreshToken: '',
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
