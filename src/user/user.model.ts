import { ApiProperty } from "@nestjs/swagger";
import {BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/role/role.model";
import { UserRoles } from "src/role/user-rols.model";

interface UserCreationFilds{
    name:string;
    email:string;
    password:string;
}

@Table({tableName:'users'})
export class User extends Model<User, UserCreationFilds>{

    @ApiProperty({example:'1', description:"unique ID of user"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
    id:number;

    @ApiProperty({example:'John', description:"name of user"})
    @Column({type: DataType.STRING, allowNull:false})
    name:string;

    @ApiProperty({example:'google.email@gmail.com', description:"unique email of user"})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    email:string;

    @ApiProperty({example:'example1234', description:"password of user"})
    @Column({type: DataType.STRING, allowNull:false})
    password:string;

    @ApiProperty({example:'true', description:"status (ban / not ban) of user"})
    @Column({type: DataType.BOOLEAN, defaultValue:false})
    banStatus:boolean;

    @ApiProperty({example:'Because you Kutzak', description:"Reson of ban"})
    @Column({type: DataType.STRING, allowNull:true})
    banReson:string

    @BelongsToMany(()=>Role, ()=>UserRoles)
    roles:Role[];
}