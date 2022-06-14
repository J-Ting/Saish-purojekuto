import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SprayLogo from "../assets/20951346.jpg";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import { UserProfile } from "./UserProfile";

//icons
import spraywall from "../assets/street-art-svgrepo-com.svg";
import photographer from "../assets/photographer.svg";
import upload from "../assets/upload.svg";

//Auth0
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const { user } = useAuth0();

  console.log("user", user);
  return (
    <Div>
      {/* <p>website name</p> */}
      <Img src={`${SprayLogo}`} />

      <Nav>
        <NavLinkz to="/">
          {" "}
          <Icon src={spraywall} />
          <Span>Home</Span>
        </NavLinkz>

        <NavLinkz to="/users">
          {" "}
          <Icon src={photographer} />
          <Span>Users</Span>
        </NavLinkz>

        <NavLinkz to="/upload">
          <Icon src={upload} />
          <Span>Upload</Span>
        </NavLinkz>
      </Nav>
      <LogDiv>
        <UserProfile />
        <LoginButton />
        <LogoutButton />
      </LogDiv>
    </Div>
  );
};

//Styling

const Div = styled.div`
  position: sticky;
  top: 0;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0px;
  height: 25px;

  padding-left: 2.78vw;
  padding-right: 2.78vw;

  z-index: 5;
`;

const Img = styled.img`
  width: 50px;
  border-radius: 60px;
  margin-left: 10px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
`;

const NavLinkz = styled(NavLink)`
  transition: all 0.3s ease 0s;
  text-decoration: none;
`;

const Icon = styled.img`
  height: 40px;
`;

const Span = styled.span`
  display: flex;
  color: black;
`;

const LogDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70px;
`;
