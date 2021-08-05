import { ApiProperty } from "@nestjs/swagger";
import {BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/user/user.model";
import { Role } from "./role.model";

@Table({tableName:'user-roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles>{

    @ApiProperty({example:'1', description:"unique ID of user"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
    id:number;

    @ApiProperty({example:'admin', description:"role of user"})
    @ForeignKey(()=>Role)
    roleID:number;

    @ApiProperty({example:'god of this site', description:"unique email of user"})
    @ForeignKey(()=>User)
    @Column({type: DataType.INTEGER, allowNull:true})
    userID:number;
}