import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pole } from '../entity/pole.entity';

@Injectable()
export class PoleService {
  constructor(
    @InjectRepository(Pole)
    private readonly poleRepository: Repository<Pole>,
  ) {}

  async findAll(): Promise<Pole[]> {
    return await this.poleRepository.find();
  }
}