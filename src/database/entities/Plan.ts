import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  ManyToMany
} from 'typeorm';
import { Event } from './Event';
import { User } from './User';

@Entity({ name: 'plans' })
export class Plan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, user => user.plans)
  creator: User;

  @OneToMany(() => Event, event => event.plan)
  @JoinColumn()
  events: Event[];

  @ManyToMany(() => User, user => user.plans)
  users: User[];
}
