import { Column, Entity, ManyToMany, JoinTable } from 'typeorm';

import { Posts } from './post.entity';
import { BaseCoreEntity } from './domain/base-core.entity';

@Entity()
export class Category extends BaseCoreEntity {
    @Column({ unique: true })
    name: string;

    @ManyToMany(type => Posts, post => post.categories)
    @JoinTable()
    posts: Posts[];

}