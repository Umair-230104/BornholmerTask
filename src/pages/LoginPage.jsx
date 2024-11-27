import React from "react";
import { Link } from "react-router";

function LoginPage() {
  return (
    <>
      <div>
        <h1>Login Side</h1>
        {/* Her kan du tilføje login-formularen */}

        <div>
          <Link to="/ShowAllUsers">
            <button className="loginSideButton">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
