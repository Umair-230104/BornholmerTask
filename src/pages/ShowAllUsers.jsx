// ShowAllUsers.jsx
import { Link } from "react-router"; // Sørg for at importere fra "react-router"

function ShowAllUsers({ users }) {
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
                  <Link to={`/showuser/${user.id}`}>
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
