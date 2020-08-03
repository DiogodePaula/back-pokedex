import Sequelize, { Model } from 'sequelize';

class Pokemon extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        type: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        attack: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
      }
    );
    this.removeAttribute('id');
    return this;
  }
}

export default Pokemon;
