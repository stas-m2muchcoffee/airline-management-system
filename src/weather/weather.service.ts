import { Types } from 'mongoose';

import airportModel from './models/weather.model';

export function isWeatherAllowsFlights(date: Date, airportId: Types.ObjectId) {
    // condition to determine the possibility of sending and receiving the flights
}
