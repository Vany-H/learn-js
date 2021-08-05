import { ApiProperty } from "@nestjs/swagger";
import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "src/role/role.model";
import { UserRoles } from "src/role/user-rols.model";
import { User } from "src/user/user.model";

interface PostCreationFilds{
    title:string;
    content:string;
    userID:number;
    image:string
}

@Table({tableName:'posts'})
export class Post extends Model<Post, PostCreationFilds>{

    @ApiProperty({example:'1', description:"unique ID of user"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
    id:number;

    @ApiProperty({example:'John', description:"name of user"})
    @Column({type: DataType.STRING, allowNull:false})
    title:string;

    @ApiProperty({example:'google.email@gmail.com', description:"unique email of user"})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    content:string;

    @ApiProperty({example:'example1234', description:"password of user"})
    @Column({type: DataType.STRING, allowNull:false})
    image:string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, unique: true, autoIncrement:true, primaryKey: true})
    userID:number
    @BelongsTo(() => User)
    roles:User;
}