import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { PostsContext } from "../contexts/PostsContext";
import { Loading } from "./Loading";

export const Home = () => {
  const { isLoaded, posts } = useContext(PostsContext);

  const navigate = useNavigate();

  return (
    <Container>
      {isLoaded ? (
        [...posts].reverse().map((post) => {
          return (
            <Div
              key={post.id}
              onClick={() => navigate(`/postDetails/${post.id}`)}
            >
              <Img
                src={post.images.map((pic) => {
                  return pic;
                })}
                alt="user's posted image"
              />

              <Homeimginfo>
                <Homeimginfoinner>
                  <h2>{post.title}</h2>
                  <p>{post.uploadedBy}</p>
                </Homeimginfoinner>
              </Homeimginfo>
            </Div>
          );
        })
      ) : (
        <Loading />
      )}
    </Container>
  );
};

//---------STYLING--------------

const Homeimginfo = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 30%;
  width: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 1) 15%,
    rgba(0, 0, 0, 0) 100%
  );

  /* anims */
  opacity: 0;
  transition: opacity 0.4s ease;
`;

const Homeimginfoinner = styled.div`
  position: relative;
  padding: 40px;
  /* height: 80%; */

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h2,
  p {
    margin: 0;
    color: white;

    /* anims */
    opacity: 0;
    transform: translateY(6px);
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  p {
    margin-top: 10px;
  }
`;

const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    & > div {
      opacity: 1;
    }

    h2,
    p {
      transform: translateY(0);
      opacity: 1;
    }

    h2 {
      transition-delay: 0.2s;
    }
    p {
      transition-delay: 0.3s;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
`;

// const Div = styled.div`
//   /* border-bottom: 5px solid green;
//   max-width: 500px;
//   margin-left: 40px; */
// `;

const Container = styled.div`
  padding: 2.78vw;
  padding-top: 120px;

  /* content */
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2.78vw;
  row-gap: 2.78vw;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
