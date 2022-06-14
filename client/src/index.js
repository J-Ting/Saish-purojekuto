import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

import { PostsProvider } from "./contexts/PostsContext";
import { UsersProvider } from "./contexts/UsersContext";
import { SignedinProvider } from "./contexts/SignedinContext";

//for Auth0 from .env
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="brighting.us.auth0.com"
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    // redirectUri="http://localhost:3000 "
    redirectUri={window.location.origin}
  >
    <PostsProvider>
      <UsersProvider>
        <SignedinProvider>
          <App />
        </SignedinProvider>
      </UsersProvider>
    </PostsProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
