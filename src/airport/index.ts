import { Router } from 'express';

import { getAllAirports, createAirport } from './airport.controller';

const router = Router();

router.get('/', getAllAirports);
router.post('/', createAirport);

export default router;
