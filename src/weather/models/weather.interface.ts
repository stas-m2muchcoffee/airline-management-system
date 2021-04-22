import { Document } from 'mongoose';

export interface Weather extends Document {
  _id: string;
  airport: string;
  date: Date;
  windSpeed: number;
  temperature: number;
  probabilityOfPrecipitation: number;
}
