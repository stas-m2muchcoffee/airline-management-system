import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import airportRoutes from './airport';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app: Application = express();

const MONGO_URI = process.env.MONGO_URI;
if (MONGO_URI) {
  mongoose.connect(MONGO_URI, {
    useFindAndModify: true,
    useNewUrlParser: true,
  });
  const db = mongoose.connection;
  db.on('error', (error) => console.log(error));
  db.once('open', () => console.log('connected to db'));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/airports', airportRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on the port ${PORT}`);
});
