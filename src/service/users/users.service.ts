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

  async getPassword(email: string): Promise<string> {
    const user = await this.findUser(email);
    return user.password || '';
  }

  findUser(email: string): Promise<User> {
    try {
      return this.userRepository.findUser(email);
    } catch (error) {
      this.logger.error('Error happened finding for user', error.stack);
    }
  }

  isEmailUsed(email: string): boolean {
    const UserTemp = this.findUser(email);
    if (UserTemp) return true;
    return false;
  }

  login(email: string): string {
    const payload = {
      user: email,
    };
    return sign(payload, process.env.JWT_KEY, { algorithm: 'none' });
  }

  processUserData(users: User[]): User[] {
    const processedUsers: User[] = [];

    for (const user of users) {
      const processedUser: Partial<User> = {};

      // Perform basic validation
      if (!user.name || !user.age) {
        continue;
      }

      // Process user name
      processedUser.name =
        user.name.charAt(0).toUpperCase() + user.name.slice(1);

      // Process user age
      processedUser.isAdult = user.age >= 18;

      // Process user email
      if (user.email) {
        processedUser.hasValidEmail = user.email.includes('@');
      }

      // Process user preferences
      processedUser.preferences = [];
      if (user.preferences && Array.isArray(user.preferences)) {
        for (const pref of user.preferences) {
          if (typeof pref === 'string' && pref.trim().length > 0) {
            processedUser.preferences.push(pref.trim().toLowerCase());
          }
        }
      }

      // Process user transactions
      processedUser.transactions = [];
      if (user.transactions && Array.isArray(user.transactions)) {
        for (const trans of user.transactions) {
          if (
            typeof trans === 'object' &&
            'amount' in trans &&
            'date' in trans
          ) {
            processedUser.transactions.push(trans);
          }
        }
      }

      processedUsers.push(processedUser as User);
    }

    return processedUsers;
  }
}
