import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@ApiTags("Authorization")
@Controller('auth')
export class AuthController {

    constructor(private userService:UserService, private authService:AuthService){}


    @Post("/login")
    login (@Body() authDto:AuthDto){
        return this.authService.login(authDto);
    }

    @Post("/regestration")
    regestration(@Body() authDto:AuthDto){
        return this.authService.regestration(authDto)
    }
}
