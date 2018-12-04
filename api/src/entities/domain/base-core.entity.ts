import {PrimaryGeneratedColumn} from 'typeorm';
import {ApiModelPropertyOptional} from '@nestjs/swagger';

export abstract class BaseCoreEntity
{
    @ApiModelPropertyOptional()
    @PrimaryGeneratedColumn()
    id: number;
}
