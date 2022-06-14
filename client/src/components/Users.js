import { useContext } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { UsersContext } from "../contexts/UsersContext";
import { Loading } from "./Loading";

export const Users = () => {
  const { isLoaded, users } = useContext(UsersContext);

  const navigate = useNavigate();

  return (
    <>
      {isLoaded ? (
        users.map((user) => {
          return (
            <Div onClick={() => navigate(`/profile/${user.handler}`)}>
              <Box>
                <Front>
                  <Img src={user.avatarUrl} />
                </Front>
                <Back>
                  <p> {user.name}</p>
                  <p>{user.handler}</p>
                </Back>
              </Box>
            </Div>
          );
        })
      ) : (
        <Loading />
      )}
    </>
  );
};

//---------STYLING--------------

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  float: left;
  gap: 30px;
  margin: 10px;
  text-align: center;
  cursor: pointer;
`;

const Box = styled.div`
  /* position: absolute; */
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
  width: 300px;
  height: 200px;
`;

const Front = styled.div`
  border-radius: 50%;
  /* float: left; */
  width: 200px;
  height: 200px;

  /* width: 100%;
  height: 100%; */
  position: absolute;
  top: 0;
  left: 0;
  transition: 2s;
  backface-visibility: hidden;
  border: 5px solid;
  transform: perspective(1000px) rotateY(0deg);
  z-index: 2;

  &:hover {
    transform: perspective(1000px) rotateY(-180deg);
    z-index: 1;
  }
`;

const Back = styled.div`
  border-radius: 50%;
  /* float: left; */
  width: 200px;
  height: 200px;

  /* width: 100%;
  height: 100%; */
  position: absolute;
  top: 0;
  left: 0;
  transition: 2s;
  backface-visibility: visible;
  border: 5px solid;
  transform: perspective(1000px) rotateY(0deg);
  background-color: lightblue;

  z-index: 1;

  &:hover {
    transform: perspective(1000px) rotateY(0deg);
    z-index: 1;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  float: left;
  width: 200px;
  height: 200px;
  object-fit: cover;

  /* &:hover {
    transform: scaleX(-1);
  } */
`;
