import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import './database';

import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.router();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  router() {
    this.server.use(routes);
  }
}

export default new App();
