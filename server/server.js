import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import morgan from 'morgan';
import path from 'path';

import index from './routes-index';
import api from './routes-api';
import universalLoader from './universal';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/', index);
app.use(express.static(path.resolve(__dirname, '../build')));
app.use('/api', api);
app.use('/', universalLoader);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.on('error', error => {
  if(error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port' + PORT;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
