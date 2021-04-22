import { NextFunction, Request, Response } from 'express';
import { getAirports } from './airport.service';

export async function getAllAirports(req: Request, res: Response, next: NextFunction) {
  const airports = await getAirports();
  res.json(airports);
}

export async function getAvailableAirportsForDate(req: Request, res: Response, next: NextFunction) {
  const date = req.body.date;
  // get available airports by the date;
}
