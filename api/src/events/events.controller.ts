import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { EventsService } from "./events.service";
import { Events } from "src/entities/events.entity";


@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) { }

    @Get()
    public async findAll(): Promise<Events[]> {
        const events = await this.eventsService.getAll();
        return events;
    }

    @Get(':id')
    public findOne(@Param('id') id: number): Promise<Events> {
        return this.eventsService.getOne(id);
    }

    @Post()
    public save(@Body() events: Events): Promise<Events> {
        return this.eventsService.save(events);
    }

    @Put()
    public modify(@Body() events: Events): Promise<Events> {
        return this.eventsService.save(events);
    }

    @Delete(':id')
    public delete(@Param('id') id: number): Promise<boolean> {
        return this.eventsService.delete(id);
    }
}