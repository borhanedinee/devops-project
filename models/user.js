const Datatype = require("sequelize").DataTypes;
const sequelize = require("../config/db");

const User = sequelize.define("users", {
  firstName: { type: Datatype.STRING, allowNull: false },
  secondName: { type: Datatype.STRING, allowNull: false },
  bloodType: { type: Datatype.STRING, allowNull: false },
  age: { type: Datatype.INTEGER, allowNull: true },
  email: { type: Datatype.STRING, allowNull: false, unique: true },
  password: { type: Datatype.STRING, allowNull: false },
});

module.exports = User;
