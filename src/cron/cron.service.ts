import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AirService } from '../air/air.service';
const cordinates = { lon: 2.351666, lat: 48.856613 }

@Injectable()
export class SchedulerService {
    
    constructor( private readonly airService: AirService ) {}
    @Cron('* * * * *')
    async pollutionCron() {
     await this.airService.getNearestCityAirData({lat:cordinates.lat, lon:cordinates.lon}, true);
    }
}