import { Connection, EntityRepository, EntityManager } from "typeorm";
import { Archive } from "src/entities/archive.entity";

export const ArchiveRepositoryProvider = {
    provide: 'ArchiveRepository',
    useFactory: (connection: Connection) => connection.getCustomRepository(ArchiveRepository),
    inject: [Connection]
}

@EntityRepository()
export class ArchiveRepository {
    public constructor(private manager: EntityManager) { }

    public findById(id: number): Promise<Archive> {
        return this.manager.getRepository(Archive).findOne(id);
    }

    public save(archive: Archive): Promise<Archive> {
        return this.manager.save(Archive, archive);
    }

    public deleteById(id: number): Promise<any> {
        return this.manager.delete(Archive, id);
    }
}