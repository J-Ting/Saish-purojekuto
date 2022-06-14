// ----------- IMPORTS ----------------
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

//components import
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { Profile } from "./components/Profile";
import { PostDetails } from "./components/PostDetails";
import { Upload } from "./components/Upload";
import { Loading } from "./components/Loading";
import { Error } from "./components/Error";

// Auth0 imports
// import { Auth0Provider } from "@auth0/auth0-react";

export const App = () => {
  return (
    <Router>
      {/* <GlobalStyles> */}
      {/* <Auth0Provider
        domain="brighting.us.auth0.com"
        clientId="23HbJEuy5K4pHfH5eS7qbVkM1b9QdXP4"
        // redirectUri="http://localhost:3000 "
        redirectUri={window.location.origin}
      > */}
      <Navbar />
      {/* <LoginButton />
      <LogoutButton />
      <UserProfile /> */}
      {/* </Auth0Provider> */}
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/users" element={<Users />} />

        <Route exact path="/profile/:handler" element={<Profile />} />

        <Route exact path="/postDetails/:id" element={<PostDetails />} />

        <Route exact path="/upload" element={<Upload />} />

        <Route exact path="/loading" element={<Loading />} />

        <Route exact path="*" element={<Error />} />
      </Routes>
      {/* </GlobalStyles> */}
    </Router>
  );
};
