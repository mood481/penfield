import { Module } from "@nestjs/common";
import { ArchiveController } from "./archive.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Archive } from "src/entities/archive.entity";
import { ArchiveRepositoryProvider } from "src/common/repos/archive.repository";
import { ArchiveService } from "./archive.service";

@Module({
    imports: [TypeOrmModule.forFeature([Archive])],
    providers: [
        ArchiveRepositoryProvider,
        ArchiveService
    ],
    controllers: [ArchiveController]
})
export class ArchiveModule { }
