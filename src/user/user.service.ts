import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { FieldToCreateUserDto } from './dto/create.dto'
import { RoleService } from 'src/role/role.service';

@Injectable()
export class UserService {

    constructor (@InjectModel(User) private userModel: typeof User, private roleService: RoleService){}

    async createUser(dto:FieldToCreateUserDto){
        const user = await this.userModel.create(dto);
        const role = await this.roleService.roleWhatNeed("admin");
        await user.$set('roles', [role[0].id]);
        return user;
    }

    async allUsers(){
        const users = await this.userModel.findAll();
        return users;
    }
}
