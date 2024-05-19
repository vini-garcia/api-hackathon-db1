import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1716072040344 implements MigrationInterface {
    name = 'InitialMigration1716072040344'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "category" character varying(255) NOT NULL, "price" integer NOT NULL, "img" character varying(255) NOT NULL, "description" character varying(255) NOT NULL, "inStock" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
