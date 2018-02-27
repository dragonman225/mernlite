import { server } from 'config';
import api from 'api';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.connect(server.mongodbUri);

const app = express();

app.use(bodyParser.json());

app.use('/api', api);

app.get('*', (req, res) => {
  res.status(404).send({ message: '404_not_found' });
});

app.listen(server.port, async (err) => {
  if (err) {
    console.error(err);
    throw (err);
  }
  console.log(`Server is listening on ${server.host}:${server.port}`);
});
