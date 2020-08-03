import Sequelize from 'sequelize';
import 'dotenv/config';
import databaseConfig from '../config/database';
import Pokemon from '../app/models/Pokemon';

const models = [Pokemon];
class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(process.env.DATABASE_URL, databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new DataBase();
