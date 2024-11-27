import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

function ChangePassword({ users }) {
  const { id } = useParams(); // Hent id fra URL'en
  const user = users.find((u) => u.id === id); // Find brugeren baseret på ID
  const [newPassword, setNewPassword] = useState(""); // State for ny adgangskode

  const handlePasswordChange = () => {
    // Send en opdatering til serveren (simuleret her)
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PATCH", // Brug PATCH til at opdatere en specifik bruger
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: newPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Password updated:", data);
        alert("Password successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating password:", error);
        alert("Failed to update password.");
      });
  };

  if (!user) {
    return <div>User not found</div>; // Hvis brugeren ikke findes
  }

  return (
    <>
      <h1>Change Password for {user.username}</h1>
      <div>
        <label>New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handlePasswordChange}>Save New Password</button>
      </div>
      <div>
        <Link to={`/showuser/${id}`}>
          <button className="backTo">Back to User</button>
        </Link>
      </div>
    </>
  );
}

export default ChangePassword;
