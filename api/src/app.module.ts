import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from "./user/user.module";
import { EventsModule } from './events/events.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UserModule,
        EventsModule
    ]
})
export class AppModule { }
