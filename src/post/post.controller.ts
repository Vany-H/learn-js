import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from './dto/create.post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

    constructor(private postService:PostService){}

    @Post("/createPost")
    @UseInterceptors(FileInterceptor('image'))
    createPosts(@Body() dto:CreatePostDto, @UploadedFile() image){
        return this.postService.create(dto, image);
    }
}
