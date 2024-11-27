// LoginPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState("");

  const url = "http://localhost:3000/users/";

  // useEffect til at hente brugerne fra API'et, når komponenten bliver monteret
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((usersData) => {
        setUsers(usersData);
      });
  }, []);

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
