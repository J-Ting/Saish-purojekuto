// [
//     {email: test@gmail.com,
//     Name: "@username",
//     posts: [... id of images, id of images]]}

//     images { id: dsfas,
//         Imgurl: https://res.cloudinary.com/brighting/image/upload/v1654286141/02-cat-training-NationalGeographic_1484324_3x4_th4m5g.jpg
//         likes: 3;
//         Comment;
// boy


// [{img}{img}{img}]


// users
const users = [
    {
        id: '123',
        name: "bob",
        avatarUrl: 'something.jpg'
    },
    {
        id: '456',
        name: 'Mary',
        avatarUrl: 'somethingElse.jpg' 
    }
]

// posts
const posts = [
    {
        uploadedBy: '123',
        upladedAt: 'may 1',
        title: 'The pig',
        description: 'a pig walking on the ceiling',
        images: ['https://res.cloudinary.com/brighting/image/upload/v1654285799/cld-sample-5.jpg', 'imageB.jpg'],
        likedBy: ['123', '456']
        comments: [
            {
                userId: '123',
                comment: 'this sucks in a marvelous way'
                commentedAt: '15 may, 4pm'
            }
        ]
    }
]