import { Injectable, Logger } from '@nestjs/common';
import { User } from '../../models/user.model';
import { UsersRepository } from '../../repository/users/users.repository';

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name)
  constructor(private userRepository: UsersRepository) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.getUsers();
  }

  findUser(email: string): Promise<User> {
    try {
      return this.userRepository.findUser(email);
    } catch (error) {
      this.logger.error('Error happened finding for user', error.stack);
    }
  }
}
