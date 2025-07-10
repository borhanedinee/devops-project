const express = require("express");
const userRouter = require("./userRouter");
const postRouter = require("./postRouter");
const baseRouter = express.Router();

baseRouter.use(userRouter);
baseRouter.use(postRouter);

module.exports = { baseRouter };
