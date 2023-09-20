import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((res) => {
      res.json().then((UserPosts) => {
        console.log(UserPosts);
        setPosts(UserPosts);
      });
    });
  }, []);
  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => <Post {...post} />)
      ) : (
        <h2>No post</h2>
      )}
    </>
  );
};

export default IndexPage;
