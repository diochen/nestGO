import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SensorData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deviceid: string;

  @Column('double')
  pm25: number;

  @Column('double')
  volt: number;
}