import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Potion = sequelize.define("Potion", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,   // URL ou caminho da imagem
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: false,          // sem campos createdAt/updatedAt
});

export default Potion;