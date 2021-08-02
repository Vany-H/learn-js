import { Module } from "@nestjs/common";
import { AppContrller } from "./app.controller";

@Module({
    controllers: [AppContrller],
})
export class AppModul{

}