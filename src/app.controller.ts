import { Controller, Get } from "@nestjs/common";
// import { AppProviders } from "./app.providers";

@Controller('/api/v1')
export class AppContrller{
    
    // constructor(private AppProviders:AppProviders){}

    @Get("/getData")
    getUsers(){
        // return this.AppProviders.getData()
        return "data";
    }
}