import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { CreateRoleDto } from './dto/create.dto';
import { Role } from './role.model';
import { UserRoles } from './user-rols.model';

@Injectable()
export class RoleService {

    constructor (@InjectModel(Role) private roleModel: typeof Role){}

    async createRole(dto:CreateRoleDto){
        const role = await this.roleModel.create(dto);
        return role;
    }

    async roleWhatNeed(value:string){
        const roles = !!value ? await this.roleModel.findAll({
            where:{
                value: value
            }
        }) : await this.roleModel.findAll();
        return roles;
    }
}
