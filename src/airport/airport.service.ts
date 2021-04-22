import airportModel from './models/airport.model';

export function getAirports() {
  return airportModel.find({});
}
