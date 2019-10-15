import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "src/entities/user.entity";

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    public async findAll(): Promise<User[]> {
        const users = await this.userService.getAll();
        console.log("users", users);
        return users;
    }

    @Get(':id')
    public async getUser(@Param('id') id: number): Promise<User> {
        const user = await this.getUser(id);
        console.log("user", user);
        return user;
    }

    @Post()
    public createUser(@Body() body: User): Promise<User> {
        console.log('Creating user...');
        return this.userService.createUser(body);
    }

    @Put()
    public modifyUser() {

    }

    @Delete(':id')
    public deleteUser() {

    }
}