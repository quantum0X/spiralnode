import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  // logout handle
  const handleLogout = () => {
    fetch("http://localhost:4000/logout", {
      method: "POST",
      credentials: "include",
    });
    setUserInfo(null);
  };

  const userValidate = userInfo?.mail;

  return (
    <div className="flex py-6 justify-between items-centersticky top-0 z-20">
      <div>
        <Link className="font-semibold text-2xl" href="/">
          MyBlog
        </Link>
      </div>
      <div>
        {userValidate ? (
          <>
            <Link className="mx-2 text-lg" to="/createpost">
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
