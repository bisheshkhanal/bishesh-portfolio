// src/pages/Projects.js

import { Link } from 'react-router-dom';
import projects from '../data/projectsData';

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map(project => (
          <Link to={`/projects/${project.id}`} className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
