import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { Post } from 'src/post/post.model';
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
    SequelizeModule.forFeature([User, Role, UserRoles, Post]),
    RoleModule,
    forwardRef(()=>AuthModule),
  ],
  exports:[
    UserService,
  ]
})
export class UserModule {}
