import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseModelModule } from './repository/baseModel.module'
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), BaseModelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}


// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: process.env.hasOwnProperty('POSTGRES_HOST') ? process.env.POSTGRES_HOST : '127.0.0.1',
//       port: process.env.hasOwnProperty('POSTGRES_PORT') ? Number(process.env.POSTGRES_PORT) : 5432,
//       username: process.env.hasOwnProperty('POSTGRES_USERNAME') ? process.env.POSTGRES_USERNAME : 'basicuser',
//       password: process.env.hasOwnProperty('POSTGRES_PASSWORD') ? process.env.POSTGRES_PASSWORD : 'ultrastrongpassword',
//       database: process.env.hasOwnProperty('POSTGRES_DB') ? process.env.POSTGRES_DB : 'ris',
//       entities: [ Animal ],
//       synchronize: true
//     }),
//     TypeOrmModule.forFeature([ Animal ])
//   ],
//   components: [
//     AnimalsService
//   ],
//   controllers: [
//     AnimalsController
//   ]
// })
// export class AnimalsModule {}
