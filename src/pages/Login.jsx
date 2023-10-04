import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ mail, password }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (res.ok) {
        res.json().then((userInfo) => {
          setUserInfo(userInfo);
          navigate("/");
        });
      } else {
        alert("wrong credintial");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-80vh bg-slate-200 flex flex-col justify-center items-center">
      <form className="w-72 flex flex-col m-auto" onSubmit={handleSubmit}>
        <div className="py-2 px-10 my-3 bg-main-dark text-main-text-light border border-3 text-center border-gray-500 rounded-md hover:bg-main-hover cursor-pointer">
          Sign in with Google
        </div>
        <hr className="h-[2px] w-11/12 my-4 bg-main-light mx-auto" />
        <input
          className=" py-2 px-10 my-2 border border-3 border-main-light rounded-md"
          value={mail}
          type="email"
          placeholder="example@xyz.com"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          className=" py-2 px-10 my-2 border border-3 border-main-light  rounded-md"
          value={password}
          type="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-main-dark w-fit px-5 py-1 mx-auto text-lg text-main-text-light rounded-md font-medium hover:bg-main-hover"
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
