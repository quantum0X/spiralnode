import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex py-6 justify-between items-centersticky top-0 z-20">
      <div>
        <Link className="font-semibold text-2xl" href="/">
          MyBlog
        </Link>
      </div>
      <div>
        <Link className="mx-2 text-lg" to="/login">
          Login
        </Link>
        <Link className="mx-2 text-lg" to="/signup">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
