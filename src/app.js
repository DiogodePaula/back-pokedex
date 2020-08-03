import express from 'express';
import routes from './routes';
import './database';  //só esta dizendo para importar, por que vai criar um instância

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

// com o .server estou disponibilizando apenas esse cara
// com o new a class é criada apenas uma vez, assim evita que ela seja criada diversas vezes preservando memoria
