import { Injectable, Inject } from "@nestjs/common";
import { ArchiveRepository } from "src/common/repos/archive.repository";
import { Archive } from "src/entities/archive.entity";

@Injectable()
export class ArchiveService {
    public constructor(
        @Inject(ArchiveRepository)
        private readonly archiveRepository: ArchiveRepository
    ) { }

    //@get
    public findOne(id: number): Promise<Archive> {
        return this.archiveRepository.findById(id);
    }

    //@post
    public create(archive: Archive): Promise<Archive> {
        return this.archiveRepository.save(archive);
    }

    //@put
    public modify(archive: Archive): Promise<Archive> {
        return this.archiveRepository.save(archive);
    }

    //@delete
    public deleteById(id: number): Promise<any> {
        return this.archiveRepository.deleteById(id);
    }
}