import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.providers";

@Controller('/api/v1')
export class AppContrller{
    
    constructor(private AppSevice:AppService){}

    @Get("/getData")
    getUsers(){
        return this.AppSevice.getData()
        // return "data";
    }
}