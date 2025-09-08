import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DATAVASE_URL!, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
