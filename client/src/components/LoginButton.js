import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button
        onClick={() =>
          loginWithRedirect({ redirectUri: "http://localhost:3000/upload" })
        }
      >
        {/* Log In */}
        {/* insert SVG icon here */}
        <Svg xmlns="http://www.w3.org/2000/svg">
          <path d="M19 7.001A7 7 0 1 1 4.999 7 7 7 0 0 1 19 7zm-1.598 7.18A8.937 8.937 0 0 1 12 16.001a8.953 8.953 0 0 1-5.407-1.822C2.521 15.972 0 21.555 0 24h24c0-2.423-2.6-8.006-6.598-9.819z" />
        </Svg>
      </Button>
    )
  );
};

const Button = styled.button`
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

const Svg = styled.svg`
  transform: scale(0.7);
  width: 24px;
  height: 24px;
  transform-origin: center center;
  fill: #95a5a6;
`;
