import airportModel from './models/airport.model';
import { Airport } from './models/airport.interface';

export function getAirports() {
  return airportModel.find({});
}

export function addAirport(airport: Airport) {
  return airportModel.create(airport);
}
