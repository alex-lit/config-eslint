const Auth = (args) => args;

const arr = [1, 2, 3];

arr.forEach((item) => item);

const BASE64_CHARS = '1+/=';
export default class AppHeader {
  @Auth({ sdf: BASE64_CHARS })
  _selectedUserId;

  @Auth('user')
  user;
}
