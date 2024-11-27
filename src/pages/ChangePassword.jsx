import { Link } from "react-router";

function ChangePassword() {
  return (
    <>
      <h1>Change Password</h1>

      <div>
        <Link to="/ShowUser">
          <button className="backTo">Back to user </button>
        </Link>
      </div>
    </>
  );
}

export default ChangePassword;
