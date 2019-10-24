import { EntityRepository, Connection, EntityManager } from "typeorm";

export const PostRepositoryProvider = {
    provide: 'PostRepository',
    useFactory: (connection: Connection) => connection.getCustomRepository(PostRepository),
    inject: [Connection]
}

@EntityRepository()
export class PostRepository {
    public constructor(private manager: EntityManager) { }

    
}