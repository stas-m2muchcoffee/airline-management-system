import { Router } from 'express';

import { createFlight, getFlightsByTheAirport, updateFlight } from './flight.controller';


const router = Router();

router.get('/', getFlightsByTheAirport);
router.post('/create', createFlight);
router.put('/:id', updateFlight);

export default router;
