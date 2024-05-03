import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getBye(): string {
    return 'Good Bye';
  }

  calculateFibonacci(n: number): number {
    if (n <= 0) {
      throw new Error('Invalid input');
    }
    if (n === 1 || n === 2) {
      return 1;
    }
    // Intentional bad code: Inefficient recursive approach
    return this.calculateFibonacci(n - 1) + this.calculateFibonacci(n - 2);
  }
}
