import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div
      id="wd-signup-screen"
      style={{ paddingLeft: "20px", width: "350px", textAlign: "left" }}
    >
      <h3>Sign up</h3>
      <input placeholder="username" className="form-control mb-2" />
      
      <input placeholder="password" type="password" className="form-control mb-2"/>
    
      <input placeholder="verify password" type="password" className="form-control mb-2"/>

      <Link to="/Kanbas/Account/Profile">
        {" "}
        <button
          id="wd-add-module-btn"
          className="btn btn-md btn-primary me-1 w-100"
        >
          Signup
        </button>
      </Link>
      <Link to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
  );
}
