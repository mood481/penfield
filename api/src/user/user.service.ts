import { Injectable, Inject } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { UserRepository } from "src/common/repos/user.repository";

@Injectable()
export class UserService {
    public constructor(
        @Inject(UserRepository)
        private readonly userRepository: UserRepository
    ) { }

    //@get
    public async getAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }

    getUser(id: number): Promise<User> {
        return this.userRepository.findById(id);
    }

    //@post
    createUser(user: User): Promise<User> {
        const miliseconds = Date.now();
        user = new User();
        user.firstName = "nombre" + miliseconds;
        user.lastName = "apellido" + miliseconds;
        user.email = miliseconds + "@prueba.com"
        return this.userRepository.save(user);
    }

    //@put
    modifyUser() { }

    //@delete
    deleteUser() { }

}