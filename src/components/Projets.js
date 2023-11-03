import React, { useState } from "react";
import "../styles/projets.css";

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "Ducksman",
      description: "Site eCommerce",
      image: "../images/ducksman.jpg",
    },
    { id: 2, title: "Twiplon", description: "Réseau social" },
    {
      id: 3,
      title: "FridgeMate",
      description: "Application mobile Anti-gaspi",
    },
  ]);

  return (
    <div className="projets">
      <h1>Mes projets</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
