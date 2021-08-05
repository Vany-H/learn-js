import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FileService } from 'src/file/file.service';
import { CreatePostDto } from './dto/create.post.dto';
import { Post } from './post.model';

@Injectable()
export class PostService {

    constructor (@InjectModel(Post) private postModel : typeof Post,
        private fileService : FileService
    ){}

    async create(dto:CreatePostDto, image){
        const imageWay = await this.fileService.createFile(image);
        const post = await this.postModel.create({...dto, image:imageWay})
        return post; 
    }
}
