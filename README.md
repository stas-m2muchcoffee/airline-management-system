# Install packages
```
npm install
```
# Build the project
```
npm run build
```
# Run project
```
npm run start
```
# Run project in the development mode
```
npm run start:dev
```

### Project description
The project has the following entities:
- airport;
- flight;
- weather.

### Airport
Airport entity has the following fields:
- `name: string`;
- `maximumNumberOfFlightsPerDay: number`; - the maximum number of flights that the airport can accept in one day
- `address: string`; - address of the airport, that is used to get the weather for the current airport

### Flight
Flight entity has the following fields:
- `number: string;` - unique flight number
- `arrivalDate: Date;`
- `departureDate: Date;`
- `from: string;` - departure airport id
- `to: string;` - arrival airport id
- `status: string;` - status of the flight (active, canceled)

### Weather
Weather entity has the following fields:
- `airport: string;` - airport id
- `date: Date;`
- `windSpeed: number;`
- `temperature: number;`
- `probabilityOfPrecipitation: number;`

# User actions
User has the possibilities:
- create new airport;
- get all airports;
- get all available airports for the date to select available airport when creating the flight;
- create the flight (if all conditions are met, such as airport accessibility and good weather);
- update the flight;
- get all created flights for the airport.

To receive the weather can be created the cron task.
