const Auth = (args) => args;

/**
 * Шапка приложения
 */

export default class AppHeader {
  @Auth({ sdf: 32 })
  _selectedUserId;

  @Auth('user')
  user;
}
