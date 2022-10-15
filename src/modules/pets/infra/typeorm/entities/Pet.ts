import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('pets')
class Pet {
  @PrimaryColumn('uuid')
  uuid: string;

  @Column()
  name: string;

  @Column()
  cellphone: string;

  @Column()
  description: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Pet;
