import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FileModule } from 'src/file/file.module';
import { User } from 'src/user/user.model';
import { PostController } from './post.controller';
import { Post } from './post.model';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports:[
    SequelizeModule.forFeature([User, Post]),
    FileModule
  ]
})
export class PostModule {}
