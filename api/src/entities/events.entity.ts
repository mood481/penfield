import { Column, Entity, ManyToMany, JoinTable, OneToMany } from 'typeorm';

import { BaseCoreEntity } from './domain/base-core.entity';
import { User } from './user.entity';

@Entity()
export class Events extends BaseCoreEntity {
    @Column()
    name: string;

    @Column()
    description: string;

    //(SQLite no soporta date,"YYYY-MM-DD HH:MM:SS.SSS")
    @Column("simple-array")
    dates: string[];

    @OneToMany(type => User, user => user.myEvents)
    mainUser: User;

    @ManyToMany(type => User, user => user.invitedEvents)
    @JoinTable()
    invitedUsers: User[];

}