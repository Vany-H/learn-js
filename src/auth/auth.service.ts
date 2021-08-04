import { HttpException, HttpStatus, Injectable, UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/user/user.model';
import { AuthsLoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private userServise:UserService, private jwtService:JwtService){}

    async login (dto:AuthsLoginDto){
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

    private async createToken(user : User){
        const payload = {email: user.email, name: user.name, id: user.id, roles: user.roles}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateDataUser(userDto:AuthsLoginDto){

        const user = await this.userServise.getUserEmail(userDto.email)
        if(!!user.banStatus) throw new HttpException(`You was banned, about reson ${user.banReson}`, HttpStatus.FORBIDDEN);
        const checkPassword = await bcrypt.compare(userDto.password, user.password);

        if(!!user && !!checkPassword) return user;
        else throw new UnauthorizedException({message:"Uncorect password or email"});
    }
}
