import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Member } from "./Member";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Moment from "moment";

//background image

import SprayLogo from "../assets/20951346.jpg";
import supplies from "../assets/supplies.jpeg";

//icon
import { BsImage } from "react-icons/bs";

import { SignedinContext } from "../contexts/SignedinContext";
import { PostsContext } from "../contexts/PostsContext";

export const Upload = ({ children }) => {
  const { setPicUploaded } = useContext(PostsContext);
  const { loggedInUser } = useContext(SignedinContext);

  const [widgetRef, setWidgetRef] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const [imageLatitude, setImageLatitude] = useState("");
  const [imageLongitude, setImageLongitude] = useState("");

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  const cantSubmit = !imageUrl || !title || !description;

  // -----Cloudinary Widget modal-------------
  useEffect(() => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "brighting",
        uploadPreset: "artsy38",
      },
      (error, result) => {
        console.log(error, result);

        if (result.event === "success") {
          setImageUrl(result.info.secure_url);
          setImageLatitude(result.info.image_metadata.GPSLatitude);
          setImageLongitude(result.info.image_metadata.GPSLongitude);
        }
      }
    );

    setWidgetRef(widget);
  }, []);
  // ^^^^^^^^^^^^^Cloudinary Widget modal^^^^^^^^^^^^^^

  // console.log("URL", imageUrl);

  const handlePost = (e) => {
    e.preventDefault();
    const postInfo = {
      uploadedBy: loggedInUser,
      title,
      description,
      images: [imageUrl],
      uploadedAt: Moment().format("MMMM Do YYYY"),
      imageLatitude,
      imageLongitude,
    };

    // console.log("POST DATA", postInfo);

    // fetch for submitting post
    fetch("/api/add-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(postInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Success:", data);
        setTitle("");
        setDescription("");
        setPicUploaded((prev) => !prev);
        navigate("/");
        // navigate(`/postDetails/${loggedInUser}`);
      })

      .catch((err) => console.log("error", err));
  };

  console.log("URL", imageUrl);

  return isAuthenticated ? (
    <WholePage>
      <Container>
        <Button onClick={() => widgetRef.open()}>
          Choose Picture <BsImage />
        </Button>

        <Form onSubmit={handlePost}>
          <div>
            <Label for="title">Title</Label>
            <Input
              id="title"
              required
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></Input>
          </div>

          <div>
            <Label for="description">Description</Label>

            <TextArea
              id="description"
              required
              type="text"
              placeholder=" Enter Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>

          <Button type="submit" disabled={cantSubmit ? true : false}>
            UPLOAD
          </Button>
        </Form>
      </Container>
    </WholePage>
  ) : (
    <>
      <Member />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* margin-top: 100px; */
  /* background-color: red; */
  color: orange;

  // $.tag {}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border-color: red; */
  box-sizing: border-box;
  /* line-height: 1.5; */
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border: 2px solid #2980b9;
  padding: 0.5rem;
  font-size: 18px;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  /* width: 100%;
  height: 100px;

  border: solid red 2px;
  outline: none;
  max-height: 400px; */

  display: block;
  width: 100%;
  border: 2px solid #2980b9;
  padding: 0.5rem;
  font-size: 18px;
  border-radius: 5px;
`;

const Button = styled.button`
  border: 0;
  background: #343050;
  padding: 0.5rem;
  color: white;
  margin: 1rem 0;
  width: auto;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s background ease;
  &:hover {
    background: green;
  }
`;

const Label = styled.label`
  display: block;
  padding: 1rem 0 0.25rem;
  text-transform: uppercase;
  font-size: 14px;
`;

const WholePage = styled.div`
  background-image: url(${supplies});
  background-position: center;
  background-size: cover;
  /* width: 1200px; */
  height: 100vh;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  margin: 0;
`;
