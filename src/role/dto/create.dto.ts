import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto{

    @ApiProperty({example:'admin', description:"role of user"})
    readonly value:string;
    
    @ApiProperty({example:'god of this site', description:"unique email of user"})
    readonly description:string;
}