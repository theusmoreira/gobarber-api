import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddWhatsappFieldInUsers1607044634982
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'whatsapp',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'whatsapp');
  }
}
