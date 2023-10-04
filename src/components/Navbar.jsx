import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  console.log(process.env.API_KEY);
  const url = process.env.API_KEY + "/post";
  console.log(url);

  let paramUrl = useLocation();
  console.log(paramUrl);

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
            {paramUrl.pathname === "/signup" || paramUrl.pathname === "/" ? (
              <Link
                className="bg-main-dark w-fit px-5 py-1 mx-auto text-lg text-main-text-light rounded-md font-medium hover:bg-main-hover"
                to="/login"
              >
                Login
              </Link>
            ) : (
              <Link
                className="bg-main-dark w-fit px-5 py-1 mx-auto text-lg text-main-text-light rounded-md font-medium hover:bg-main-hover"
                to="/signup"
              >
                Signup
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
