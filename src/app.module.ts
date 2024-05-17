import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersRepository } from './repository/users/users.repository';
import { UsersService } from './service/users/users.service';
import { UsersController } from './controller/users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersRepository, UsersService],
})
export class AppModule {}
