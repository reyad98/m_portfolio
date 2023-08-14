import React from "react";
import { FaCode, FaDesktop, FaServer, FaTasks } from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <h2 className="headerskill">SKILLS</h2>
      <div className="skills-container">
        <div className="skills-card">
          <div className="skills-header programming-bg">
            <FaCode className="skills-icon" />
            Programming Language
          </div>
          <ul className="skills-list">
            <li>C</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="skills-card">
          <div className="skills-header frontend-bg">
            <FaDesktop className="skills-icon" />
            Frontend Technology
          </div>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>React JS</li>
            <li>JS</li>
          </ul>
        </div>

        <div className="skills-card">
          <div className="skills-header backend-bg">
            <FaServer className="skills-icon" />
            Backend Technology
          </div>
          <ul className="skills-list">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="skills-card">
          <div className="skills-header others-bg">
            <FaTasks className="skills-icon" />
            Others Skill
          </div>
          <ul className="skills-list">
            <li>Word</li>
            <li>Excel</li>
            <li>PowerPoint</li>
            <li>Sheets</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
