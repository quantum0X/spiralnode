import React from "react";

const Post = ({ title, summary, cover, content }) => {
  // const { title } = props;
  // console.log(props);
  return (
    <div className="grid grid-cols-2 gap-5 my-5 ">
      <div>
        <img
          alt="img"
          src="https://st2.depositphotos.com/1428083/7203/i/450/depositphotos_72035847-stock-photo-woman-doing-exercize-at-sunset.jpg"
        />
      </div>
      <div className="mx-4">
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-sm my-1">
          <span className="font-bold">Post Date:</span>
          2023-Aug-23 02:22 GMT
        </p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Post;
