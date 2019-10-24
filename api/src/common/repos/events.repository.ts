import { EntityRepository, Connection, EntityManager } from "typeorm";
import { Events } from "src/entities/events.entity";

export const EventsRepositoryProvider = {
    provide: 'EventsRepository',
    useFactory: (connection: Connection) => connection.getCustomRepository(EventsRepository),
    inject: [Connection]
};

@EntityRepository()
export class EventsRepository {
    public constructor(private manager: EntityManager) { }

    public findAll(): Promise<Events[]> {
        return this.manager.getRepository(Events).find();
    }

    public findById(id: number): Promise<Events> {
        return this.manager.findOne(Events, id);
    }

    public save(events: Events): Promise<Events> {
        return this.manager.save(events);
    }

    public deleteById(id: number): Promise<any> {
        return this.manager.delete(Events, id);
    }
}