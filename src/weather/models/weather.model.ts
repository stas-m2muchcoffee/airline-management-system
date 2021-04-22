import { Schema, model, Types } from 'mongoose';

import { Weather } from './weather.interface';

const weatherSchema = new Schema({
  airport: {
    type: Types.ObjectId,
    ref: 'Airport',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  windSpeed: {
    type: Number,
    min: 0,
  },
  temperature: {
    type: Number,
    min: 0,
  },
  probabilityOfPrecipitation: {
    type: Number,
    min: 0,
    max: 100,
  },
}, {
  versionKey: false,
  timestamps: true,
});

export default model<Weather>('Weather', weatherSchema);
