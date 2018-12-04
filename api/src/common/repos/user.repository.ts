import {NotFoundException} from '@nestjs/common';
import {Brackets, Connection, EntityManager, EntityRepository, FindConditions, SelectQueryBuilder} from 'typeorm';

import {User} from '../../entities/user.entity';
import {UserRole} from '../../entities/user_role.entity';

export const UserRepositoryProvider = {
    provide: 'UserRepository',
    useFactory: (connection: Connection) => connection.getCustomRepository(UserRepository),
    inject: [Connection]
};

@EntityRepository()
export class UserRepository
{
    public constructor(private manager: EntityManager) {

    }

    public findAll(level?: number): Promise<User[]> {
        return this.getCommonQuery()
            .andWhere('a_role.level = :level', {level: level})
            .getMany();
    }

    public findById(id: number, checkEnabled = true): Promise<User> {
        let where = { id: id} as any;
        if (checkEnabled) {
            where.enabled = true
        }

        return this.manager.findOne(User, {
            relations: ['role'],
            where: where
        });
    }

    public findByEmail(email: string, checkIfEnabled = false): Promise<User> {
        let where = { email: email } as FindConditions<User>;
        if (checkIfEnabled) {
            where.isEnabled = true;
        }
        return this.manager.findOne(User, {where: where, relations: ['role']});
    }

    public searchByEmailOrName(s: string): Promise<User[]> {
        return this.getCommonQuery()
            .andWhere(new Brackets(qb => {
                qb.where('a.email like :search', {search: '%' + s + '%'})
                    .orWhere('a.firstName like :name', {name: '%' + s + '%'})
                    .orWhere('a.lastName like :name', {name: '%' + s + '%'});
            }))
            .select([
                'a.id', 'a.firstName', 'a.lastName', 'a.email', 'a.meta', 'a_role.level'
            ])
            .getMany();
    }

    public save(user: User, id?: number): Promise<User> {
        if (id) {
            user.id = id;
        }

        return this.manager.save(User, user);
    }

    public async disabled(id: number): Promise<User> {
        const u = await this.manager.findOne(User, {
            where: {id: id, isEnabled: true}
        });
        if (!u) {
            throw new NotFoundException('User not found');
        }
        u.isEnabled = false;
        if (!u.meta) {
            u.meta = {};
        }
        if (!Array.isArray(u.meta.emails)) {
            u.meta.emails = [];
        }
        u.meta.emails.push(u.email);
        delete u.email;
        delete u.password;

        return await this.save(u, id);
    }

    public deleteById(id: number): Promise<any> {
        return this.manager.delete(User, id);
    }

    public getRole(level: number): Promise<UserRole> {
        return this.manager.findOne(UserRole, {
            level: level
        })
    }


    private getCommonQuery(): SelectQueryBuilder<User> {
        return this.manager.getRepository(User)
            .createQueryBuilder('a')
            .leftJoinAndSelect('a.role', 'a_role')
            .where('a.isEnabled = :enabled', {enabled: true});
    }
}
