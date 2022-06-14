// ----------- IMPORTS ----------------
import { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const SignedinContext = createContext(null);

export const SignedinProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const { isAuthenticated } = useAuth0();

  // Fetch one user

  useEffect(() => {
    if (isAuthenticated) {
      fetch("/api/get-user/@TheTingMan")
        .then((res) => res.json())

        .then((data) => {
          console.log("data", data);
          setLoggedInUser(data.data.handler);

          setIsLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoggedInUser(null);
    }
  }, [isAuthenticated]);

  console.log("loggedInUser", loggedInUser);

  return (
    <SignedinContext.Provider value={{ loggedInUser }}>
      {children}
    </SignedinContext.Provider>
  );
};
