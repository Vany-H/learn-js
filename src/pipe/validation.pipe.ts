import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ValidationError } from "sequelize";
import { ValidateExeptions } from "src/exeptions/validate.exeptions";


@Injectable()
export class ValidationPipe implements PipeTransform<any>{
    async transform(value: any, metadata: ArgumentMetadata) {
        const obj = plainToClass(metadata.metatype, value);
        const error = await validate(obj);

        if(error.length){
            const message = error.map(err => {
                return `${err.value} -- ${Object.values(err.constraints).join(", ")}`
            })
            throw new ValidateExeptions(message)
        }

    }

}