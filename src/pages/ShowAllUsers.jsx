import React from "react";
import { Link } from "react-router";

function ShowAllUsers() {
  return (
    <>
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
            <tr>
              <td>user1</td>
              <td>
                <div>
                  <Link to="/ShowUser">
                    <button className="view">View User</button>
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>user2</td>
              <td>
                <div>
                  <Link to="/ShowUser">
                    <button className="view">View User</button>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShowAllUsers;
