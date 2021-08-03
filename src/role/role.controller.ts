import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create.dto';
import { Role } from './role.model';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
    constructor (private roleService: RoleService){}

    @ApiOperation({summary:"Create new role"})
    @ApiResponse({status:200, type: Role})
    @Post('/createRole')
    creatingUser(@Body() roleDto:CreateRoleDto){
        return this.roleService.createRole(roleDto);
    }

    @ApiOperation({summary:"Get all user"})
    @ApiResponse({status:200, type: [Role]})
    @Get('/:value')
    getAllUsers(@Param('value') value:string){
        return this.roleService.roleWhatNeed(value);
    }
}
