import { NextFunction, Request, Response } from 'express';

export async function createFlight(req: Request, res: Response, next: NextFunction) {
    // check if the flight date is before the current date

    const { to, date } = req.body;
    // check if the receiving airport is available for the current date;

    // check if the weather allows to send and receive the flights

    // create the flight if the receiving airport is available
}
