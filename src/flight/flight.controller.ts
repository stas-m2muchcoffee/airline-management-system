import { NextFunction, Request, Response } from 'express';

export async function createFlight(req: Request, res: Response, next: NextFunction) {
    const { to, date } = req.body;
    // check if the receiving airport is available for the current date;

    // create the flight if the receiving airport is available
}
