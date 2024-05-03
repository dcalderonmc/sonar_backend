import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';

const dbUsers: User[] = [
  {
    name: 'Diego Calderón',
    email: 'dcalderon@mangochango.com',
    password: 'secret',
  },
  {
    name: 'Miguel de Leon',
    email: 'mleon@mangochango.com',
    password: 'secret',
  },
];

@Injectable()
export class UsersRepository {
  getUsers(): Promise<User[]> {
    return Promise.resolve(dbUsers);
  }

  findUser(email: string): Promise<User> {
    let user = dbUsers.find((u) => u.email === email);
    return Promise.resolve(user);
  }
}
