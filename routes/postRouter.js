const express = require("express");
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const postRouter = express.Router();

postRouter.get("/posts/", getPosts);
postRouter.get("/posts/:id", getPostById);
postRouter.post("/posts/create", createPost);
postRouter.put("/posts/update/:id", updatePost);
postRouter.delete("/posts/delete/:id", deletePost);

module.exports = postRouter;
