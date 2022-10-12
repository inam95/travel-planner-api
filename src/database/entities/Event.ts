import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { Plan } from './Plan';
import { User } from './User';

@Entity({ name: 'events' })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  time: string;

  @Column()
  hour: number;

  @Column()
  title: string;

  @ManyToOne(() => Plan, plan => plan.events)
  plan: Plan;
}
