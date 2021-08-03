import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/role/role.model';
import { RoleModule } from 'src/role/role.module';
import { UserRoles } from 'src/role/user-rols.model';
import { UserController } from './user.controller';
import { User } from './user.model';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports:[
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RoleModule
  ],
  exports:[UserService]
})
export class UserModule {}
