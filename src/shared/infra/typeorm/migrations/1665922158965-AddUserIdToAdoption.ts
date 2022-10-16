import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddUserIdToAdoption1665922158965 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'adoptions',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'adoptions',
      new TableForeignKey({
        name: 'AdoptionUser',
        columnNames: ['user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['uuid'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('adoptions', 'AdoptionUser');

    await queryRunner.dropColumn('donations', 'user_id');
  }
}
