import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./user/user.model";
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { Role } from "./role/role.model";
import { UserRoles } from "./role/user-rols.model";
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { Post } from "./post/post.model";
import { FileModule } from './file/file.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from 'path';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models:[User, Role, UserRoles, Post],
            autoLoadModels: true
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static') 
        }),
        UserModule,
        RoleModule,
        AuthModule,
        PostModule,
        FileModule
    ]
})
export class AppModul{

}