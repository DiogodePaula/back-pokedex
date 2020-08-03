import { Router } from 'express';
import cors from 'cors';
import PokemonController from './app/controller/PokemonController';

const routes = Router();
routes.use(cors());
routes.get('/', (req, res) => res.json('POKEDÉX-BOMBANDO!'));

routes.get('/pokemon', PokemonController.index);
routes.get('/pokemon/:uid', PokemonController.show);
routes.post('/pokemon', PokemonController.store);
routes.put('/pokemon/:uid', PokemonController.update);
routes.delete('/pokemon/:uid', PokemonController.delete);

export default routes;
