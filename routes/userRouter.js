const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/users/", getUsers);
userRouter.get("/users/:id", getUserById);
userRouter.post("users/create", createUser);
userRouter.put("/users/update/:id", updateUser);
userRouter.delete("/users/delete/:id", deleteUser);

module.exports = userRouter;
