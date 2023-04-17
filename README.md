# Air Quality REST API
REST API responsible for exposing “the air quality information” of a nearest city to GPS coordinates using iqair :
https://www.iqair.com/fr/commercial/air-quality-monitors/airvisual-platform/api

## Technologies Used 
* Node (NestJS)
* MongoDB (Mongoose) 
* Swagger Docs


## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start

# watch mode
$ npm run start:dev

```

## Testing

1-  Run The APP
```bash
$ npm run start
```
2- Open new Terminal and Run The Following
```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```
* Note: If You need to run Air Quality Tests only 
```bash
# unit tests
$ npm run test src/air/air.controller.speec.ts
```

## Endpoints

### GET The Air Quality of nearest city.
```
PATH: /api/airQuality/nearestCity
METHOD: GET
```
Return nearest city's air quality, using GPS coordinates or IP geolocation.

### GET Most Polluted Time for Paris zone.
```
PATH: /api/airQuality/mostPollutedTime
METHOD: GET
```
Return Time and Air Quality Details Sorted by most polluted quality

## CRON JOB
The cron job implemented on the <b>*src/cron/cron.service.ts*</b> runs to check the air quality for the Paris zone every 1 minute than it saves them in the database.

### To Access Api Docs

- Run The APP
```bash
$ npm run start
```

- Go To http://localhost:3000/api

![Imgur](https://serving.photos.photobox.com/2897619952b099fa0fc072194b7e52605120caa7addc39db6ea631f994482b9515915457.jpg)
