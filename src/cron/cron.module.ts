import { Module,forwardRef } from '@nestjs/common';
import { SchedulerService } from './cron.service';
import { ScheduleModule } from '@nestjs/schedule';
import { AirService } from 'src/air/air.service';
import { AirModule } from 'src/air/air.module';

@Module({
  imports:[
    ScheduleModule.forRoot(),
    forwardRef(() => AirModule)],
  providers: [SchedulerService,AirService]
})
export class SchedulerModule {}