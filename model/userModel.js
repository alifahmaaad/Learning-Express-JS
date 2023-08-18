import { Sequelize } from "sequelize";
import db from "../database/db.js";

const { DataTypes } = Sequelize;
const users = db.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  { freezeTableName: true }
);

export default users;
