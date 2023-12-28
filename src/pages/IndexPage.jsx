import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY_POST}`).then((res) => {
      res.json().then((UserPosts) => {
        setPosts(UserPosts);
      });
    });
  }, []);
  return (
    <>
      {posts.length > 0 ? (
        posts.map((post, index) => <Post key={index} {...post} />)
      ) : (
        <h2>No post</h2>
      )}
    </>
  );
};

export default IndexPage;
