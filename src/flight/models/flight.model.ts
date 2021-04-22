import { Schema, model, Types } from 'mongoose';

import { Flight } from './flight.interface';


const flightSchema = new Schema({
  number: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  from: {
    type: Types.ObjectId,
    ref: 'Airport',
    required: true,
  },
  to: {
    type: Types.ObjectId,
    ref: 'Airport',
    required: true,
  },
  status: {
    type: String, // TODO: use enum
    default: 'active'
  }
}, {
  versionKey: false,
  timestamps: true,
});

export default model<Flight>('Flight', flightSchema);
