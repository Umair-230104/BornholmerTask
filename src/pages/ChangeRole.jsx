import { Link } from "react-router";

function ChangeRole() {
  return (
    <>
      <h1>Change Role</h1>

      <div>
        <Link to="/ShowUser">
          <button className="backTo">Back to user </button>
        </Link>
      </div>
    </>
  );
}

export default ChangeRole;
