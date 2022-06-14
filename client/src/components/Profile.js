import { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//cloudinary
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

import { PostsContext } from "../contexts/PostsContext";
import { Loading } from "./Loading";

export const Profile = () => {
  const { posts } = useContext(PostsContext);
  const { handler } = useParams();
  const navigate = useNavigate();

  const [isLoaded, setIsLoaded] = useState(false);
  const [singleUser, setSingleUser] = useState([]);

  // -----------------------------CLOUdinary
  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "brighting",
    },
  });

  // Use the image with public ID, 'front_face'.
  const myImage = cld.image(singleUser.cldImageId);

  // const myImage = cld.image("The National");
  // test hardcoded for the pic
  // const myImage = cld.image("Butthead.jpg");

  // Apply the transformation.
  myImage
    .resize(thumbnail().width(200).height(200).gravity(focusOn(FocusOn.face()))) // Crop the image, focusing on the face.
    .roundCorners(byRadius(10)); // Round the corners.

  //^^^^^^^^^^^^^^^^^CLOUIDINARY^^^^^^^^^^^^^^

  // console.log("posts", posts);

  // useEffect to fetch specific user
  useEffect(() => {
    fetch(`/api/get-user/${handler}`)
      .then((res) => res.json())

      .then((data) => {
        // console.log(data);
        setSingleUser(data.data);

        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //get posts by specific user
  const userPosts = posts.filter((eachPost) => {
    return eachPost.uploadedBy === singleUser.handler;
  });

  // console.log("userPosts", userPosts);

  return (
    <>
      <PageContainer>
        {isLoaded ? (
          <>
            {/* -----------------PROFILE INFO---------- */}
            <UserInfo>
              <AdvancedImage cldImg={myImage} />
              <UserInfoDiv>
                <h1>{singleUser.name}</h1>
                <h2>{singleUser.handler}</h2>
                <h2> {userPosts.length} Post</h2>
              </UserInfoDiv>
            </UserInfo>
            {/* ^^^^^PROFILE INFO^^^^^^ */}

            {/* ------------USER'S POST--------------- */}
            <div>
              {[...userPosts].reverse().map((post) => {
                return (
                  <Post>
                    <Img
                      src={post.images.map((pic) => {
                        return pic;
                      })}
                      alt="user's posted image"
                      onClick={() => navigate(`/postDetails/${post.id}`)}
                    />
                    <PostDescription>
                      <p> description: {post.description}</p>
                      <p> uploaded on {post.uploadedAt}</p>
                    </PostDescription>
                  </Post>
                );
              })}
            </div>
            {/* ^^^^^^^^^^^^^USER'S POST^^^^^^^^^^^^^^^ */}
          </>
        ) : (
          <Loading />
        )}
      </PageContainer>
    </>
  );
};

//---------STYLING--------------

const Img = styled.img`
  max-width: 600px;
  border-radius: 20px;
`;

const UserInfo = styled.div`
  display: flex;

  gap: 50px;
`;

const UserInfoDiv = styled.div``;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const PostDescription = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Post = styled.div`
  border: 2px solid black;
  padding: 50px;
  margin: 30px;
`;
