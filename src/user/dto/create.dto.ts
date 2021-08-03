import { ApiProperty } from "@nestjs/swagger";

export class FieldToCreateUserDto{

    @ApiProperty({example:'John', description:"name of user"})
    name:string;
    @ApiProperty({example:'google.email@gmail.com', description:"unique email of user"})
    email:string;
    @ApiProperty({example:'example1234', description:"password of user"})
    password:string;
}