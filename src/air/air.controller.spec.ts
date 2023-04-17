import axios from 'axios';


const baseURL = "http://localhost:3000"
const cordinates = { lon: 2.351666, lat: 48.856613 }

describe("Air Quiality Testing", () => {

    it("Most Polluted Time in Paris Zone, It Should Respond With 200 Status Code", async () => {
      const data = await axios.get(`${baseURL}/api/airQuality/mostPollutedTime`)
      expect(data.status).toEqual(200)
    })

    it("Get Air Quaility For Nearest City, It Should Respond With 200 Status Code", async () => {
      const data = await axios.get(`${baseURL}/api/airQuality/nearestCity`, {
        params: {
          lat: cordinates.lat,
          lon: cordinates.lon,
          "key": "2f3bbab4-b50b-467f-a0e8-b43ea2cfa505"
        }
      })
      expect(data.status).toEqual(200)
    })
});