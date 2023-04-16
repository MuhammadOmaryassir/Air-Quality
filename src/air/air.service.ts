import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Pollution, PollutionDocument } from './schemas/pollution.schema'


@Injectable()
export class AirService {
  constructor(@InjectModel(Pollution.name) private AirQualityRecordModel: Model<PollutionDocument>) { }
  async getNearestCityAirData(params,saveItToDataStore:Boolean = false) {
    const { lat, lon } = params
    try {
      // Get nearest city data using IP geolocation
      if (!(params.hasOwnProperty('lat') || params.hasOwnProperty('lon'))) {
        const data = await axios.get('http://api.airvisual.com/v2/nearest_city', {
          params: {
            key:"f88bd625-9472-4067-b9f8-b2a7ed989b65"
          }
        })
        return data.data.data
    
        // Get nearest city data using GPS coordinates
      } else {
        const data = await axios.get('http://api.airvisual.com/v2/nearest_city', {
          params: {
            lat,
            lon,
            key:"f88bd625-9472-4067-b9f8-b2a7ed989b65"
          }
        })
        if(saveItToDataStore) {
          let airPollution = data.data.data.current.pollution
          airPollution.city = data.data.data.city
          airPollution.latitude = data.data.data.location.coordinates[1]
          airPollution.longitude = data.data.data.location.coordinates[0]
          airPollution.ts = new Date()
          const airQualityRecord = new this.AirQualityRecordModel(airPollution);
          airQualityRecord.save();
        }
        return data.data.data
      }
    } catch (error) {
      return error.message || "Error occurred while retreiving the nearest city data."
    }
  }

  async mostPollutedTimeParisZone(): Promise<PollutionDocument[]> {
    try {

      //this find the max value of aqius and give the new one
      const MostPollutedQuery = {"city":"Paris"}
    
      let most_polluted = await this.AirQualityRecordModel.find(MostPollutedQuery).sort({ aqius: -1, ts: -1 }).limit(1).exec()
      return most_polluted

    } catch (error) {

      console.log(error.message);
      return error.message

    }

  }
}
