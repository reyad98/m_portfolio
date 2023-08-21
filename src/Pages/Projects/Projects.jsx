// Projects.js
import React from "react";
import { FaCalendarAlt } from "react-icons/fa"; // Import React Icons
import project3 from "../images/cropped-projects4.png";
import project1 from "../images/project11.jpg";
import project2 from "../images/project2.jpg";
import project4 from "../images/project55.png";
import "./Projects.css"; // Import your CSS file

const Projects = ({ limit }) => {
  const demoProjects = [
    {
      id: 1,
      image: project1, // Replace with actual image source
      date: "June 2022",
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technology: "React, Node.js, MongoDB",
    },
    {
      id: 2,
      image: project3, // Replace with actual image source
      date: "July 2022",
      title: "Project 2",
      description:
        "Pellentesque  5656 ac ipsum eget lectus cursus luctus. lorem20 Pellentesque ac ipsum eget lectus cursus luctus. lorem20  Pellentesque ac ipsum eget lectus cursus luctus. lorem20 Pellentesque ac ipsum eget lectus Pellentesque ac ipsum eget lectus cursus luctus. lorem20 Pellentesque ac ipsum eget lectus Pellentesque ac ipsum eget lectus cursus luctus. lorem20 Pellentesque ac ipsum eget lectus Pellentesque tyty ac ipsum eget lectus cursus luctus. lorem20 Pellentesque ac ipsum eget lectus ",
      technology: "Angular, Express.js, PostgreSQL",
    },
    {
      id: 3,
      image: project4, // Replace with actual image source
      date: "June 2022",
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technology: "React, Node.js, MongoDB",
    },
    {
      id: 4,
      image: project2, // Replace with actual image source
      date: "July 2022",
      title: "Project 2",
      description:
        "Pellentesque  5656 ac ipsum eget lectus cursus luctus. lorem20 Pellentesque ac ipsum eget lectus cursus luctus. lorem20  Pellentesque ac ipsum eget lectus cursus luctus. lorem20 Pellentesque ac ipsum eget lectus Pellentesque ac ipsum eget lectus cursus luctus. lorem20 Pellentesque ac ipsum eget lectus Pellentesque ac ipsum eget lectus cursus luctus. lorem20 Pellentesque ac ipsum eget lectus Pellentesque tyty ac ipsum eget lectus cursus luctus. lorem20 Pellentesque ac ipsum eget lectus ",
      technology: "Angular, Express.js, PostgreSQL",
    },
    // Add more project objects as needed
  ];

  return (
    <div className="projects">
      <h2 className="section-title">MY PROJECTS</h2>
      <div className="project-list">
        {demoProjects.slice(0, limit).map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-info">
              <div className="project-date">
                <FaCalendarAlt /> {project.date}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-technology">
                <strong>Used Technology:</strong> {project.technology}
              </p>
              <button className="read-more-button">Live Site</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
