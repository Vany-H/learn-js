import { HttpException, HttpStatus, Injectable, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/user/user.model';

@Injectable()
export class AuthService {
    constructor(private userServise:UserService, private jwtService:JwtService){}

    async login (dto:AuthDto){
        const user = await this.validateDataUser(dto);
        return this.createToken(user);
    }

    async regestration(dto:AuthDto){
        const check = await this.userServise.getUserEmail(dto.email)
        if(!!check){
            new HttpException("this email exist", HttpStatus.BAD_REQUEST);
        }

        const hashPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.userServise.createUser({...dto, password:hashPassword});

        return this.createToken(user);
    }

    async createToken(user : User){
        const payload = {email: user.email, name: user.name, id: user.id, roles: user.roles}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateDataUser(userDto:AuthDto){

        const user = await this.userServise.getUserEmail(userDto.email)
        return user;
    }
}
