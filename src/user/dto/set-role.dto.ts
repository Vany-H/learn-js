import { ApiProperty } from "@nestjs/swagger";

export class SetRoleUser{

    @ApiProperty({example:'google.email@gmail.com', description:"unique email of user"})
    email:string;
    @ApiProperty({example:'user', description:"future role of user"})
    role:string;
}