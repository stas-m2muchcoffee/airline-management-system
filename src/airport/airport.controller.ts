import { NextFunction, Request, Response } from 'express';
import { getAirports, addAirport } from './airport.service';

export async function getAllAirports(req: Request, res: Response, next: NextFunction) {
  const airports = await getAirports();
  res.json(airports);
}

export async function getAvailableAirportsForDate(req: Request, res: Response, next: NextFunction) {
  const date = req.body.date;
  // get available airports by the date;
}

export async function createAirport(req: Request, res: Response, next: NextFunction) {
  // check if all necessary fields exist
  const airport = await addAirport(req.body);
  res.json(airport);
}
