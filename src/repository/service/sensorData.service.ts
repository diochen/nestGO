import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SensorData } from '../entity/sensorData.entity';



@Injectable()
export class SensorDataService {
  constructor(
    @InjectRepository(SensorData)
    private readonly sensorDataRepository: Repository<SensorData>,
  ) {}

  async findAll(): Promise<SensorData[]> {
    return await this.sensorDataRepository.find();
  }
}