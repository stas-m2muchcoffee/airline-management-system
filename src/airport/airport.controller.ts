import { NextFunction, Request, Response } from 'express';
import { getAirports } from './airport.service';

export async function getAllAirports(req: Request, res: Response, next: NextFunction) {
  const airports = await getAirports();
  res.json(airports);
}
