import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreatePostDto{
    
    @ApiProperty({example:'John', description:"name of user"})
    title:string;

    @ApiProperty({example:'google.email@gmail.com', description:"unique email of user"})
    content:string;

    @ApiProperty({example:'example1234', description:"password of user"})
    userID:number;
}