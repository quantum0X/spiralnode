import React, { useState } from "react";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState();
  return (
    <div>
      <form>
        <input
          value={mail}
          placeholder="example@xyz.com"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          value={password}
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
