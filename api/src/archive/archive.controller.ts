import { Controller, Post, Get, Put, Delete, Param, Body } from "@nestjs/common";
import { ArchiveService } from "./archive.service";
import { Archive } from "src/entities/archive.entity";

@Controller('archive')
export class ArchiveController {
    constructor(private readonly archiveService: ArchiveService) { }

    @Get(':id')
    public async findOne(@Param('id') id: number): Promise<Archive> {
        return await this.archiveService.findOne(id);
    }

    @Post()
    public create(@Body() body: Archive): Promise<Archive> {
        return this.archiveService.create(body);
    }

    @Put()
    public modify(@Body() body: Archive): Promise<Archive> {
        return this.archiveService.modify(body);
    }

    @Delete(':id')
    public delete(@Param('id') id: number): Promise<any> {
        return this.archiveService.deleteById(id);
    }
}