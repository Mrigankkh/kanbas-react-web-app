import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4">Mrigank Khandelwal</h1>
        <h2 className="text-muted">CS4550 02 FA24</h2>
      </div>
      <hr />
      <div className="mt-4">
        <h2 className="mb-3">Lab Assignments</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/Labs/Lab1" className="text-decoration-none">
              Lab 1
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/Labs/Lab2" className="text-decoration-none">
              Lab 2
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/Labs/Lab3" className="text-decoration-none">
              Lab 3
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/Labs/Lab4" className="text-decoration-none">
              Lab 4
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/Labs/Lab5" className="text-decoration-none">
              Lab 5
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h2>Links</h2>
        <p>
          <Link to="/Kanbas" className="btn btn-primary me-2">
            Kanbas
          </Link>
        </p>
        <p>
          <a
            href="https://github.com/Mrigankkh/kanbas-react-web-app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            Github Repository
          </a>
        </p>
      </div>
    </div>
  );
};

export default Landing;
