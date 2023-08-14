import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialMedia = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/yourusername" },
    { icon: <FaGithub />, link: "https://github.com/yourusername" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/yourusername" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/user/yourusername" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media-icons">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="footer-right">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p className="copyright">
          © {currentYear} Anisur Rahman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
