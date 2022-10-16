import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddPetIdToDonation1665894163946 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'donations',
      new TableColumn({
        name: 'pet_id',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'donations',
      new TableForeignKey({
        name: 'DonationPet',
        columnNames: ['pet_id'],
        referencedTableName: 'pets',
        referencedColumnNames: ['uuid'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('donations', 'DonationPet');

    await queryRunner.dropColumn('donations', 'pet_id');
  }
}
