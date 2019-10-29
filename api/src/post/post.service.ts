import { Injectable, Inject } from "@nestjs/common";
import { PostRepository } from "src/common/repos/post.repository";
import { Posts } from "src/entities/post.entity";

@Injectable()
export class PostService{
    public constructor(
        @Inject(PostRepository)
        private readonly postRepository: PostRepository
    ) { }

    //@get
    public getOne(id:number):Promise<Posts>{
        return this.postRepository.findById(id);
    }

    //@post
    public create(post:Posts):Promise<Posts>{
        return this.postRepository.save(post);
    }

    //@put
    public modify(post:Posts):Promise<Posts>{
        return this.postRepository.save(post);
    }

    //@delete
    public delete(id:number):Promise<any>{
        return this.postRepository.deleteById(id);
    }
}