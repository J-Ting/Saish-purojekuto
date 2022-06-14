// "use strict";   What is this?

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");

// handlers import
const {
  getAllUsers,
  getAllPosts,
  getSingleUser,
  getSinglePost,
  addPost,
  updatePostComments,
  updatePostLikes,
  deletePost,
  deleteComment,
} = require("./handlers");

express()
  // Below are methods that are included in express(). We chain them for convenience.
  .use(morgan("tiny"))
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // REST endpoints
  .get("/", (req, res) => {
    res.send("Hello World!");
  })

  .get("/api/get-users", getAllUsers)

  .get("/api/get-user/:handler", getSingleUser)

  // .get("/api/get-myself/:me", getMyself)

  .get("/api/get-posts", getAllPosts)

  .get("/api/get-post/:id", getSinglePost)

  .post("/api/add-post", addPost)

  .delete("/api/delete-post/:id", deletePost)

  .patch("/api/delete-comment/:id", deleteComment)

  .patch("/api/update-comments/:id", updatePostComments)

  .patch("/api/update-likes/:id", updatePostLikes)

  // To catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
