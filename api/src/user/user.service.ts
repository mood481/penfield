import {BadRequestException, ConflictException, Inject, Injectable, NotFoundException} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import {UserRepository} from "../common/repos/user.repository";
import {User, UserData} from "../entities/user.entity";
import {UserRole} from "../entities/user_role.entity";

@Injectable()
export class UserService
{
    public constructor(
        @Inject('UserRepository')
        private readonly userRepository: UserRepository
    ) { }

    public async getAll(): Promise<User[]> {
        return await this.userRepository.findAll(UserRole.LEVEL_USER);
    }

    public getOne(id: number): Promise<User> {
        return this.userRepository.findById(id);
    }

    public getByEmail(email: string): Promise<User> {
        return this.userRepository.findByEmail(email);
    }

    public async existsEmail(email: string): Promise<boolean> {
        let user = await this.userRepository.findByEmail(email);

        return (user) ? Promise.resolve(true) : Promise.resolve(false);
    }

    public async search(s: string): Promise<User[]> {
        return await this.userRepository.searchByEmailOrName(s);
    }

    public async create(u: User): Promise<User> {
        // Check if the user exists looking for the email
        const userFound = await this.getByEmail(u.email);
        if (userFound) {
            throw new ConflictException('The user already exists');
        }

        // Users will be assigned by default to user role
        const role = await this.userRepository.getRole(UserRole.LEVEL_USER);
        if (!role) {
            throw new ConflictException('UserRole client not found');
        }

        let user = {...u};
        user.password = await bcrypt.hash(user.password, 10);
        user.role = role;

        return this.userRepository.save(user);
    }

    public save(data: UserData, id: number): Promise<User> {
        let u = new User();
        u.id = id;
        u.firstName = data.firstName;
        u.lastName = data.lastName;
        u.meta = data.meta;

        return this.userRepository.save(u);
    }

    public async block(user: User, unblock = false): Promise<boolean> {
        user.isBlocked = !unblock;
        await this.userRepository.save(user);

        return true;
    }

    public async delete(id: number): Promise<boolean> {
        let user = await this.userRepository.disabled(id);

        return user.isEnabled;
    }
}
