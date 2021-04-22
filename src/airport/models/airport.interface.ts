import { Document } from 'mongoose';

export interface Airport extends Document {
  _id: string;
  name: string;
  maximumNumberOfFlightsPerDay: number;
}
