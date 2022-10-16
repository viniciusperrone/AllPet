import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('donations')
class Donation {
  @PrimaryColumn('uuid')
  uuid: string;

  @Column('uuid')
  user_id: string;

  @Column('uuid')
  pet_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Donation;
