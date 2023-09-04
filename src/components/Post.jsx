import React from "react";

const Post = () => {
  return (
    <div className="grid grid-cols-2 gap-5 my-5 ">
      <div>
        <img
          alt="img"
          src="https://st2.depositphotos.com/1428083/7203/i/450/depositphotos_72035847-stock-photo-woman-doing-exercize-at-sunset.jpg"
        />
      </div>
      <div className="mx-4">
        <h2 className="text-xl font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          ipsam eum officia.
        </h2>
        <p className="text-sm my-1">
          <span className="font-bold">Post Date:</span>
          2023-Aug-23 02:22 GMT
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis atque
          incidunt consequuntur debitis doloribus ipsam hic ex culpa ea ratione,
          nemo praesentium iste possimus laboriosam vero et cumque obcaecati
          nulla cum commodi.
        </p>
      </div>
    </div>
  );
};

export default Post;
