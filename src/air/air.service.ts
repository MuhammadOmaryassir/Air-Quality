import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pollution } from './schemas/pollution.schema';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';

const externalAPICall = axios.create()


@Injectable()
export class AirService {
  constructor(@InjectModel(Pollution.name) private pollutionModel: Model<Pollution>, private readonly httpService: HttpService) {}

  async getNearestCityAirData(params) {
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
        return data.data.data
      }
    } catch (error) {
      return error.message || "Error occurred while retreiving the nearest city data."
    }
  }
}