const Auth = (args: any) => args;
const sql = (...args: any) => args;

const arr = [1, 2, 3];

arr.forEach((item) => item);

const BASE64_CHARS = '1+/=';

const a = `
SELECT
  ${'foo'}
FROM
  ${'bar'}
`;

const b = sql`
SELECT
  1
`;
export default class typeScript {
  @Auth({ sdf: BASE64_CHARS, b })
  _selectedUserId;

  @Auth('user')
  user = a;
}
