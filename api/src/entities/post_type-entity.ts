import { Column, Entity, OneToMany } from 'typeorm';

import { Post } from './post.entity';
import { BaseCoreEntity } from './domain/base-core.entity';


@Entity()
export class PostType extends BaseCoreEntity {
    @Column({ unique: true })
    name: string;

    @OneToMany(type => Post, post => post.postType)
    posts: Post[];

}