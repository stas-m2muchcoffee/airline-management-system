import { Document } from 'mongoose';

export interface Flight extends Document {
  _id: string;
  number: string;
  date: Date;
  from: string;
  to: string;
  status: string; // TODO: create enum - 'active', 'canceled',
}
