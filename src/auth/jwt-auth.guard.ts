import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate{

    constructor(private jwtService:JwtService){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        try{
            const headerOfAuth = request.headers.authorization;
            const bearer = headerOfAuth.split(' ')[0];
            const token = headerOfAuth.split(' ')[1];

            if(!bearer || bearer !== "Bearer" || !token){
                throw new UnauthorizedException({message:"User nauthorization"});
            }

            const user = this.jwtService.verify(token);
            request.user = user;
            return true;
        } catch{
            throw new UnauthorizedException({message:"User nauthorization"});
        }
    }

}