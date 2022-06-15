const { v4: uuidv4 } = require("uuid");

// users
const users = [
  {
    handler: "@Sid",
    name: "Crosby",
    cldImageId: "SidneyCrosby.jpg",
    avatarUrl:
      "https://res.cloudinary.com/brighting/image/upload/v1654314404/SidneyCrosby.jpg",
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
    cldImageId: "TheNational.jpg",
    avatarUrl:
      "https://res.cloudinary.com/brighting/image/upload/v1654315139/TheNational.jpg",
  },
  {
    handler: "@Butthead",
    name: "Butthead",
    cldImageId: "Butthead.jpg",
    avatarUrl:
      "https://res.cloudinary.com/brighting/image/upload/v1654317503/Butthead.jpg",
  },
  {
    handler: "@TheTingMan",
    name: "Jer",
    cldImageId: "JinSakai.jpg",
    avatarUrl:
      "https://res.cloudinary.com/brighting/image/upload/v1654880915/JinSakai.jpg",
  },
  {
    handler: "@InnocentAmber",
    name: "Amber Heard",
    cldImageId: "amberheard.jpg",
    avatarUrl:
      "https://res.cloudinary.com/brighting/image/upload/v1655265209/amberheard.jpg",
  },
];

// posts
const posts = [
  {
    id: uuidv4(),
    uploadedBy: "@BillyTheCat",
    uploadedAt: "May 1st 2022",
    title: "cat7",
    description: "Cat Bombing",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1655269426/cat7.jpg",
    ],
    likedBy: ["@Sid", "@TheNational"],
    comments: [
      {
        commentedBy: "@Butthead",
        comment: "this sucks in a marvelous way",
        commentedAt: "May 2nd 2022",
        commentId: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@Sid",
    uploadedAt: "May 1st 2022",
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
        commentedAt: "May 1st 2022",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@TheNational",
    uploadedAt: "May 3red 2022",
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
        commentedAt: "May 3rd 2022",
      },
      {
        commentedBy: "@Sid",
        comment: "id take a slapshot to their face",
        commentedAt: "May 3rd 2022",
      },
      {
        commentedBy: "@BillyTheCat",
        comment: "nice shot, you guys are the better band",
        commentedAt: "May 4th 2022",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@BillyTheCat",
    uploadedAt: "May 6th 2022",
    title: "Cats are Gods!",
    description: "Pink & Blue Letters",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1655269393/cat1.jpg",
    ],
    likedBy: ["@Sid", "@TheNational"],
    comments: [
      {
        commentedBy: "@InnocentAmber",
        comment: "im a victim of abuse!",
        commentedAt: "May 6th 2022",
        commentId: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@Butthead",
    uploadedAt: "May 9th 2022",
    title: "Bunghole",
    description: "Look they painted my friend Beavis",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1654318705/Beavis%20art.jpg",
    ],
    likedBy: ["@TheNational"],
    comments: [
      {
        commentedBy: "@BillyTheCat",
        comment: "Meow!",
        commentedAt: "May 9th 2022",
      },
      {
        commentedBy: "@TheNational",
        comment: "Nice, hes my fav character",
        commentedAt: "May 12th 2022",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@BillyTheCat",
    uploadedAt: "May 12th 2022",
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
        commentedAt: "May 12th 2022",
      },
      {
        commentedBy: "@TheNational",
        comment: "i like dogs more but it looks cool",
        commentedAt: "May 12th 2022",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@InnocentAmber",
    uploadedAt: "May 3rd 2022",
    title: "3D!!!",
    description: "blue blue blue like my feelings",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1655271738/wildstyle2.jpg",
    ],
    likedBy: ["@Sid", "@BillyTheCAt", "@Butthead"],
    comments: [
      {
        commentedBy: "@Butthead",
        comment: "hey BAbY",
        commentedAt: "May 3rd 2022",
      },
      {
        commentedBy: "@Sid",
        comment: "get hit by the puck, then youll be blue!",
        commentedAt: "May 3rd 2022",
      },
      {
        commentedBy: "@BillyTheCat",
        comment: "stop whining",
        commentedAt: "May 4th 2022",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@Sid",
    uploadedAt: "May 14th 2022",
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
        commentedAt: "May 14th 2022",
      },
      {
        commentedBy: "@TheNational",
        comment: "I like sticks, drum sticks",
        commentedAt: "May 14th 2022",
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
    uploadedBy: "@InnocentAmber",
    uploadedAt: "July 10",
    title: "Im innocent!",
    description: "women are humans too!!",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1655269775/obeycope.jpg",
    ],
    likedBy: ["@Sid", "@TheNational"],
    comments: [
      {
        commentedBy: "@BillyTheCat",
        comment: "shut up!",
        commentedAt: "July 10, 3:05am",
      },
      {
        commentedBy: "@TheNational",
        comment: "you stole that pic of the net!",
        commentedAt: "July 10, 1pm",
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
    uploadedBy: "@TheNational",
    uploadedAt: "May 9th 2022",
    title: "its Batman!",
    description: "wheat paste by stikkipeaches",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1655269964/sticker4.jpg",
    ],
    likedBy: ["@TheNational"],
    comments: [
      {
        commentedBy: "@BillyTheCat",
        comment: "id scratch that door",
        commentedAt: "May 9th 2022",
      },
      {
        commentedBy: "@InnocentAmber",
        comment: "I need a Hero like that",
        commentedAt: "May 12th 2022",
      },
    ],
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
    uploadedBy: "@TheTingMan",
    uploadedAt: "July 11",
    title: "Mtl Throwie",
    description: "red quickie ",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1655270875/redgraff.jpg",
    ],
    likedBy: ["@BillyTheCat", "@TheNational"],
    comments: [
      {
        commentedBy: "@Sid",
        comment: "Detroit Red Wings color",
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
    uploadedBy: "@TheNational",
    uploadedAt: "July 11",
    title: "The pop",
    description: "look at that fade ",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1655271737/wildstyle3.jpg",
    ],
    likedBy: ["@Sid", "@BillyTheCat", "@TheNational", "@InnocentAmber"],
    comments: [
      {
        commentedBy: "@BillyTheCat",
        comment: "revives that wall",
        commentedAt: "July 11, 4:09pm",
      },
    ],
  },
  {
    id: uuidv4(),
    uploadedBy: "@TheTingMan",
    uploadedAt: "July 11",
    title: "King Tags",
    description: "Legend names ",
    images: [
      "https://res.cloudinary.com/brighting/image/upload/v1655269930/kingtags.jpg",
    ],
    likedBy: ["@BillyTheCat", "@TheNational"],
    comments: [
      {
        commentedBy: "@BillyTheCat",
        comment: "drippy",
        commentedAt: "July 11, 3:03pm",
      },
      {
        commentedBy: "@TheNational",
        comment: "my wife wanted a new door...",
        commentedAt: "July 11, 3:03pm",
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
