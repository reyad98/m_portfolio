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
      title: "Coding Academy",
      description:
        "Coding Academy is an advanced educational platform built using the MERN (MongoDB, Express.js, React, and Node.js) stack. It serves as a comprehensive hub for students, teachers, and educational institutions to access, share, and manage coding-related content with ease. The platform offers user authentication, course management, curriculum tracking, a discussion forum, and a feature-rich admin panel for streamlined operations.",
      technology: "React, Node.js, Express.js, MongoDB",
    },
    {
      id: 2,
      image: project3, // Replace with actual image source
      date: "July 2022",
      title: "Memories",
      description:
        "Memories is a dynamic and user-friendly blogging website designed to empower individuals to share their thoughts and experiences with the world. With user registration and profile creation, it provides an intuitive platform for users to write, edit, and delete their blogs. A recommendation system suggests related content, and a commenting system fosters user interaction and engagement.",
      technology: "React, Node.js, Express.js, MySQL",
    },
    {
      id: 3,
      image: project4, // Replace with actual image source
      date: "June 2022",
      title: "CodeGen",
      description:
        "CodeGen is a specialized programming website dedicated to providing programming enthusiasts with an accessible platform for honing their competitive programming skills. The platform offers user profiles with solving counts, a problem archive, solution submissions, and discussion forums for a thriving programming community. It encourages users to learn, practice, and collaborate in their journey toward becoming accomplished programmers.",
      technology: "React, Node.js, Express.js, MongoDB",
    },

    {
      id: 4,
      image: project2, // Replace with actual image source
      date: "July 2022",
      title: "Project 2",
      description:
        "Pellentesque  5656 ac ipsum eget lectus cursus luctus. lorem20 Pellentesque ac ipsum eget lectus cursus luctus. lorem20  Pellentesque ac ipsum eget lectus cursus luctus. lorem20 Pellentesque ac ipsum eget lectus Pellentesque ac ipsum eget lectus cursus luctus. lorem20 Pellentesque ac ipsum eget lectus Pellentesque ac ipsum eget lectus cursus luctus. lorem20 Pellentesque ac ipsum eget lectus Pellentesque tyty ac ipsum eget lectus cursus luctus. lorem20 Pellentesque ac ipsum eget lectus ",
      technology: "React, Node.js, Express.js, Mysql",
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
