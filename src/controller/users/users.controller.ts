import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../../service/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':email')
  getUser(@Param('email') email: string) {
    return this.userService.findUser(email);
  }
}
