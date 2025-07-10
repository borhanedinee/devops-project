const Datatype = require("sequelize").DataTypes;
const sequelize = require("../config/db");

const Post = sequelize.define("posts", {
  title: { type: Datatype.STRING, allowNull: false },
  content: { type: Datatype.STRING, allowNull: false },
  userId: {
    type: Datatype.INTEGER,
    allowNull: false,
    references: {
      model: "users", // refers to table name
      key: "id", // refers to column name in users table
    },
  },
});

module.exports = Post;
