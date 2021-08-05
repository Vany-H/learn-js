import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FieldToCreateUserDto } from './dto/create.dto';
import { UserService } from './user.service';
import { User } from './user.model'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/auth-role.decoration';
import { RoleGuard } from 'src/auth/auth-role.guard';
import { SetRoleUser } from './dto/set-role.dto';
import { BanDto } from './dto/ban.dto';

@ApiTags("Users")
@Controller('user')
export class UserController {

    constructor (private userService: UserService){}

    @ApiOperation({summary:"Create new user"})
    @ApiResponse({status:200, type: User})
    @Post('/create')
    creatingUser(@Body() userDto:FieldToCreateUserDto){
        return this.userService.createUser(userDto);
    }

    @ApiOperation({summary:"Get all user"})
    @ApiResponse({status:200, type: [User]})
    @Roles('admin')
    @UseGuards(RoleGuard)
    @Get('/getAll')
    getAllUsers(){
        return this.userService.allUsers();
    }

    @ApiOperation({summary:"Set roles"})
    @ApiResponse({status:200, type: [User]})
    @Roles('admin')
    @UseGuards(RoleGuard)
    @Post('/setRoleForUser')
    setRoles(@Body() setRoleUser:SetRoleUser){
        return this.userService.setUserRole(setRoleUser);
    }

    @ApiOperation({summary:"Remove roles"})
    @ApiResponse({status:200, type: [User]})
    @Roles('admin')
    @UseGuards(RoleGuard)
    @Post('/removeRoleForUser')
    removeRoles(@Body() setRoleUser:SetRoleUser){
        return this.userService.deletUserRole(setRoleUser);
    }

    @ApiOperation({summary:"Banned user"})
    @ApiResponse({status:200})
    @Roles('admin')
    @UseGuards(RoleGuard)
    @Post('/ban')
    ban(@Body() banUser:BanDto){
        return this.userService.ban(banUser.email);
    }
}
