import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div
      id="wd-signin-screen"
      style={{ paddingLeft: "20px", width: "350px", textAlign: "left" }}
    >
      <h3>Sign in</h3>
      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />
      <Link to="/Kanbas/Account/Signin">
        {" "}
        <button
          id="wd-add-module-btn"
          className="btn btn-md btn-primary me-1 w-100"
        >
          Signin
        </button>
      </Link>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}
