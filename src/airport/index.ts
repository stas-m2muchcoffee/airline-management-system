import { Router } from 'express';

import { getAllAirports } from './airport.controller';

const router = Router();

router.get('/', getAllAirports);

export default router;
