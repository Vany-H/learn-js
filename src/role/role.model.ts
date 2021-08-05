import { ApiProperty } from "@nestjs/swagger";
import {BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/user/user.model";
import { UserRoles } from "./user-rols.model";

interface RoleFields{
    value:string;
    description:string;
}

@Table({tableName:'roles'})
export class Role extends Model<Role, RoleFields>{

    @ApiProperty({example:'1', description:"unique ID of user"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
    id:number;

    @ApiProperty({example:'admin', description:"role of user"})
    @Column({type: DataType.STRING, allowNull:false})
    value:string;

    @ApiProperty({example:'god of this site', description:"unique email of user"})
    @Column({type: DataType.STRING, allowNull:true})
    description:string;

    @BelongsToMany(()=>User, ()=>UserRoles)
    user:User[];
}