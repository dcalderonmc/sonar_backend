import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHealth(): boolean {
    return true;
  }

  getDatetime(): Date {
    return new Date();
  }

  getRandomNum(): number {
    return Math.random();
  }
}
