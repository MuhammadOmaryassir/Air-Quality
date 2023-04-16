import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AirService } from 'src/air/air.service';

@Injectable()
export class SchedulerService {
  
    constructor( private readonly airService: AirService ) {}
    @Cron('* * * * *')
    async pollutionCron() {
     await this.airService.getNearestCityAirData({lat:"48.856613", lon:"2.352222"},true);
    }
}