const Post = require("./posts");
const User = require("./user");

Post.belongsTo(User, { as: "author", foreignKey: "userId" });
User.hasMany(Post, { as: "posts", foreignKey: "userId" });

module.exports = { Post, User };
