import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Mrigank Khandelwal </h1>
      <h2>CS4550 02 FA24</h2>
      <br />
      <h2>Lab Assignments</h2>
      <ul>
        <li>
          <Link to="/Labs/Lab1">Lab 1</Link>
        </li>
        <li>
          <Link to="/Labs/Lab2">Lab 2</Link>
        </li>
        <li>
          <Link to="/Labs/Lab3">Lab 3</Link>
        </li>
      </ul>

      <h2>Link to Kanbas</h2>
      <Link to="/Kanbas">Kanbas</Link>
      <h2>Link to Github Repository</h2>
      <a href="https://github.com/Mrigankkh/kanbas-react-web-app">
       Github Repo{" "}
      </a>
    </div>
  );
};

export default Landing;
