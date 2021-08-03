import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppContrller } from "./app.controller";
import { AppService } from "./app.providers";

@Module({
    controllers: [AppContrller],
    providers: [AppService],
    imports: [
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'example',
            database: 'postgres',
            models:[],
            // autoLoadModels: true
        })
    ]
})
export class AppModul{

}