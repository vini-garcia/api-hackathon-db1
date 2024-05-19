import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1716072583064 implements MigrationInterface {
    name = 'InitialMigration1716072583064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "createdAt"`);
    }

}
