import {Column, Entity, ManyToOne} from "typeorm";

import {UserRole} from "./user_role.entity";
import {BasePlainEntity} from "./domain/base-plain.entity";

@Entity()
export class User extends BasePlainEntity{

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({unique: true})
    email: string;

    @Column({nullable: true})
    password: string;

    @Column({default: false})
    isBlocked: boolean;

    @ManyToOne(type => UserRole, role => role.users)
    role: UserRole;

    @Column({type: 'simple-json', default: null})
    meta: any;

}

export abstract class UserData
{
    firstName: string;

    lastName: string;

    meta?: any;
}

export abstract class UserEmail
{
    email: string;
}