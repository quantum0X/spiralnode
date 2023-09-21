import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, cover, createdAt, author }) => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 my-5 ">
      <div className="h-60 overflow-hidden">
        <Link to={`/post/${_id}`}>
          <img alt="img" src={"http://localhost:4000/" + cover} />
        </Link>
      </div>
      <div className=" mx-4">
        <Link to={`/post/${_id}`}>
          <h2 className="text-xl font-medium">{title}</h2>
        </Link>
        <p className="text-sm my-1">
          <span className="font-bold">{author.mail} </span>
          <time>{format(new Date(createdAt), "iii, MMM d, yyyy HH:mm")}</time>
        </p>
        {summary}
      </div>
    </div>
  );
};

export default Post;
