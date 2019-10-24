import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Events } from "src/entities/events.entity";
import { EventsRepositoryProvider } from "src/common/repos/events.repository";
import { EventsService } from "./events.service";
import { EventsController } from "./events.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([Events])
    ],
    providers: [
        EventsRepositoryProvider,
        EventsService
    ],
    controllers: [EventsController]
})
export class EventsModule { }