import React, { useEffect, useState } from "react";
import {
  FaCamera,
  FaCode,
  FaDownload,
  FaGamepad,
  FaGlobe,
  FaPaintBrush,
  FaPen,
  FaVideo,
} from "react-icons/fa";

import Typewriter from "typewriter-effect"; // Make sure to install this library
import award from "../images/award.png";
import img4 from "../images/img6.jpg";
import sc1 from "../images/sco1.jpg";
import sc2 from "../images/sco2.jpg";

import { Link } from "react-router-dom";
import "./About.css";
import AboutEdu from "./AboutEdu";

const About = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTypewriter(true);
    }, 1000); // Delay for showing typing effect
  }, []);

  const personalInfoData = [
    { label: "Name", value: "Anisur Rahman" },
    { label: "Father's Name", value: "Nur Muhammad" },
    { label: "Mother's Name", value: "Ayesha Begum" },
    { label: "Present Address", value: "Zigatola, Dhanmondi, Dhaka 1209." },
    {
      label: "Permanent Address",
      value: "Dhakirgaow, Matlab South, Chandpur.",
    },
    { label: "Nationality", value: "Bangladeshi" },
    { label: "Religion", value: "Islam" },
    { label: "Marital Status", value: "Single" },
    { label: "Email", value: "anisurreyad98@gmail.com" },
    // Add more data as needed
  ];

  return (
    <div>
      <div className="about-container">
        <h4 className="animated">
          <h5>Assalamu Walaikum! </h5>
          {showTypewriter && (
            <Typewriter
              options={{
                strings: "Welcome To My Portfolio",
                autoStart: true,
                delay: 50,
              }}
            />
          )}
        </h4>
        <div className="section_about">
          <div className="about-content">
            <p>
              <strong>Greetings! </strong>
              I'm Anisur Rahman,from Chandpur. With a Computer Science and
              Engineering degree from Daffodil International University, I've
              honed skills in problem-solving, web development, and research.
              Engaging in coding contests and crafting innovative web solutions
              has been my tech journey's essence. Embracing academia, I'm
              joyfully inclined towards teaching, a path I'm keen to pursue.
              <br />
              <br />
              While my professional pursuits have led me to Dhaka, where I
              currently reside for educational and occupational pursuits, my
              heart remains deeply connected to my family in Chandpur.
              <br />
              <br />
              Beyond the screen, I'm an avid traveler, always seeking to unravel
              the tapestry of beauty that the world weaves. Whether it's
              embarking on explorations with friends, documenting my adventures
              through vlogs, or capturing the essence of nature through my lens,
              I find solace in the art of nature photography.
            </p>
          </div>
          <div className="about-image">
            <img src={img4} alt="Anisur Rahman" />
          </div>
        </div>

        <div className="download-content">
          <Link to="link_to_resume.pdf" className="download-item">
            <div className="icon-bg">
              <FaDownload className="download-icon" />
            </div>
            <div className="item-text">Download Resume</div>
          </Link>
          <Link to="link_to_cv.pdf" className="download-item">
            <div className="icon-bg">
              <FaDownload className="download-icon" />
            </div>
            <div className="item-text">Download CV</div>
          </Link>
          <Link
            to="https://www.youtube.com/watch?v=tryWYeORQc4"
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Recommended for security
            className="download-item"
          >
            <div className="icon-bg">
              <FaVideo className="download-icon" />
            </div>
            <div className="item-text">Video Resume</div>
          </Link>
        </div>

        <div className="top_container_personal">
          <h2>PERSONAL INFORMATION & INTERESTS</h2>

          <div className="p_container">
            <div className="personal-info">
              {personalInfoData.map((info, index) => (
                <div className="personal-info-row" key={index}>
                  <div className="info-label">
                    <h5>{info.label}</h5>
                  </div>
                  <div className="colon">:</div>
                  <div className="info-value">{info.value}</div>
                </div>
              ))}
            </div>
            <div className="other-section">
              <div className="interests">
                <div className="interest-box art">
                  <FaCode></FaCode>
                  <div>
                    <h3>Coding</h3>
                  </div>
                </div>
                <div className="interest-box games">
                  <FaGamepad></FaGamepad>
                  <div>
                    <h3>Games</h3>
                  </div>
                </div>
                <div className="interest-box vlogging">
                  <FaVideo></FaVideo>
                  <div>
                    <h3>Vlogging</h3>{" "}
                  </div>
                </div>
                <div className="interest-box coding">
                  <FaPaintBrush />
                  <div>
                    <h3>Art</h3>
                  </div>
                </div>
                <div className="interest-box photography">
                  <FaCamera></FaCamera>
                  <div>
                    <h3>Photography</h3>
                  </div>
                </div>
                <div className="interest-box travel">
                  <FaGlobe></FaGlobe>
                  <div>
                    <h3>Travel</h3>
                  </div>
                </div>
                <div className="interest-box writing">
                  <FaPen></FaPen>
                  <div>
                    <h3>Writing</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutEdu></AboutEdu>
      <div className="section achievements">
        <div className="achievements-container">
          <div className="achievement">
            <div className="achievement-image">
              <img src={sc2} alt="Achievement Image" />
            </div>
            <div className="achievement-content">
              <h6>President's Scout Award</h6>
              <div className="award">
                <img src={award} alt="" />
              </div>
              <p className="award_p">
                I am proud to have achieved the prestigious President's Scout
                Award for my dedication and leadership in the scouting community
                in 2015 from our ex President.
              </p>
            </div>
            <div className="achievement-image">
              <img src={sc1} alt="Achievement Image" />
            </div>
          </div>
          {/* Add more achievements */}
        </div>
      </div>
    </div>
  );
};

export default About;
