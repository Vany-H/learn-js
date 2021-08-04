import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class FieldToCreateUserDto{
    
    @ApiProperty({example:'John', description:"name of user"})
    @IsString({message:"must be string"})
    name:string;

    @ApiProperty({example:'google.email@gmail.com', description:"unique email of user"})
    @IsString({message:"must be string"})
    @IsEmail({},{message:"it's must be email"})
    email:string;

    @ApiProperty({example:'example1234', description:"password of user"})
    @IsString({message:"must be string"})
    @Length(4, 16, {message:"length must be smaller 16 and bigger than 4"})
    password:string;
}