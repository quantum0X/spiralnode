import React from "react";
import { format } from "date-fns";

const Post = ({ title, summary, cover, content, createdAt, author }) => {
  return (
    <div className="grid grid-cols-2 gap-5 my-5 ">
      <div>
        <img alt="img" src={"http://localhost:4000/" + cover} />
      </div>
      <div className="mx-4">
        <h2 className="text-xl font-medium">{title}</h2>
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
