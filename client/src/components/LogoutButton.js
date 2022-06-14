import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

export const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Button onClick={() => logout({ returnTo: window.location.origin })}>
        {/* Log Out */}

        <Svg xmlns="http://www.w3.org/2000/svg">
          <path d="M16 9V5l8 7-8 7v-4H8V9h8zm-2 10v-.083A7.93 7.93 0 0 1 10 20c-4.411 0-8-3.589-8-8s3.589-8 8-8a7.93 7.93 0 0 1 4 1.083V2.838A9.957 9.957 0 0 0 10 2C4.478 2 0 6.477 0 12s4.478 10 10 10a9.957 9.957 0 0 0 4-.838V19z" />
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
