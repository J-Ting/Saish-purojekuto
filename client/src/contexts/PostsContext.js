// ----------- IMPORTS ----------------
import { createContext, useState, useEffect } from "react";

export const PostsContext = createContext(null);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [picUploaded, setPicUploaded] = useState(false);
  const [trigger, setTrigger] = useState(false);

  // Fetch ALL posts
  useEffect(() => {
    fetch("/api/get-posts")
      .then((res) => res.json())

      .then((data) => {
        setPosts(data.data);

        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [picUploaded, trigger]);

  return (
    <PostsContext.Provider
      value={{ posts, isLoaded, setPicUploaded, setTrigger, trigger }}
    >
      {children}
    </PostsContext.Provider>
  );
};
