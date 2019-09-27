import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  road: string;

  @Column()
  sensor_deviceid: string;
}