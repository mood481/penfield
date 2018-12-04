import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {UserModule} from "./user/user.module";
import {PostModule} from "./resources/post/post.module";

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        UserModule,
        PostModule
    ],
})
export class AppModule
{

}
