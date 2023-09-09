import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState();
  const navigate = useNavigate();

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
      console.log(res);
      if (res.ok) {
        navigate("/");
      } else {
        alert("wrong credintial");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={mail}
          type="email"
          placeholder="example@xyz.com"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
