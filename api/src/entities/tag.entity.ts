import {Column, Entity, OneToMany} from 'typeorm';

import {User} from './user.entity';
import {BaseCoreEntity} from './domain/base-core.entity';

@Entity()
export class Tag extends BaseCoreEntity
{
    @Column({unique: true, type: 'smallint'})
    name:string;
}
