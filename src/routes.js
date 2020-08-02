import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json('POKEDÉX-BOMBANDO!'));

export default routes;
