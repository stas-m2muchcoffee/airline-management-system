import { Document } from 'mongoose';

export interface Airport extends Document {
  name: string;
  maximumNumberOfFlightsPerDay: number;
  address: string;
}
