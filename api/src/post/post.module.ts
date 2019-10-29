import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Posts } from "src/entities/post.entity";
import { PostController } from "./post.controller";
import { PostRepositoryProvider } from "src/common/repos/post.repository";
import { PostService } from "./post.service";

@Module({
    imports: [ TypeOrmModule.forFeature([Posts]) ],
    providers: [
        PostRepositoryProvider,
        PostService
    ],
    controllers: [ PostController ]
})
export class PostsModule { }