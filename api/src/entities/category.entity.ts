import {Column, Entity, ManyToOne, ManyToMany, JoinTable} from 'typeorm';

import {BasePlainEntity} from "./domain/base-plain.entity";
import { Post } from './post.entity';
import { Blog } from './blog.entity';

@Entity()
export class Category extends BasePlainEntity
{
    @Column()
    name:string;

    @ManyToMany(type => Post, post => post.categories)
    @JoinTable()
    posts: Post[];

    @ManyToMany(type => Blog, blog => blog.categories)
    blogs: Blog[];
}