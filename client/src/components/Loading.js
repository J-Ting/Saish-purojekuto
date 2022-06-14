import styled, { keyframes } from "styled-components";

export const Loading = () => {
  return (
    <Container>
      <Roller>
        <Handle></Handle>
      </Roller>
      <Paint></Paint>
    </Container>
  );
};

const Container = styled.div`
  height: 350px;
  width: 350px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
`;

const Roller = styled.div`
  height: 45px;
  width: 150px;
  border: 5px solid #040e15;
  border-radius: 7px;
  background-image: linear-gradient(
    to bottom,
    #ffca3e 0,
    #ffca3e 80%,
    #fc8f2e 80%
  );
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  animation: roller 2s infinite;

  @keyframes roller {
    90% {
      top: 165px;
    }
  }

  &:before {
    position: absolute;
    content: "";
    background-color: rgba(255, 255, 255, 0.7);
    height: 7px;
    width: 75px;
    top: 8px;
    left: 8px;
    border-radius: 10px;
  }

  &:after {
    position: absolute;
    content: "";
    height: 40px;
    width: 85px;
    border: 7px solid #040e15;
    border-left: none;
    right: -20px;
    top: 20px;
    z-index: -1;
    border-radius: 7px;
  }
`;

const Handle = styled.div`
  height: 30px;
  width: 7px;
  background-color: #040e15;
  position: absolute;
  top: 68px;
  right: 65px;

  &:after {
    position: absolute;
    content: "";
    height: 75px;
    width: 25px;
    background-color: brown;
    bottom: -75px;
    right: -8px;
    border-radius: 5px;
  }
`;

const Paint = styled.div`
  background-color: #ffca3e;
  height: 0;
  width: 130px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  z-index: -1;
  animation: paint 2s infinite;

  @keyframes paint {
    90% {
      height: 165px;
    }
  }
`;
