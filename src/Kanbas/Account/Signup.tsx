import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";
import { toast } from "react-toastify";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signup = async () => {
    try {
     const _user =  await client.createUser(user);
      dispatch(setCurrentUser(_user));
      navigate("/Kanbas/Dashboard");
    } catch (error) {
      toast.error("Signup failed. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div
      id="wd-signup-screen"
      style={{ paddingLeft: "20px", width: "350px", textAlign: "left" }}
      className="item-center justify-center"
    >
      <h1>Sign up</h1>
      <input placeholder="username" className="form-control mb-2"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />

      <input
        placeholder="password"
        type="password"
        className="form-control mb-2"
        onChange={(e) => setUser({ ...user, password: e.target.value })}

      />

      <input
        placeholder="verify password"
        type="password"
        className="form-control mb-2"
      />

      <Link to="/Kanbas/Account/Profile">
        {" "}
        <button
          onClick={signup}
          id="wd-add-module-btn"
          className="btn btn-md btn-primary me-1 w-100"
        >
          Signup
        </button>
      </Link>
      <div style={{ textAlign: "center" }}>
        <Link to="/Kanbas/Account/Signin">Sign in</Link>
      </div>
    </div>
  );
}
