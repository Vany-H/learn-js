import { Body, Controller, Post, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FieldToCreateUserDto } from './dto/create.dto';
import { UserService } from './user.service';
import { User } from './user.model'

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
    @Get('/getAll')
    getAllUsers(){
        return this.userService.allUsers();
    }
}
