// src/pages/ProjectDetail.js

import { useParams } from 'react-router-dom';
import projects from '../data/projectsData';
import ChatGameDetails from '../content/chatgameDetails';
import SecureWebSuiteDetails from '../content/SecureWebSuiteDetails';
import IndieBunnyDetails from '../content/IndieBunnyDetails';
import ZenMateDetails from '../content/ZenMateDetails';
import FlappyBirdDetails from '../content/FlappyBirdDetails';
import PortfolioDetails from '../content/PortfolioDetails';
import { FaPython, FaReact, FaServer, FaJava, FaDocker, FaAws, FaDatabase, FaGithub } from "react-icons/fa";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <div>Project not found.</div>;

  // Icon mapping for some common techs
  const techIcons = {
    Python: <FaPython title="Python" style={{ marginRight: 6 }} />,
    React: <FaReact title="React" style={{ marginRight: 6 }} />,
    Java: <FaJava title="Java" style={{ marginRight: 6 }} />,
    Docker: <FaDocker title="Docker" style={{ marginRight: 6 }} />,
    AWS: <FaAws title="AWS" style={{ marginRight: 6 }} />,
    PostgreSQL: <FaDatabase title="PostgreSQL" style={{ marginRight: 6 }} />,
    Server: <FaServer title="Server" style={{ marginRight: 6 }} />,
  };

  return (
    <div className="details-pill-bg">
      <h2 className="big-section-heading" style={{ textAlign: "center", marginBottom: "2.1rem" }}>
        {project.title}
      </h2>
      <div className="details-content">
        <div style={{ margin: '1rem 0', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link"
            >
              Live Demo
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link"
            >
              <FaGithub style={{ marginRight: 6, marginBottom: -2 }} />
              Source Code
            </a>
          )}
        </div>

        <p>{project.description}</p>
        <div style={{ marginTop: '1.5rem' }}>
          <strong>Technologies:</strong>
          <ul>
            {project.technologies.map((tech, i) => (
              <li key={i}>
                {techIcons[tech] || null}
                {tech}
              </li>
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
        {project.id === "quiplash-chat-game" && (
          <div style={{ marginTop: "2rem" }}>
            <ChatGameDetails />
          </div>
        )}
        {project.id === "securewebsuite" && (
          <div style={{ marginTop: "2rem" }}>
            <SecureWebSuiteDetails />
          </div>
        )}
        {project.id === "indie-bunny" && (
          <div style={{ marginTop: "2rem" }}>
            <IndieBunnyDetails />
          </div>
        )}
        {project.id === "zenmate-app" && (
          <div style={{ marginTop: "2rem" }}>
            <ZenMateDetails />
          </div>
        )}
        {project.id === "flappy-bird-clone" && (
          <div style={{ marginTop: "2rem" }}>
            <FlappyBirdDetails />
          </div>
        )}
        {project.id === "portfolio-website" && (
          <div style={{ marginTop: "2rem" }}>
            <PortfolioDetails />
          </div>
        )}
      </div>
    </div>
  );
}
