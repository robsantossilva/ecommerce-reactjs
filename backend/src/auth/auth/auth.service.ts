import { Injectable } from '@nestjs/common';

const users = [
  {
    id: 1,
    username: 'user1@user.com',
    password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K', //123456
    role: 'admin',
  },
  {
    id: 2,
    username: 'user2@user.com',
    password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
    role: 'user',
  },
  {
    id: 3,
    username: 'user3@user.com',
    password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
    role: 'user',
  },
];

@Injectable()
export class AuthService {
  login(username: string, password: string) {
    console.log(username, password);
  }
}
