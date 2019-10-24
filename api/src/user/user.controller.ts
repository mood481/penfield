import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from "@nestjs/common";
import { UserService } from "./user.service";
import { User, UserData, UserEmail } from "src/entities/user.entity";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    public async findAll(): Promise<User[]> {
        const users = await this.userService.getAll();
        return users;
    }

    @Get(':id')
    public async findOne(@Param('id') id: number): Promise<User> {
        const user = await this.getUser(id);
        return user;
    }

    @Post()
    public create(@Body() body: User): Promise<User> {
        return this.userService.create(body);
    }

    @Post('email')
    public checkEmail(@Body() user: UserEmail): Promise<boolean> {
        return this.userService.existsEmail(user && user.email);
    }

    @Put(':id')
    public async updateById(@Body() data: UserData,
               @Param('id') id: number): Promise<User> {
        const user = await this.getUser(id);

        return this.userService.save(data, id);
    }

    @Put(':id/block')
    public async block(@Param('id') id: number): Promise<boolean> {
        const user = await this.getUser(id);

        return this.userService.block(user);
    }

    @Put(':id/unblock')
    public async unblock(@Param('id') id: number): Promise<boolean> {
        const user = await this.getUser(id);

        return this.userService.block(user, true);
    }

    @Delete(':id')
    public delete(@Param('id')id:number): Promise<boolean> {
        return this.userService.delete(id);
    }

    protected async getUser(id:number):Promise<User>{
        const user=await this.userService.getOne(id);
        if (!user) {
            throw new NotFoundException('user was not found');
        }

        return user;
    }
}