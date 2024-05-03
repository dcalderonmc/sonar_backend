import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
  describe('bye', () => {
    it('should return "Good Bye"', () => {
      expect(appController.getBye()).toBe('Good Bye');
    });
  });
  describe('fibo', () => {
    it('should return a number', () => {
      expect(appController.fibo(5)).toBe(5);
    });
    it('should throw an error with negative values', () => {
      expect(() => appController.fibo(-1)).toThrow();
    });
  });
});
