import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

export const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        {console.log("user", user)}
        <Img src={user.picture} alt={user.name} />
        {/* <h2>{user.name}</h2> */}
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
};

const Img = styled.img`
  border-radius: 50%;
  height: 50px;
`;
