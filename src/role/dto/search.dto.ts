import { ApiProperty } from "@nestjs/swagger";

export class SearchRoleDto{

    @ApiProperty({example:'admin', description:"role of user"})
    readonly value:string;
}