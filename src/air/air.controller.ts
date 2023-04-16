import { Controller, Get, Query, Res } from '@nestjs/common';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { AirService } from './air.service';


@Controller('airQuality')
export class AirController {
  constructor(private readonly airService: AirService) { }

  @Get("/nearestCity")
  @ApiOperation({ summary: 'get air quality for the nearest city' })
  @ApiParam({ name: "lat", type: "string", required: false })
  @ApiParam({ name: "lon", type: "string", required: false })

  async getAirQuality(
    @Query("lat") lat: string,
    @Query("lon") lon: string,
    @Res() res
  ) {
    try {
      const Data = await this.airService.getNearestCityAirData({ lat, lon });
      res.status(200).send({ Results: Data.current.pollution, status: Data.status, code: 200 })
    } catch (err) {
      res.status(500).send({ Results: [], status: "Failed", code: 500, err: err.message })
    }
  }

  @Get("mostPollutedTime")
  @ApiOperation({ summary: 'the most polluted time paris Zone' })
  mostPolluted()  {
    return this.airService.mostPollutedTimeParisZone();
  }

}