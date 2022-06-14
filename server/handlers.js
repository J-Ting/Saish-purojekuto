//uuid
const { v4: uuidv4 } = require("uuid");

// MongoDB Connection
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// get all users
const getAllUsers = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Saishu_Pro");

    const allUsers = await db.collection("users").find().toArray();

    allUsers
      ? res
          .status(200)
          .json({ status: 200, data: allUsers, message: "All users found" })
      : res
          .status(400)
          .json({ status: 400, data: null, message: "Cannot get all users" });
    client.close();
  } catch (err) {
    console.log(err, "error");
  }
};

// get single user
const getSingleUser = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Saishu_Pro");

    const handler = req.params.handler;

    const singleUser = await db.collection("users").findOne({ handler });

    singleUser
      ? res
          .status(200)
          .json({ status: 200, data: singleUser, message: " User found" })
      : res
          .status(400)
          .json({ status: 400, data: null, message: "Cannot get single user" });
    client.close();
  } catch (err) {
    console.log(err, "error");
  }
};

// get all posts
const getAllPosts = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Saishu_Pro");
    const allPosts = await db.collection("posts").find().toArray();

    allPosts
      ? res
          .status(200)
          .json({ status: 200, data: allPosts, message: "All posts found" })
      : res
          .status(400)
          .json({ status: 400, data: null, message: "Cannot get all posts" });
    client.close();
  } catch (err) {
    console.log(err, "error");
  }
};

// get single post
const getSinglePost = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Saishu_Pro");

    const id = req.params.id;

    const singlePost = await db.collection("posts").findOne({ id });

    // console.log("singlePost", singlePost);

    singlePost
      ? res
          .status(200)
          .json({ status: 200, data: singlePost, message: " Post found" })
      : res
          .status(400)
          .json({ status: 400, data: null, message: "Cannot get single post" });
    client.close();
  } catch (err) {
    console.log(err, "error");
  }
};

// delete a post
const deletePost = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Saishu_Pro");

    const id = req.params.id;

    const deletedPost = await db.collection("posts").deleteOne({ id });

    deletedPost
      ? res
          .status(200)
          .json({ status: 200, data: deletedPost, message: " Post deleted" })
      : res
          .status(400)
          .json({ status: 400, data: null, message: "Cannot delete post" });
    client.close();
  } catch (err) {
    console.log(err, "error");
  }
};

// add new post
const addPost = async (req, res) => {
  const postInfo = {
    id: uuidv4(),
    likedBy: [],
    comments: [],

    ...req.body,
  };
  console.log("REQ.BODY", req.body);
  console.log("POSTINFO", postInfo);

  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Saishu_Pro");

    const addedPost = await db.collection("posts").insertOne(postInfo);

    addedPost
      ? res
          .status(200)
          .json({ status: 200, data: addedPost, message: " New post added" })
      : res
          .status(400)
          .json({ status: 400, data: null, message: "Cannot add new post" });
    client.close();
  } catch (err) {
    console.log(err, "error");
  }
};

//update comment
const updatePostComments = async (req, res) => {
  const commentInfo = {
    ...req.body,
    commentId: uuidv4(),
  };

  console.log("commentInfo", commentInfo);

  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Saishu_Pro");

    const id = req.params.id;

    const singlePostId = await db.collection("posts").findOne({ id });

    const addedComment = await db.collection("posts").updateOne(
      { id: singlePostId.id },
      {
        $push: {
          comments: commentInfo,
        },
      }
    );

    addedComment
      ? res.status(200).json({
          status: 200,
          data: addedComment,
          message: " New comment added",
        })
      : res
          .status(400)
          .json({ status: 400, data: null, message: "Cannot add new comment" });
    client.close();
  } catch (err) {
    console.log(err, "error");
  }
};

const deleteComment = async (req, res) => {
  const { commentId } = req.body;

  console.log("reqbody", req.body);

  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Saishu_Pro");

    const postId = req.params.id;

    const deletedComment = await db.collection("posts").updateOne(
      { id: postId },
      {
        $pull: {
          comments: {
            commentId,
          },
        },
      }
    );

    // console.log("singlePostId", singlePostId);

    deletedComment
      ? res.status(200).json({
          status: 200,
          data: deletedComment,
          message: "comment deleted",
        })
      : res
          .status(400)
          .json({ status: 400, data: null, message: "Cannot delete comment" });
    client.close();
  } catch (err) {
    console.log(err, "error");
  }
};

// update Likes
const updatePostLikes = async (req, res) => {
  const likeInfo = "@Jer";

  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Saishu_Pro");

    //find post by ID
    const id = req.params.id;

    const singlePostId = await db.collection("posts").findOne({ id });

    //if handler already in array then remove it else push into array

    if (singlePostId.likedBy.includes(likeInfo)) {
      // if (singlePostId.likedBy.indexOf(likeInfo) > -1) {
      const minusLike = await db.collection("posts").updateOne(
        { id: singlePostId.id },
        {
          $pull: {
            likedBy: likeInfo,
          },
        }
      );
      minusLike
        ? res.status(200).json({
            status: 200,
            data: minusLike,
            message: " old like removed",
          })
        : res.status(400).json({
            status: 400,
            data: null,
            message: "Cannot remove old like",
          });
      client.close();
    }

    const addedLike = await db.collection("posts").updateOne(
      { id: singlePostId.id },
      {
        $push: {
          likedBy: likeInfo,
        },
      }
    );
    addedLike
      ? res.status(200).json({
          status: 200,
          data: addedLike,
          message: " New like added",
        })
      : res
          .status(400)
          .json({ status: 400, data: null, message: "Cannot add new like" });
    client.close();
  } catch (err) {
    console.log(err, "error");
  }
};

//exports
module.exports = {
  getAllUsers,
  getAllPosts,
  getSingleUser,
  getSinglePost,
  addPost,
  updatePostComments,
  updatePostLikes,
  deletePost,
  deleteComment,
};
