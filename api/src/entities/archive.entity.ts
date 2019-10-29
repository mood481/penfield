import { Column, Entity, ManyToMany, JoinTable } from 'typeorm';

import { Posts } from './post.entity';
import { BasePlainEntity } from './domain/base-plain.entity';

@Entity()
export class Archive extends BasePlainEntity {
    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ unique: true })
    location: string;

    @ManyToMany(type => Posts, post => post.files)
    @JoinTable()
    posts: Posts[];

}