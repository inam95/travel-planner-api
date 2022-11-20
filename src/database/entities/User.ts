import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Plan } from './Plan';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ select: false })
  @Exclude()
  password: string;

  @OneToMany(() => Plan, plan => plan.creator)
  @JoinColumn()
  createdPlans: Plan[];

  @ManyToMany(() => Plan, plan => plan.users)
  @JoinTable()
  plans: Plan[];
}
