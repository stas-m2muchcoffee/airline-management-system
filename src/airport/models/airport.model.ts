import { Schema, model } from 'mongoose';

import { Airport } from './airport.interface';


const airportSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  maximumNumberOfFlightsPerDay: {
    type: Number,
    default: 0,
  }
}, {
  versionKey: false,
  timestamps: true,
});

export default model<Airport>('Airport', airportSchema);
