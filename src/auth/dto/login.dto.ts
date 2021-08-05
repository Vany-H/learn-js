import { ApiProperty } from "@nestjs/swagger";

export class AuthsLoginDto{

    @ApiProperty({example:'google.email@gmail.com', description:"unique email of user"})
    email:string;
    @ApiProperty({example:'example1234', description:"password of user"})
    password:string;
}