import { Injectable, Logger } from '@nestjs/common';
import { User } from '../../models/user.model';
import { UsersRepository } from '../../repository/users/users.repository';
import { sign } from 'jsonwebtoken';

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name);
  constructor(private userRepository: UsersRepository) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.getUsers();
  }

  async findUser(email: string): Promise<User> {
    try {
      return await this.userRepository.findUser(email);
    } catch (error) {
      this.logger.error('Error happened finding for user', error.stack);
      return undefined;
    }
  }

  async isEmailUsed(email: string): Promise<boolean> {
    const UserTemp = await this.findUser(email);
    if (UserTemp) return true;
    return false;
  }

  login(email: string): string {
    const payload = {
      user: email,
    };
    return sign(payload, process.env.JWT_KEY, { algorithm: 'HS256' });
  }
}
