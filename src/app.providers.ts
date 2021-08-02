import { Injectable } from "@nestjs/common";

@Injectable()
export class AppProviders{

    getData(){
        return 'data';
    }
}