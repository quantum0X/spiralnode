import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Signup = () => {
  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password doesn't match");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/signup", {
        method: "POST",
        body: JSON.stringify({ mail, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      alert("Registration Failed");
    }
  };

  return (
    <div className="w-full h-90vh flex flex-col justify-center items-center">
      <Link to="/">
        <img
          src="/logo120.png"
          alt="spiralnode"
          className="h-28 w-28 mx-auto mt-20 mb-10"
        />
      </Link>
      <form className="w-72 flex flex-col m-auto" onSubmit={handleSubmit}>
        <div className="py-2 px-10 my-3 bg-main-dark text-main-text-light border border-3 text-center border-gray-500 rounded-md hover:bg-main-hover cursor-pointer">
          <FontAwesomeIcon icon={faGoogle} className="mx-2" />
          Sign in with Google
        </div>
        <hr className="h-[2px] w-11/12 my-4 bg-main-light mx-auto" />

        <input
          className=" py-2 px-10 my-2 border border-3 border-main-light  rounded-md"
          value={mail}
          type="email"
          placeholder="example@xyz.com"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          className=" py-2 px-10 my-2 border border-3 border-main-light  rounded-md"
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className=" py-2 px-10 my-2 border border-3 border-main-light  rounded-md"
          value={confirmPassword}
          type="password"
          placeholder="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="bg-main-dark w-fit my-2 px-5 py-1 mx-auto text-lg text-main-text-light rounded-md font-medium hover:bg-main-hover"
          type="submit"
        >
          Sign up
        </button>
      </form>
      <div className="font-semibold mb-4 text-lg text-main-light">
        Made with ❤️ Bharat
      </div>
    </div>
  );
};

export default Signup;
