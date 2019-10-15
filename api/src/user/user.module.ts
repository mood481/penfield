import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { UserRole } from "src/entities/user_role.entity";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([User, UserRole])
    ],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule { }