import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { ROLES_KEY } from "./auth-role.decoration";

@Injectable()
export class RoleGuard implements CanActivate{

    constructor(private jwtService:JwtService, private reflector:Reflector){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        try{
            const getRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(), 
                context.getClass()
            ]);

            if(!getRoles){
                return true;
            }

            const request = context.switchToHttp().getRequest()

            const headerOfAuth = request.headers.authorization;
            const bearer = headerOfAuth.split(' ')[0];
            const token = headerOfAuth.split(' ')[1];

            if(!bearer || bearer !== "Bearer" || !token){
                throw new UnauthorizedException({message:"User unauthorization"});
            }
            
            const user = this.jwtService.verify(token);
            request.user = user;

            return user.roles.some(role => getRoles.includes(role.value));
        } catch{
            throw new UnauthorizedException({message:"No acsess"});
        }
    }
}