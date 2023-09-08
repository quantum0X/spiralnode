import React, { useState } from "react";

const Signup = () => {
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
      console.log(res);
    } catch (err) {
      console.log(err);
      alert("Registration Failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={mail}
          placeholder="example@xyz.com"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          value={confirmPassword}
          placeholder="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
