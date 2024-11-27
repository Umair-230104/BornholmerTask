// ShowAllUsers.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Sørg for at importere fra "react-router-dom"

const url = "http://localhost:3000/users/";

function ShowAllUsers() {
  const [users, setUsers] = useState([]);

  // useEffect til at hente brugerne fra API'et, når komponenten bliver monteret
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((usersData) => {
        setUsers(usersData);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h1>All Users</h1>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>
                <div>
                  <Link to={`/ShowUser/${user.id}`}>
                    <button className="view">View User</button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowAllUsers;
