import "./App.css";
import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(userName, password) {
    if (userName === "admin" && password === "admin") {
      setLogin(false);
    }
  }

  return (
    <>
      {login && (
        <div className="login-container">
          <form
            onSubmit={() => handleLogin(userName, password)}
            className="login"
          >
            <h1>Login</h1>
            <label htmlFor="username">Username</label>
            <input
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              type="text"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              required
            />
            <button>Login</button>
          </form>
        </div>
      )}
    </>
  );
}
