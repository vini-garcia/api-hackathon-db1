import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1716079458005 implements MigrationInterface {
    name = 'InitialMigration1716079458005'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" TYPE numeric(10,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" TYPE numeric(3,2)`);
    }

}
