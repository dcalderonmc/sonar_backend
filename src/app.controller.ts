import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getBye(): string {
    return this.appService.getBye();
  }

  @Get()
  fibo(): number {
    return this.appService.calculateFibonacci(5);
  }
}
