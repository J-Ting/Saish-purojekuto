const { v4: uuidv4 } = require("uuid");

// users
const users = [
  {
    handler: "@Sid",
    name: "Crosby",
    cldImageId: "Sidney%20Crosby",
    avatarUrl:
      "https://res.cloudinary.com/brighting/image/upload/v1654314404/Sidney%20Crosby.jpg",
  },
  {
    handler: "@BillyTheCat",
    name: "Kitty",
    cldImageId: "02-cat-training-NationalGeographic_1484324_3x4_th4m5g.jpg",
    avatarUrl:
      "https://res.cloudinary.com/brighting/image/upload/v1654286141/02-cat-training-NationalGeographic_1484324_3x4_th4m5g.jpg",
  },
  {
    handler: "@TheNational",
    name: "The National",
    cldImageId: "The%20National.jpg",
    avatarUrl:
      "https://res.cloudinary.com/brighting/image/upload/v1654315139/The%20National.jpg",
  },
  {
    handler: "@Butthead",
    name: "Butthead",
    cldImageId: "Butthead.jpg",
    avatarUrl:
      "https://res.cloudinary.com/brighting/image/upload/v1654317503/Butthead.jpg",
  },
];

// posts
const posts = [
  {
    id: uuidv4(),
    uploadedBy: "@BillyTheCat",
    uploadedAt: "may 1",
    title: "The shoe",
    description: "an artistic shoe",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1654285799/cld-sample-5.jpg",
    ],
    likedBy: ["@Sid", "@TheNational"],
    comments: [
      {
        commentedBy: "@Butthead",
        comment: "this sucks in a marvelous way",
        commentedAt: "15 may, 4pm",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@Sid",
    uploadedAt: "may 5",
    title: "hockey killer",
    description: "hockey street art",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1654317791/hockey%20axe.jpg",
    ],
    likedBy: ["@TheNational", "@Butthead"],
    comments: [
      {
        commentedBy: "@BillyTheCat",
        comment: "thats you on the ice",
        commentedAt: "19 may, 6pm",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@TheNational",
    uploadedAt: "June 4",
    title: "Psycho band",
    description: "saw this near our studio ",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1654318166/band%20street%20art.jpg",
    ],
    likedBy: ["@Sid", "@BillyTheCAt", "@Butthead"],
    comments: [
      {
        commentedBy: "@Butthead",
        comment: "Whoa! Thats cool!",
        commentedAt: "4 June, 6pm",
      },
      {
        commentedBy: "@Sid",
        comment: "id take a slapshot to their face",
        commentedAt: "6 June, 7pm",
      },
      {
        commentedBy: "@BillyTheCat",
        comment: "nice shot, you guys are the better band",
        commentedAt: "9 June, 3am",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@Butthead",
    uploadedAt: "March 8",
    title: "Bunghole",
    description: "Look they painted my friend Beavis",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1654318705/Beavis%20art.jpg",

      "https://res.cloudinary.com/brighting/image/upload/v1654480328/Beavis%20art%202.jpg",
    ],
    likedBy: ["@TheNational"],
    comments: [
      {
        commentedBy: "@BillyTheCat",
        comment: "Meow!",
        commentedAt: "9 March, 8pm",
      },
      {
        commentedBy: "@TheNational",
        comment: "Nice, hes my fav character",
        commentedAt: "9 March, 11pm",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@BillyTheCat",
    uploadedAt: "July 1",
    title: "yellow cat paint",
    description: "heaven spot of cat painting",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1654477950/cat%20graff.jpg",
    ],
    likedBy: ["@Sid", "@TheNational", "@Butthead"],
    comments: [
      {
        commentedBy: "@Sid",
        comment: "i like cats too",
        commentedAt: "July 1, 4pm",
      },
      {
        commentedBy: "@TheNational",
        comment: "i like dogs more but it looks cool",
        commentedAt: "July 2, 3pm",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@Sid",
    uploadedAt: " July 2",
    title: "Thats me!",
    description: "Malky and I champs!",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1654478735/crosby%20sticks.jpg",
    ],
    likedBy: ["@BillyTheCat", "@Butthead"],
    comments: [
      {
        commentedBy: "@BillyTheCat",
        comment: "I like sticks",
        commentedAt: "July 2, 6pm",
      },
      {
        commentedBy: "@TheNational",
        comment: "I like sticks, drum sticks",
        commentedAt: "July 2, 9pm",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@Butthead",
    uploadedAt: "July 8",
    title: "Im a Peanut",
    description: "Ohhh Beavis is a dog haha!",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1654479327/Butthead%20Peanut.jpg",
    ],
    likedBy: ["@Sid", "@BillyTheCat", "@TheNational"],
    comments: [
      {
        commentedBy: "@BillyTheCat",
        comment: "Meow!",
        commentedAt: "8 July, 8pm",
      },
      {
        commentedBy: "@Sid",
        comment: "Hahaha Snoopy",
        commentedAt: "8 July, 11pm",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@BillyTheCat",
    uploadedAt: "July 8",
    title: "Eye of tiger!",
    description: "Super detailed!! ",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1654478558/tiger-portrait-street-art.jpg",
    ],
    likedBy: ["@Sid", "@TheNational", "@Butthead"],
    comments: [
      {
        commentedBy: "@Butthead",
        comment: "i love tiger",
        commentedAt: "July 9, 4am",
      },
      {
        commentedBy: "@Sid",
        comment: "I once pet a tiger",
        commentedAt: "July 9, 1pm",
      },
      {
        commentedBy: "@TheNational",
        comment: "inspiring!",
        commentedAt: "July 9, 1:34pm",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@Butthead",
    uploadedAt: "July 9",
    title: "Its US!",
    description: "simple stencil but coool",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1654479649/beavis-and-butthead-stencil.jpg",
    ],
    likedBy: ["@BillyTheCat"],
    comments: [],
  },
  {
    id: uuidv4(),
    uploadedBy: "@Butthead",
    uploadedAt: "July 10",
    title: "trippy!",
    description: "look at our skin ",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1654479824/butthead%20graffiti.jpg",
    ],
    likedBy: ["@Sid", "@TheNational"],
    comments: [
      {
        commentedBy: "@BillyTheCat",
        comment: "im scared",
        commentedAt: "July 10, 3:05am",
      },
      {
        commentedBy: "@TheNational",
        comment: "haha look at Beavis",
        commentedAt: "July 10, 1pm",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@Butthead",
    uploadedAt: "July 11",
    title: "we chilling",
    description: "nice graff in the living room ",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1654479830/BB%20couch.jpg",
    ],
    likedBy: ["@BillyTheCat", "@TheNational"],
    comments: [
      {
        commentedBy: "@Sid",
        comment: "watching our game on TV?",
        commentedAt: "July 11, 3:03pm",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@Butthead",
    uploadedAt: "July 11",
    title: "im professional",
    description: "have to get the bag with beavis ",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1654480497/butthead%20Business.jpg",
    ],
    likedBy: ["@Sid", "@TheNational"],
    comments: [
      {
        commentedBy: "@TheNational",
        comment: "you guys are rockstars!",
        commentedAt: "July 11, 3:09pm",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@Butthead",
    uploadedAt: "July 11",
    title: "3D Time",
    description: "they mixed our names up ",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1654480506/BB%203D%20Glasses.jpg",
    ],
    likedBy: ["@Sid", "@BillyTheCat", "@TheNational"],
    comments: [
      {
        commentedBy: "@BillyTheCat",
        comment: "i like that simple art style",
        commentedAt: "July 11, 4:09pm",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@Butthead",
    uploadedAt: "July 12",
    title: "we look so real",
    description: "whoa Beavis got a marker ",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1654480516/BB%20TV.jpg",
    ],
    likedBy: ["@BillyTheCat"],
    comments: [],
  },
];

module.exports = { users, posts };
