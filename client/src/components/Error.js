// ----------- IMPORTS ----------------
import { Link } from "react-router-dom";
import styled from "styled-components";
// import font

// import banksy from "../assets/banksy1.jpg";
import errorGraff from "../assets/404graff.jpeg";

// Error page component
export const Error = () => {
  return (
    <Container>
      <ImgDiv />

      <h3>Did you hear about the artist who died? He had too many strokes.</h3>
      <h3>
        We're sorry for the lame joke, but it looks like the page you're looking
        for isn't in our system anymore. Time to head back
        {/* Link for user To return Homepage */}
        <Linkz className="colorLink" to="/">
          {" "}
          home
        </Linkz>
      </h3>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
/* font-family: "Poppins", sans-serif; */

const ImgDiv = styled.div`
  background-image: url(${errorGraff});
  background-position: center;
  background-size: cover;
  width: 700px;
  height: 500px;
`;

const Linkz = styled(Link)`
  color: orange;
  text-decoration: none;
`;
