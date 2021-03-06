import {Column, Entity, OneToMany} from 'typeorm';
import {ApiModelProperty, ApiModelPropertyOptional} from '@nestjs/swagger';

import {User} from './user.entity';
import {BaseCoreEntity} from './domain/base-core.entity';

@Entity()
export class UserRole extends BaseCoreEntity
{
    @ApiModelProperty()
    @Column({unique: true, type: 'smallint'})
    level: number;

    @ApiModelPropertyOptional()
    @Column()
    description: string;

    @OneToMany(type => User, user => user.role)
    users: User[];

    public static readonly LEVEL_USER = 1;
    public static readonly LEVEL_ADMIN = 10;
}
