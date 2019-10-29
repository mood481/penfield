import { Controller, Get, Put, Delete, Param, Post, Body } from "@nestjs/common";
import { PostService } from "./post.service";
import { Posts } from "src/entities/post.entity";

@Controller('post')
export class PostController{
    constructor(private readonly postService: PostService) { }

    @Get(':id')
    public async findOne(@Param('id')id:number):Promise<Posts>{
        const posts=await this.postService.getOne(id);
        return posts;
    }

    @Post()
    public create(@Body()body:Posts):Promise<Posts>{
        return this.postService.create(body);
    }

    @Put()
    public update(@Body()body:Posts):Promise<Posts>{
        return this.postService.modify(body);
    }

    @Delete('id')
    public delete(@Param()id:number):Promise<any>{
        return this.postService.delete(id);
    }
}
