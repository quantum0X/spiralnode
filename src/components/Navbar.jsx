import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUsername(userInfo.mail);
      });
    });
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:4000/logout", {
      method: "POST",
      credentials: "include",
    });
    setUsername(null);
  };

  return (
    <div className="flex py-6 justify-between items-centersticky top-0 z-20">
      <div>
        <Link className="font-semibold text-2xl" href="/">
          MyBlog
        </Link>
      </div>
      <div>
        {username ? (
          <>
            <Link className="mx-2 text-lg" to="#">
              New Post
            </Link>
            <button className="mx-2 text-lg" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="mx-2 px-4 py-1 text-lg outline" to="/login">
              Login
            </Link>
            <Link className="mx-2 text-lg px-4 py-1 bg-gray-500" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
