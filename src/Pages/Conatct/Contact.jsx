import React from "react";
import { FaDribbble, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import contactImage from "../images/food2.jpg"; // Import your contact image
import "./Contact.css";

const Contact = () => {
  const handleSendEmail = () => {
    alert("Email sent!"); // Simulating sending an email
  };

  return (
    <div className="contact-container">
      <div className="contact_cont">
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <p>We're open for any suggestion or just to have a chat</p>

          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Create a message here"></textarea>
            <button type="button" onClick={handleSendEmail}>
              Send
            </button>
          </form>
          <div className="social-icons">
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaDribbble className="social-icon" />
          </div>
        </div>
        <div className="contact-image">
          <img src={contactImage} alt="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
