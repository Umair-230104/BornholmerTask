import { Link } from "react-router";

function ShowUser() {
  return (
    <>
      <h1> Here is the user</h1>

      <div>
        <Link to="/ChangePassword">
          <button className="change">Change Password </button>
        </Link>
      </div>

      <div>
        <Link to="/ChangeRole">
          <button className="change">Change Role </button>
        </Link>
      </div>

      <div>
        <Link to="/ShowAllUsers">
          <button className="backTo">Back to user list </button>
        </Link>
      </div>
    </>
  );
}

export default ShowUser;
