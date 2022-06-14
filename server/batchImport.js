const { users, posts } = require("./data/mockData");

const { MongoClient } = require("mongodb");

// Access the database with the `uri` saved in the `.env` file
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//---------------------BatchImport function------------------------------
const batchImport = async () => {
  // creates a new client
  const client = new MongoClient(MONGO_URI, options);

  try {
    // connect to the client
    await client.connect();

    // connect to the database (db name is provided as an argument to the function)
    const db = client.db("Saishu_Pro");
    console.log("connected!");

    //transfer all users information to 'users' collection in MongoDB
    await db.collection("users").insertMany(users);
    console.log("Users information transferred");

    //transfer all posts information to 'post' collection in MongoDB
    await db.collection("posts").insertMany(posts);
    console.log("Posts information transferred");
  } catch (err) {
    console.log(err, "Error, data transfer failed");
  }

  // close the connection to the database server
  client.close();

  console.log("Disconnected!");
};

// call batch import function
batchImport();
