import React, { useState } from "react";



import { Link } from "react-router-dom";

const Navbar = ({ color }) => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>D</span>HIRENDRA
            <span> K</span>UMAR
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li >
              <Link onClick={() => { setShowMediaIcons(false) }} className="link" to="/home" style={color === "home" ? { color: "#fff" } : { color: "#1ee273" }} >Home</Link>
            </li>
            <li>
              <Link onClick={() => { setShowMediaIcons(false) }} className="link" to="/about" style={color === "about" ? { color: "#fff" } : { color: "#1ee273" }}>About</Link>
            </li>
            <li>
              <Link onClick={() => { setShowMediaIcons(false) }} className="link" to="/projects" style={color === "project" ? { color: "#fff" } : { color: "#1ee273" }}>Project</Link>
            </li>
            <li>
              <Link onClick={() => { setShowMediaIcons(false) }} className="link" to="/contact" style={color === "contact" ? { color: "#fff" } : { color: "#1ee273" }}>Contact</Link>
            </li>
            <li>
              <Link onClick={() => { setShowMediaIcons(false) }} className="link" to="/Skills" style={color === "skills" ? { color: "#fff" } : { color: "#1ee273" }}>Skills</Link>
            </li>
            <li></li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">


          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <span onClick={() => setShowMediaIcons(!showMediaIcons)} class="fa fa-bars">

            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;