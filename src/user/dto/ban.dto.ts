import { ApiProperty } from "@nestjs/swagger";

export class BanDto{

    @ApiProperty({example:'google.email@gmail.com', description:"unique email of user whose will be banned"})
    email:string;

    @ApiProperty({example:'because you Kutsuck', description:"unique email of user whose will be banned"})
    banReson:string;
}