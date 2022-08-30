import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class createMovies1661630117696 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'year',
            type: 'numeric',
            isNullable: false,
          },
          {
            name: 'rate',
            type: 'numeric',
            isNullable: false,
            default: 0,
          },
          {
            name: 'genre',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'director',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'actors',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'runtime',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'poster',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'plot',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
  }
}
