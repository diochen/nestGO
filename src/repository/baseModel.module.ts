import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoleService } from './service/pole.service';
import { SensorDataService } from './service/sensorData.service';
import { Pole } from './entity/pole.entity';
import { SensorData } from './entity/sensorData.entity';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Pole]), TypeOrmModule.forFeature([SensorData])],
  providers: [PoleService,SensorDataService],
  controllers: [],
  exports: [TypeOrmModule]
})
export class BaseModelModule {}