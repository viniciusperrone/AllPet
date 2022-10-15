import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';
import Pet from '@modules/pets/infra/typeorm/entities/Pet';

@Entity('pets')
class Donation {
  @PrimaryColumn('uuid')
  uuid: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToOne(() => Pet)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Donation;
