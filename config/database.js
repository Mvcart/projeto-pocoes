import { Sequelize } from "sequelize";

// Criação da instância do banco em memória
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
  logging: false,         // desabilita logs SQL no console
});

export default sequelize;