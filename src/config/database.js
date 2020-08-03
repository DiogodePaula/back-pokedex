require('dotenv').config();

module.exports = {
  url: process.env.DATABASE_URL,
  define: {
    timestamp: true, //cuida o tempo de quando os arquivos foram criados
    underscored: true,
    underscoredAll: true,
  },
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};
