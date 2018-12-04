import {Column, Entity, ManyToOne} from 'typeorm';
import {ApiModelProperty, ApiModelPropertyOptional} from '@nestjs/swagger';

import {BasePlainEntity} from "./domain/base-plain.entity";
import {UserRole} from "./user_role.entity";

@Entity()
export class User extends BasePlainEntity
{
    @ApiModelProperty()
    @Column()
    firstName: string;

    @ApiModelProperty()
    @Column()
    lastName: string;

    @ApiModelProperty()
    @Column({unique: true})
    email: string;

    @ApiModelProperty()
    @Column({nullable: true})
    password: string;

    @ApiModelProperty()
    @Column({default: false})
    isBlocked: boolean;

    @ApiModelPropertyOptional()
    @ManyToOne(type => UserRole, role => role.users)
    role: UserRole;

    @ApiModelPropertyOptional()
    @Column({type: 'json', default: null})
    meta: any;
}

export abstract class UserData
{
    @ApiModelProperty()
    firstName: string;

    @ApiModelProperty()
    lastName: string;

    @ApiModelPropertyOptional()
    meta?: any;
}

export abstract class UserEmail
{
    @ApiModelProperty()
    email: string;
}
