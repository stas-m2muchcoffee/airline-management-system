import { Router } from 'express';

import { createFlight } from './flight.controller';


const router = Router();

router.post('/create', createFlight);

export default router;
