// db.js or config/database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dockers", "root", "", {
  host: "localhost",
  dialect: "mysql", // or 'postgres', 'sqlite', 'mariadb'
});

module.exports = sequelize;
