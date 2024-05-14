import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="container   ">
        <Link to="/">Home</Link>
        <Link to="/Favorite"> Favorite</Link>
      </div>
    </>
  );
}

export default Navbar;
