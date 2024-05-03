import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

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
    return Number(crypto.randomBytes(1));
  }
}
