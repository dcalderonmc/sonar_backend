import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/bye')
  getBye(): string {
    return this.appService.getBye();
  }

  @Get('/fibonacci/:number')
  fibo(@Param('number') n: number): number {
    return this.appService.calculateFibonacci(n);
  }
}
