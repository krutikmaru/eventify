import React, { useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-full h-screen bg-main-dark flex justify-center items-center">
      {isSignIn ? (
        <SignIn
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          setIsSignIn={setIsSignIn}
        />
      ) : (
        <SignUp
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          setIsSignIn={setIsSignIn}
        />
      )}
    </div>
  );
};

export default Login;
