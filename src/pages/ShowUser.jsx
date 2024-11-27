import React from "react";
import { useParams, Link } from "react-router-dom";

function ShowUser({ users }) {
  const { id } = useParams(); // Hent id fra URL'en
  const user = users.find((u) => u.id === id); // Match som string

  if (users.length === 0) {
    return <div>Loading...</div>; // Vent på dataindlæsning
  }

  if (!user) {
    return (
      <div>
        <h1>User not found</h1>
        <Link to="/showallusers">
          <button className="backTo">Back to User List</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>User Details</h1>
        <p>Username: {user.username}</p>
        <p>Role: {user.roles.join(", ")}</p>
      </div>

      <div>
        <Link to={`/changepassword/${user.id}`}>
          <button className="change">Change Password</button>
        </Link>
      </div>

      <div>
        <Link to={`/changerole/${user.id}`}>
          <button className="change">Change Role</button>
        </Link>
      </div>

      <div>
        <Link to="/showallusers">
          <button className="backTo">Back to User List</button>
        </Link>
      </div>
    </div>
  );
}

export default ShowUser;
