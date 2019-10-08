import {Column, Entity, ManyToOne, OneToMany, ManyToMany, JoinTable} from 'typeorm';

import {BasePlainEntity} from "./domain/base-plain.entity";
import { Post } from './post.entity';
import { Category } from './category.entity';

@Entity()
export class Blog extends BasePlainEntity
{
    @Column()
    title:string;

    @Column()
    description:string;

    @OneToMany(type=>Post,post=>post.blog)
    posts: Post[];

    @ManyToMany(type => Category, category => category.blogs)
    @JoinTable()
    categories: Category[];


}