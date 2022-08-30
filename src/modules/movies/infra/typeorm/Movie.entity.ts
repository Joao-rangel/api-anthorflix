import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  title: string;

  @Column()
  year: number;

  @Column({default: 0})
  rate: number;

  @Column()
  genre: string;

  @Column()
  director: string;

  @Column()
  actors: string;

  @Column()
  runtime: string;

  @Column()
  poster: string;

  @Column()
  plot: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
