// ----------- IMPORTS ----------------
import { createContext, useState, useEffect } from "react";

export const UsersContext = createContext(null);

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch ALL users
  useEffect(() => {
    fetch("/api/get-users")
      .then((res) => res.json())

      .then((data) => {
        console.log("data", data);
        setUsers(data.data);

        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <UsersContext.Provider value={{ users, isLoaded }}>
      {children}
    </UsersContext.Provider>
  );
};
