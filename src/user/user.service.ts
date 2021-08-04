import { Get, Injectable, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { FieldToCreateUserDto } from './dto/create.dto'
import { RoleService } from 'src/role/role.service';
import { UserRoles } from 'src/role/user-rols.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SetRoleUser } from './dto/set-role.dto';

@Injectable()
export class UserService {

    constructor (
        @InjectModel(User) private userModel: typeof User, 
        private roleService: RoleService, 
        @InjectModel(UserRoles) private userRoleModel: typeof UserRoles
    ){}

    async createUser(dto:FieldToCreateUserDto){
        const user = await this.userModel.create(dto);
        const role = await this.roleService.roleWhatNeed("admin");
        await user.$set('roles', [role[0].id]);
        user.roles = role;
        return user;
    }

    async allUsers(){
        const users = await this.userModel.findAll({include:{all:true}});
        return users;
    }

    async getUserEmail(email:string){
        const user = await this.userModel.findOne({
            include:{
                all:true
            },
            where:{
                email:email
            }
        });
        return user;
    }

    async setUserRole(setRoleUser:SetRoleUser){
        const user = await this.userModel.findOne({where:{email:setRoleUser.email}});
        const role = await this.roleService.roleWhatNeed(setRoleUser.role);
        await user.$set('roles', [role[0].id]);
        user.roles = role;
        return user;
    }

    async ban(email:string){
        const user = await this.userModel.update({banStatus:true},{where:{email:email}});
        return user;
    }
}
