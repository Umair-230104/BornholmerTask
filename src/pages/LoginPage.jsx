// LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router";

function LoginPage({ users, setLoginSuccess }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Find en bruger, der matcher input
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setLoginSuccess(true);
      setError("");
      // Navigér til /ShowAllUsers-siden efter login
      navigate("/ShowAllUsers");
    } else {
      setLoginSuccess(false);
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
}

export default LoginPage;
