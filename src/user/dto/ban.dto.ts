import { ApiProperty } from "@nestjs/swagger";

export class BanDto{

    @ApiProperty({example:'google.email@gmail.com', description:"unique email of user whose will be banned"})
    email:string;
}