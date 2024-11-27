import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

function ChangeRole({ users }) {
  const { id } = useParams(); // Hent id fra URL'en
  const user = users.find((u) => u.id === id); // Find brugeren baseret på ID
  const [selectedRole, setSelectedRole] = useState(""); // State for valgt rolle

  // Foruddefinerede roller
  const availableRoles = ["user", "admin", "superman"];

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

  const handleRoleChange = () => {
    if (selectedRole && !user.roles.includes(selectedRole)) {
      // Opdater rolle i databasen
      fetch(`http://localhost:3000/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roles: [...user.roles, selectedRole] }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Role added:", data);
          alert("Role successfully added!");
          setSelectedRole(""); // Ryd dropdown efter tilføjelse
        })
        .catch((error) => {
          console.error("Error adding role:", error);
          alert("Failed to add role.");
        });
    } else {
      alert("Role is empty or already exists.");
    }
  };

  const handleRoleRemove = (roleToRemove) => {
    const updatedRoles = user.roles.filter((role) => role !== roleToRemove);
    // Opdater rolle i databasen ved at fjerne den valgte rolle
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ roles: updatedRoles }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Role removed:", data);
        alert("Role successfully removed!");
      })
      .catch((error) => {
        console.error("Error removing role:", error);
        alert("Failed to remove role.");
      });
  };

  return (
    <div>
      <h1>Change Role for {user.username}</h1>
      <p>Current Roles:</p>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.roles.map((role, index) => (
            <tr key={index}>
              <td>{role}</td>
              <td>
                <button onClick={() => handleRoleRemove(role)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <label>Select New Role:</label>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="">--Select a role--</option>
          {availableRoles.map((role, index) => (
            <option key={index} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleRoleChange}>Add New Role</button>
      </div>
      <div>
        <Link to={`/showuser/${user.id}`}>
          <button className="backTo">Back to User Details</button>
        </Link>
      </div>
    </div>
  );
}

export default ChangeRole;
