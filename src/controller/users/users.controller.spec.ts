import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '../../service/users/users.service';
import { UsersRepository } from '../../repository/users/users.repository';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, UsersRepository],
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the users', async () => {
    const users = await controller.getUsers();
    expect(users).toBeDefined();
    expect(users.length).toBe(2);
  });

  it('should return the user', async () => {
    const users = await controller.getUser('dcalderon@mangochango.com');
    expect(users).toBeDefined();
  });

  it('should return falsy', async () => {
    const users = await controller.getUser('willy@mangochango.com');
    expect(users).toBeFalsy();
  });

  it('isEmailUsed should return true', async () => {
    const users = await controller.isEmailUsed('dcalderon@mangochango.com');
    expect(users).toBe(true);
  });

  it('isEmailUsed should return false', async () => {
    const users = await controller.isEmailUsed('willy@mangochango.com');
    expect(users).toBe(false);
  });

  it('login should return false', () => {
    process.env.JWT_KEY = 'secretValue';
    const users = controller.login('dcalderon@mangochango.com');
    expect(users).toBeTruthy();
  });
});
