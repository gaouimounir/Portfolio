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
      <div className="card-container">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
