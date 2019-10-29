import { EntityRepository, Connection, EntityManager } from "typeorm";
import { Posts } from "src/entities/post.entity";

export const PostRepositoryProvider = {
    provide: 'PostRepository',
    useFactory: (connection: Connection) => connection.getCustomRepository(PostRepository),
    inject: [Connection]
}

@EntityRepository()
export class PostRepository {
    public constructor(private manager: EntityManager) { }

    public findById(id:number):Promise<Posts>{
        return this.manager.getRepository(Posts).findOne(id);
    }

    public save(post:Posts):Promise<Posts>{
        return this.manager.save(post);
    }

    public deleteById(id:number):Promise<any>{
        return this.manager.delete(Posts,id);
    }
}