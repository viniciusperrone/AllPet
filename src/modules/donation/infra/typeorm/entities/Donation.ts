import Pet from '@modules/pets/infra/typeorm/entities/Pet';
import User from '@modules/users/infra/typeorm/entities/User';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('donations')
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
