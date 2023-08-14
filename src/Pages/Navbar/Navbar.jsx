import React, { useState } from "react";
import { FaCode, FaEnvelope, FaHome, FaUser } from "react-icons/fa"; // Import the Fa icons
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          <FaHome className="icon" /> Home
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          <FaUser /> About
        </Link>
        <Link to="/projects" onClick={toggleMenu}>
          <FaCode className="icon" /> Projects
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          <FaEnvelope className="icon" /> Contact
        </Link>
      </div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </nav>
  );
};

export default Navbar;
