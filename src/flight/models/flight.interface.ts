import { Document } from 'mongoose';

export interface Flight extends Document {
  number: string;
  arrivalDate: Date;
  departureDate: Date;
  from: string;
  to: string;
  status: string; // TODO: create enum - 'active', 'canceled',
}
