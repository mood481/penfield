import {PrimaryGeneratedColumn} from 'typeorm';

export abstract class BaseCoreEntity
{
    @PrimaryGeneratedColumn()
    id: number;
}
