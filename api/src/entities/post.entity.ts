import {Column, Entity, ManyToOne, ManyToMany} from 'typeorm';

import {BasePlainEntity} from "./domain/base-plain.entity";
import { Category } from './category.entity';
import { Blog } from './blog.entity';

@Entity()
export class Post extends BasePlainEntity
{
    @Column()
    title:string;

    @Column()
    text:string;

    //("YYYY-MM-DD HH:MM:SS.SSS")
    @Column()
    date:string;

    @ManyToMany(type => Category, category => category.posts)
    categories: Category[];

    @ManyToOne(type => Blog, blog => blog.posts)
    blog=Blog;


}