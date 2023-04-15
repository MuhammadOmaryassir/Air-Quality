import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AirController } from './air.controller';

import { Pollution, PollutionSchema } from './schemas/pollution.schema';
import { HttpModule } from '@nestjs/axios';
import { AirService } from './air.service';


@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Pollution.name, schema: PollutionSchema }]),
  ],
  controllers:[AirController],
  providers: [AirService],

})
export class AirModule {}
