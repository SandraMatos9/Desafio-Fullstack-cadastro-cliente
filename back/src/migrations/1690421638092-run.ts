import { MigrationInterface, QueryRunner } from "typeorm";

export class Run1690421638092 implements MigrationInterface {
    name = 'Run1690421638092'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD "password" character varying NOT NULL`);
    }

}
