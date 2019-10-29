import { Module, Post } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from "./user/user.module";
import { EventsModule } from './events/events.module';
import { ArchiveModule } from './archive/archive.module';
import { PostsModule } from './post/post.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UserModule,
        PostsModule,
        EventsModule,
        ArchiveModule
    ]
})
export class AppModule { }
