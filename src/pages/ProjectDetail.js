// src/pages/ProjectDetail.js

import { useParams } from 'react-router-dom';
import projects from '../data/projectsData';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <div>Project not found.</div>;

  return (
    <section>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div style={{ marginTop: '1.5rem' }}>
        <strong>Technologies:</strong>
        <ul>
          {project.technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </div>
      {project.images.length > 0 && (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          {project.images.map((src, idx) => (
            <img key={idx} src={src} alt={`${project.title} screenshot ${idx + 1}`} width="300" />
          ))}
        </div>
      )}
      <div style={{ marginTop: '1.5rem' }}>
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="nav-link">
            Live Demo
          </a>
        )}
        {project.repoLink && (
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ marginLeft: '1rem' }}>
            Source Code
          </a>
        )}
      </div>
    </section>
  );
}
