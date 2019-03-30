import { server } from '~config';
import api from '~api';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';

mongoose.connect(server.mongodbUri, {useNewUrlParser: true}, (err) => {
  if (err) console.log('Cannot connect to database.');
});

// Use webpack config for 'dev:app' in middleware
const config = require('../../webpack.config.js')({ development: true, src: 'app' });

const compiler = webpack(config);

const app = express();

app.use(bodyParser.json());

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.use('/api', api);

app.get('*', (req, res) => {
  res.status(404).send({ message: '404_not_found' });
});

app.listen(server.port, async (err) => {
  if (err) {
    console.error(err);
    throw (err);
  }
  console.log(`${server.name} is listening on ${server.host}:${server.port}`);
});
