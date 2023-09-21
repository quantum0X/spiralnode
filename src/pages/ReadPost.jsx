import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const ReadPost = () => {
  const { id } = useParams();
  const { userInfo } = useContext(UserContext);
  const [postContent, setPostContent] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((res) => {
      res.json().then((postInfo) => {
        setPostContent(postInfo);
        console.log(postInfo.author?.mail);
      });
    });
  }, []);

  return (
    <div>
      {userInfo?.id === postContent?.author?._id && (
        <div className="flex justify-end">
          <Link
            to={`/edit/${postContent._id}`}
            className="bg-slate-900 py-1 px-2 text-white rounded-sm my-2 "
          >
            Edit Post
          </Link>
        </div>
      )}

      <img
        src={`http://localhost:4000/${postContent.cover}`}
        alt=""
        srcset=""
      />
      <h1 className="text-3xl">{postContent.title}</h1>
      {postContent.author?.mail}
      <p>{postContent.summary}</p>
      <div>
        <div dangerouslySetInnerHTML={{ __html: postContent.content }} />
      </div>
    </div>
  );
};

export default ReadPost;
