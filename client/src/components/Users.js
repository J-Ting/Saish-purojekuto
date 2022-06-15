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
    <GlobalContainer>
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
    </GlobalContainer>
  );
};

//---------STYLING--------------

const GlobalContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

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
  position: relative;
  height: 200px;
  width: 200px;
`;

const Front = styled.div`
  border-radius: 50%;
  /* float: left;
  width: 200px;
  height: 200px; */

  /* width: 100%;
  height: 100%; */
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  border: 5px solid;
  z-index: 2;

  transition: 0.6s linear transform;
  transform: perspective(1000px) rotateY(0deg);

  &:hover {
    transform: perspective(1000px) rotateY(-180deg);
    /* z-index: 1; */
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
  transform: perspective(0) rotateY(0deg);
  background-color: lightblue;

  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
  }

  p + p {
    margin-top: 10px;
  }

  /* &:hover {
    transform: perspective(1000px) rotateY(0deg);
    z-index: 1;
  } */
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
