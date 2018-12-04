import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {User} from '../entities/user.entity';
import {UserService} from './user.service';
import {UserController} from './user.controller';
import {UserRole} from "../entities/user_role.entity";
import {UserRepositoryProvider} from "../common/repos/user.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([User, UserRole])
    ],
    providers: [UserRepositoryProvider, UserService],
    controllers: [UserController],
})
export class UserModule
{

}
