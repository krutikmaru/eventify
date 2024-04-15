import { useState } from "react";
import { styles } from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

export const SignIn = ({
  username,
  password,
  setUsername,
  setPassword,
  setIsSignIn,
}) => {
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  function handleLogin() {
    if (username === "" || password === "") {
      setError({ isError: true, message: "All fields are required" });
      return;
    }
    axios
      .post(`http://localhost:8080/Eventify/webresources/api/login`, {
        username,
        password,
      })
      .then((response) => {
        if (response.data.type === "failure") {
          setError({ isError: true, message: response.data.message });
        } else {
          setError({ isError: false, message: "" });
          setUser(response.data.message);
          navigate("/");
        }
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="relative w-[400px] h-[400px] font-inter flex justify-center items-center flex-col">
      <h1 className={styles.heading}>Login</h1>
      <input
        className={styles.input}
        value={username}
        placeholder="Username"
        autoCorrect="false"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className={styles.input}
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      {error.isError && <span className="text-red-500">{error.message}</span>}
      <button className={styles.button} onClick={handleLogin}>
        Login
      </button>
      <span className={styles.link} onClick={() => setIsSignIn(false)}>
        Create new account
      </span>
    </div>
  );
};
