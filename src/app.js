import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlawares();
    this.routes();

    console.log('VAI POKEBOLA!!!');
  }

  middlawares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

// com o .server estou disponibilizando apenas essa cara
// com o new a class é criada apenas uma vez, assim evita que ela seja criada diversas vezes preservando memoria
