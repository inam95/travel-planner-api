import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Plan } from './Plan';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  @Exclude()
  password: string;

  @OneToMany(() => Plan, plan => plan.user)
  @JoinColumn()
  plans: Plan[];
}
