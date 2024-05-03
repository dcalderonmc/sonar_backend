import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.model';

const dbUsers: User[] = [
  {
    name: 'Diego Calderón',
    email: 'dcalderon@mangochango.com',
  },
  {
    name: 'Miguel de Leon',
    email: 'mleon@mangochango.com',
  },
];

@Injectable()
export class UsersRepository {
  getUsers(): Promise<User[]> {
    return Promise.resolve(dbUsers);
  }

  findUser(email: string): Promise<User> {
    let user = dbUsers.find((u) => u.email === email);
    if (!user) return Promise.reject('Error description');
    return Promise.resolve(user);
  }
}
