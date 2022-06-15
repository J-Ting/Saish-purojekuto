import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SignedinContext } from "../contexts/SignedinContext";

import Moment from "moment";

import { useAuth0 } from "@auth0/auth0-react";
import { PostsContext } from "../contexts/PostsContext";
import { Loading } from "./Loading";

export const PostDetails = () => {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [comment, setComment] = useState("");
  const [commentPosted, setCommentPosted] = useState(false);

  const [isLiked, setIsLiked] = useState(false);
  const { loggedInUser } = useContext(SignedinContext);
  const { setTrigger, trigger } = useContext(PostsContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const { isAuthenticated } = useAuth0();

  // date function
  const formatDate = Moment().format("MMMM Do YYYY");

  // useEffect to fetch specific post
  useEffect(() => {
    fetch(`/api/get-post/${id}`)
      .then((res) => res.json())

      .then((data) => {
        // console.log(data);
        setSinglePost(data.data);

        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [commentPosted, isLiked, trigger]);

  // to add a like
  const handleLike = (e) => {
    e.preventDefault();

    const likeInfo = {
      loggedInUser,
    };

    //fetch for updating likes

    fetch(`/api/update-likes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(likeInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Success:", data);
        setIsLiked((prev) => !prev);
      })
      .catch((err) => console.log("error", err));
  };

  // to submit comment
  const handleComment = (e) => {
    e.preventDefault();

    const commentInfo = {
      commentedBy: loggedInUser,
      comment: comment,
      commentedAt: formatDate,
    };

    // fetch for updating comments
    fetch(`/api/update-comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(commentInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setComment("");
        setCommentPosted((prev) => !prev);
      })
      .catch((err) => console.log("error", err));
  };

  // to delete post
  const handleDeletePost = (e) => {
    e.preventDefault();

    // fetch for finding post to delete
    fetch(`/api/delete-post/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setTrigger((prev) => !prev);
        navigate(`/profile/${loggedInUser}`);
      })
      .catch((err) => console.log("error", err));
  };

  // to delete comment
  const handleDeleteComment = (commentId) => {
    const commentInfoDelete = {
      commentId,
    };

    fetch(`/api/delete-comment/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
      },
      body: JSON.stringify(commentInfoDelete),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setTrigger((prev) => !prev);
        // navigate(`/profile/${loggedInUser}`);
      })
      .catch((err) => console.log("error", err));
  };

  return (
    <PageContainer>
      {isLoaded ? (
        <>
          <h1>{singlePost.title}</h1>
          <p>
            by:{" "}
            <Span onClick={() => navigate(`/profile/${singlePost.uploadedBy}`)}>
              {" "}
              {singlePost.uploadedBy}
            </Span>{" "}
          </p>
          <Img
            src={singlePost.images.map((pic) => {
              return pic;
            })}
            alt="user's posted image"
          />

          {isAuthenticated && (
            <>
              <LikeDiv>
                <Button onClick={handleLike}> LIKE</Button>
                <p>{singlePost.likedBy.length} Likes</p>
              </LikeDiv>
              {loggedInUser === singlePost.uploadedBy && (
                <button onClick={handleDeletePost}>delete post</button>
              )}
            </>
          )}

          <p> on {singlePost.uploadedAt}</p>
          <p> description: {singlePost.description}</p>
          {singlePost.comments ? (
            <>
              <p> comments: </p>
              {[...singlePost.comments].reverse().map((comment) => {
                return (
                  <CommentDiv>
                    <CommentByP>
                      <Span
                        onClick={() =>
                          navigate(`/profile/${comment.commentedBy}`)
                        }
                      >
                        {comment.commentedBy}
                      </Span>{" "}
                      said:
                    </CommentByP>
                    <p>{comment.comment}</p>
                    <CommentDateP>on {comment.commentedAt}</CommentDateP>

                    {comment.commentedBy === loggedInUser ? (
                      <DeleteBtn
                        onClick={() => {
                          handleDeleteComment(comment.commentId);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                        >
                          <path d="M1.615 11.375.08 10.389l5.399-.618 1.924 5.023-1.518-.961c-1.482 2.402-2.843 5.215-1.979 7.896C1.403 19.607 0 17.976 0 16.006c0-1.422.924-3.339 1.615-4.631zM5.672 17c-.763.931-1.002 2.887-.753 4.071A1.17 1.17 0 0 0 6.066 22H11v-5H5.672zm10.706 5.176V24l-3.37-4.263 3.37-4.282v1.797c2.823-.005 5.798-.333 7.622-2.479-.484 3.246-1.131 5.298-2.805 6.336-1.209.748-3.354.973-4.817 1.067zm2.672-6.413c1.193.158 2.982-.669 3.857-1.505a1.17 1.17 0 0 0 .186-1.464l-2.6-4.192-4.25 2.634 2.807 4.527zm-.937-11.561 1.61-.859-2.097 5.014-5.323-.772 1.579-.856C12.51 4.262 10.72 1.701 7.957 1.146 9.861.435 11.395 0 12.694 0c2.238 0 3.54 1.265 5.419 4.202zm-6.889.795c-.44-1.12-2.031-2.285-3.186-2.645a1.17 1.17 0 0 0-1.371.547L4.259 7.206l4.364 2.441 2.601-4.65z" />
                        </svg>
                      </DeleteBtn>
                    ) : (
                      <></>
                    )}
                  </CommentDiv>
                );
              })}
            </>
          ) : (
            <></>
          )}
          {isAuthenticated && (
            <Form onSubmit={handleComment}>
              <CommentBox
                type="text"
                placeholder="comment"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />{" "}
              <AddCommentBtn type="submit" disabled={!comment ? true : false}>
                Add Comment
              </AddCommentBtn>
            </Form>
          )}
        </>
      ) : (
        <Loading />
      )}
    </PageContainer>
  );
};

//---------STYLING--------------

const Img = styled.img`
  max-width: 600px;
  border-radius: 20px;
`;

const Span = styled.span`
  font-weight: 500;
  cursor: pointer;
`;

const CommentDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  background-color: light grey;
  width: 600px;
  border: solid 2px lightblue;
  margin: 20px;
  position: relative;
  padding: 34px 20px 20px;
`;

const CommentBox = styled.textarea`
  width: 624px;
  border-radius: 10px;
  height: 49px;
  background: transparent;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 80px;
`;

const LikeDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 300px;
  padding-top: 20px;
  /* text-align: end; */
`;

const Button = styled.button`
  border: 0;
  background: red;
  color: white;
  border: 1px solid black;
  padding: 0.5rem;
  color: white;
  margin: 1rem 0;
  width: auto;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s background ease;
  &:hover {
    background: white;
    color: red;
  }
`;

const CommentByP = styled.p`
  position: absolute;
  top: 0;
  left: 20px;
  font-weight: 500;
`;

const CommentDateP = styled.p`
  position: absolute;
  bottom: 10px;
  right: 20px;
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  /* border: 2px #ecf0f1 solid; */
  border-radius: 100%;
  width: 40px;
  height: 40px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  /* anims */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ecf0f1;
    /* border-color: transparent; */

    svg {
      fill: #34495e;
    }
  }
`;

const Form = styled.form`
  display: flex;

  flex-direction: column;

  width: 44.72vw;
`;

const AddCommentBtn = styled.button`
  max-width: 130px;
  border: none;
  background: orange;
  color: black;
  margin-top: 20px;
  padding: 12px;
  border-radius: 24px;
  cursor: pointer;
`;
