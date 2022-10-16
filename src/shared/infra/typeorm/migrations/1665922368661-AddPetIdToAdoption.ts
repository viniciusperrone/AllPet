import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddPetIdToAdoption1665922368661 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'adoptions',
      new TableColumn({ name: 'pet_id', type: 'uuid' }),
    );

    await queryRunner.createForeignKey(
      'adoptions',
      new TableForeignKey({
        name: 'AdoptionPet',
        columnNames: ['pet_id'],
        referencedTableName: 'pets',
        referencedColumnNames: ['uuid'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('adoptions', 'AdoptionPet');

    await queryRunner.dropColumn('adoptions', 'pet_id');
  }
}
