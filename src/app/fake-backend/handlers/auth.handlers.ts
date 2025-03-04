import { createSuccesfulResponse } from '../helpers';
import { unauthorizedErrorResponse } from '../helpers/error-responses';
import { FakeHandler } from './fake-handler.interface';

const usersDb = [
  {
    username: 'juan',
    password: '1234',
    role: 'compras',
  },
  {
    username: 'alicia',
    password: '1234',
    role: 'mercaderia',
  },
  {
    username: 'pedro',
    password: '1234',
    role: 'contador',
  },
  {
    username: 'walter',
    password: '1234',
    role: 'gerente',
  },
];

export const authHandlers: FakeHandler[] = [
  {
    match: (req) => req.url === 'login' && req.method === 'POST',
    handle: (req) => {
      const { username, password } = req.body;
      const user = usersDb.find(
        (userFromDb) =>
          userFromDb.username === (username as string).toLocaleLowerCase() &&
          userFromDb.password === password
      );

      return user
        ? createSuccesfulResponse(safeUserInfo(user))
        : unauthorizedErrorResponse(req, 'Invalid Credentials');
    },
  },
];

function safeUserInfo(user: any) {
  const userClone = { ...user };
  delete userClone.password;

  return window.btoa(JSON.stringify(userClone));
}
