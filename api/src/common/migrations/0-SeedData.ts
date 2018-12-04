import {MigrationInterface, QueryRunner} from "typeorm";

export class SeedData implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO \`user_role\` (\`id\`, \`level\`, \`description\`) 
            VALUES (1,10,'admin'),
                   (2,1,'user');`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`TRUNCATE table \`user_role\`;`);
    }

}
