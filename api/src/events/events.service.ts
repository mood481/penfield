import { Injectable, Inject } from "@nestjs/common";
import { EventsRepository } from "src/common/repos/events.repository";
import { Events } from "src/entities/events.entity";

@Injectable()
export class EventsService {
    public constructor(
        @Inject(EventsRepository)
        private readonly eventsRepository: EventsRepository) { }

    //@get
    public async getAll(): Promise<Events[]> {
        return await this.eventsRepository.findAll();
    }

    public getOne(id:number):Promise<Events>{
        return this.eventsRepository.findById(id);
    }

    //@post
    public save(events:Events):Promise<Events>{
        return this.eventsRepository.save(events);
    }

    //@put
    public modify(events:Events):Promise<Events>{
        return this.eventsRepository.save(events);
    }

    //@delete
    public delete(id:number):Promise<boolean>{
        return this.eventsRepository.deleteById(id);
    }
}