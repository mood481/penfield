import {
    Get,
    Controller,
    Post,
    Body,
    Param,
    UseInterceptors,
    Put,
    Delete,
    HttpCode,
    HttpStatus,
    NotFoundException, BadRequestException
} from '@nestjs/common';
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';

import {UserService} from './user.service';
import {User, UserData, UserEmail} from "../entities/user.entity";
import {ApiData} from "../common/decorators/apidata.decorator";
import {ParseIdPipe} from "../common/pipes/parse-id.pipe";
import {TransformInterceptor} from "../common/interceptors/transform.interceptor";

@Controller('user')
@ApiUseTags('user')
@Controller('users')
@UseInterceptors(TransformInterceptor)
export class UserController
{
    public constructor(private readonly userService: UserService) {
        //
    }


    @Post('email')
    @ApiOperation({title: 'Check email of User', operationId: 'usersCheckEmail'})
    @ApiData.ResponseOk()
    public checkEmail(@Body() user: UserEmail): Promise<boolean> {
        return this.userService.existsEmail(user && user.email);
    }

    @Get()
    @ApiOperation({title: 'Find all users', operationId: 'usersGetAll'})
    public findAll(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Get(':id')
    @ApiOperation({title: 'Find one User', operationId: 'usersGet'})
    @ApiData.IdParam()
    @ApiData.ResponseOk(User)
    public async findOne(@Param('id', new ParseIdPipe()) id: number): Promise<User> {
        const user = await this.getUser(id);

        return user;
    }

    @Post()
    @ApiOperation({title: 'Create user', operationId: 'usersAdd'})
    @ApiData.ResponseCreated(User, 'User has been successfully created.')
    public create(@Body() body: User): Promise<User> {
        console.log('Creating user...');
        return this.userService.create(body);
    }

    @Put(':id')
    @ApiOperation({title: 'Update User', operationId: 'usersUpdate'})
    @ApiData.IdParam()
    @ApiData.ResponseUpdated(User, 'The User has been successfully updated.')
    public async updateById(@Body() data: UserData,
               @Param('id', new ParseIdPipe()) id: number): Promise<User> {
        const user = await this.getUser(id);

        return this.userService.save(data, id);
    }

    @Put(':id/block')
    @ApiOperation({title: 'Block User', operationId: 'usersBlock'})
    @ApiData.IdParam()
    @ApiData.ResponseOk()
    public async block(@Param('id', new ParseIdPipe()) id: number): Promise<boolean> {
        const user = await this.getUser(id);

        return this.userService.block(user);
    }

    @Put(':id/unblock')
    @ApiOperation({title: 'Unblock User', operationId: 'usersUnblock'})
    @ApiData.IdParam()
    @ApiData.ResponseOk()
    public async unblock(@Param('id', new ParseIdPipe()) id: number): Promise<boolean> {
        const user = await this.getUser(id);

        return this.userService.block(user, true);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({title: 'Delete User', operationId: 'usersDelete'})
    @ApiData.IdParam()
    @ApiData.ResponseDeleted('User has been deleted')
    public delete(@Param('id', new ParseIdPipe()) id: number): Promise<boolean> {
        return this.userService.delete(id);
    }

    protected async getUser(id: number): Promise<User> {
        const user = await this.userService.getOne(id);
        if (!user) {
            throw new NotFoundException('user was not found');
        }

        return user;
    }
}
