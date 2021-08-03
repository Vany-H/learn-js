import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { FieldToCreateUserDto } from './dto/create.dto'

@Injectable()
export class UserService {

    constructor (@InjectModel(User) private userModel: typeof User){}

    async createUser(dto:FieldToCreateUserDto){
        const user = await this.userModel.create(dto);
        return user;
    }

    async allUsers(){
        const users = await this.userModel.findAll();
        return users;
    }
}
