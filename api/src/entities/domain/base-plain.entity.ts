import {Column} from 'typeorm';

import {BaseCoreEntity} from './base-core.entity';

export abstract class BasePlainEntity extends BaseCoreEntity
{
    @Column({default: true, select: false})
    isEnabled: boolean;
}
