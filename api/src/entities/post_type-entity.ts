import { Column, Entity, OneToMany } from 'typeorm';

import { Posts } from './post.entity';
import { BaseCoreEntity } from './domain/base-core.entity';


@Entity()
export class PostType extends BaseCoreEntity {
    @Column({ unique: true })
    name: string;

    @OneToMany(type => Posts, post => post.postType)
    posts: Posts[];

}