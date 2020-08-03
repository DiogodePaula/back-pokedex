import Pokemon from '../models/Pokemon';

class PokemonController {
  async index(req, res) {
    try {
      const pokemon = await Pokemon.findAll();

      return res.json({ pokemon });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const pokemon = await Pokemon.findOne({ where: { uid } });

      return res.json({ pokemon });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const pokemon = await Pokemon.create(req.body);

      return res.json(pokemon);
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json(response);;
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const [update] = await Pokemon.update(req.body, { where: { uid } });
      if (!update) {
        throw Error('Pokemon não encontrado');
      }
      return res.json({ result: 'Data_Update' });
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const deleted = await Pokemon.destroy({ where: { uid } });

      if (!deleted) {
        throw Error('Pokemon não encontrado');
      }
      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new PokemonController();
