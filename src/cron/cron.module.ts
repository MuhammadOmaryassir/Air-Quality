import { Module,forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchedulerService } from './cron.service';
import { ScheduleModule } from '@nestjs/schedule';
import { AirService } from 'src/air/air.service';
import { AirModule } from 'src/air/air.module';
import { Pollution, PollutionSchema } from '../air/schemas/pollution.schema';


@Module({
  imports:[
    ScheduleModule.forRoot(),
    forwardRef(() => AirModule),
    MongooseModule.forFeature([{ name: Pollution.name, schema: PollutionSchema }])],
  providers: [SchedulerService, AirService]
})
export class SchedulerModule {}