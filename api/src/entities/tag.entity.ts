import { Column, Entity } from 'typeorm';

import { BaseCoreEntity } from './domain/base-core.entity';

@Entity()
export class Tag extends BaseCoreEntity {
    @Column({ unique: true })
    name: string;
}
