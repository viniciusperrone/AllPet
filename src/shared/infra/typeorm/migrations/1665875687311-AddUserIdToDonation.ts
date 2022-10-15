import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddUserIdToDonation1665875687311 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'donations',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'donations',
      new TableForeignKey({
        name: 'DonationUser',
        columnNames: ['user_id'],
        referencedTableName: 'users',
        referencedColumnNames: ['uuid'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('donations', 'DonationUser');

    await queryRunner.dropColumn('donations', 'user_id');
  }
}
