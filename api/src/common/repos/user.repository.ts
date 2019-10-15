import { EntityRepository, EntityManager, Connection } from "typeorm";
import { User } from "src/entities/user.entity";

export const UserRepositoryProvider = {
    provide: 'UserRepository',
    useFactory: (connection: Connection) => connection.getCustomRepository(UserRepository),
    inject: [Connection]
}

@EntityRepository()
export class UserRepository {
    public constructor(private manager: EntityManager) { }

    public findAll(): Promise<User[]> {
        return this.manager.getRepository(User).find();
    }

    public findById(id: number, checkEnabled = true): Promise<User> {
        let where = { id: id } as any;
        if (checkEnabled) {
            where.enabled = true;
        }

        return this.manager.findOne(User, {
            where: where
        });
    }

    public save(user: User): Promise<User> {
        return this.manager.save(User, user);
    }

}