import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';

// const users = [
//   {
//     id: 1,
//     username: 'user1@user.com',
//     password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K', //123456
//     role: 'admin',
//   },
//   {
//     id: 2,
//     username: 'user2@user.com',
//     password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
//     role: 'user',
//   },
//   {
//     id: 3,
//     username: 'user3@user.com',
//     password: '$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K',
//     role: 'user',
//   },
// ];

@Injectable()
export class AuthService {
  //constructor(private jwtService: JwtService) {}
  constructor(private http: HttpService) {}

  async login(username: string, password: string) {
    //const user = this.validateCredentials(username, password);

    // const payload = {
    //   sub: user.id,
    //   username: user.username,
    //   role: user.role,
    // };

    // return this.jwtService.sign(payload);

    const { data } = await firstValueFrom(
      this.http.post(
        'http://keycloak:8080/auth/realms/fullcycle/protocol/openid-connect/token',
        new URLSearchParams({
          client_id: 'nest',
          client_secret: 'b4e4a9a8-a92c-4298-93fd-615094e7f28a',
          grant_type: 'password',
          username,
          password,
        }),
      ),
    );
    return data;
  }

  // validateCredentials(username: string, password: string) {
  //   const user = users.find(
  //     (u) =>
  //       u.username === username && bcrypt.compareSync(password, u.password),
  //   );

  //   if (!user) {
  //     throw new Error('User not found');
  //   }

  //   return user;
  // }
}
