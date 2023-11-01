import React, { useState } from "react";
import "../styles/projets.css";

function Projects() {
  const [projects] = useState([
    { id: 1, title: "Projet 1", description: "Description du projet 1" },
    { id: 2, title: "Projet 2", description: "Description du projet 2" },
  ]);

  return (
    <div className="projets">
      <h1>Liste des projets</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
