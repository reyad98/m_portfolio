import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/images/project1.jpg", // Replace with your image URL
  },
  {
    title: "Project 2",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "/images/project2.jpg", // Replace with your image URL
  },
  {
    title: "Project 3",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageUrl: "/images/project3.jpg", // Replace with your image URL
  },
  {
    title: "Project 4",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "/images/project4.jpg", // Replace with your image URL
  },
  {
    title: "Project 5",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    imageUrl: "/images/project5.jpg", // Replace with your image URL
  },
];

const Projects = ({ limit }) => {
  const projectsToShow = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projectsToShow.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={`Project ${index + 1}`} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
