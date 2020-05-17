import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>UseTRACER</h1>
      <ul id="navList">
        <Link to="/about" className="li">
          About
        </Link>
        <Link to="/" className="li">
          Home
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
