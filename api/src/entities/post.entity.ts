import { Column, Entity, ManyToOne, ManyToMany } from 'typeorm';

import { BasePlainEntity } from "./domain/base-plain.entity";
import { Category } from './category.entity';
import { PostType } from './post_type-entity';
import { Archive } from './archive.entity';

@Entity()
export class Post extends BasePlainEntity {
    @Column()
    title: string;

    @Column()
    text: string;

    //("YYYY-MM-DD HH:MM:SS.SSS")
    @Column()
    date: string;

    @ManyToMany(type => Category, category => category.posts)
    categories: Category[];

    @ManyToMany(type => Archive, archive => archive.posts)
    files: Archive[];

    @ManyToOne(type => PostType, postType => postType.posts)
    postType = PostType;

}