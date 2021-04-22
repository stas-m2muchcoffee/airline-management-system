import { Document } from 'mongoose';

export interface Weather extends Document {
  airport: string;
  date: Date;
  windSpeed: number;
  temperature: number;
  probabilityOfPrecipitation: number;
}
