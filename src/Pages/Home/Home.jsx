import React, { useEffect, useState } from "react";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Contact from "../Conatct/Contact";
import Education from "../Education/Education";
import Gallery from "../Gallery/Gallery";
import Projects from "../Projects/Projects";
import img1 from "../images/img1.jpg";
import "./Home.css";
import ProblemSolving from "./ProblemSolving";
import Skills from "./Skills";

const Home = () => {
  const [typing, setTyping] = useState("");
  const socialMedia = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/yourusername" },
    { icon: <FaGithub />, link: "https://github.com/yourusername" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/yourusername" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/user/yourusername" },
  ];

  useEffect(() => {
    const name = "ANISUR RAHMAN";
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i <= name.length) {
        setTyping(name.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => {
      clearInterval(typeInterval);
    };
  }, []);

  return (
    <div className="all">
      <div className="home">
        <div className="home-container animated">
          <div className="left-box">
            <div className="name-designation">
              <h1 className="typing-effect">{typing}</h1>
              <h3>Software Engineer</h3>
            </div>
            <div className="about">
              <p>
                I'm a passionate software engineer with a focus on creating
                user-centric web applications. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. I'm a passionate software engineer
                with a focus on creating user-centric web applications. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. I'm a
                passionate software engineer with a focus on creating
                user-centric web applications. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.ing elit.
              </p>
            </div>
            <div className="download">
              <a
                href="https://drive.google.com/file/d/1lDvS55x5OTwMmRSnQ8FMjE_OWJS-Pf7t/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="download-button"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>
          <div className="right-box">
            <img src={img1} className="profile-image" />
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
          </div>
        </div>
        <Skills></Skills>
      </div>
      <ProblemSolving></ProblemSolving>
      <Projects limit={3} />

      <div className="more_projects">
        <div></div>
        <div>
          <Link to="/projects">
            {" "}
            <button className="more_btn">Show More Projects {">>"}</button>{" "}
          </Link>
        </div>
      </div>

      <Education></Education>
      <Contact></Contact>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
