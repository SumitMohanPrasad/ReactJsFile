import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav_container">
      <div className="nav_left">
        <a>SN</a>
      </div>

      <div className="nav_right">
        <a href="#About" className="nav_link">
          <span>01.</span>About
        </a>

        <a href="#Experience" className="nav_link">
          <span>02.</span>Experience
        </a>

        <a href="#Work" className="nav_link">
          <span>03.</span>Projects
        </a>

        <a href="#Contact" className="nav_link">
          <span>04.</span>Contact
        </a>

        <button className="nav_resume_btn">Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;
