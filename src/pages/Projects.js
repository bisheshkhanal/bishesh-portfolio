// src/pages/Projects.js

import { Link } from 'react-router-dom';
import projects from '../data/projectsData';
import { FaPython, FaReact, FaJava, FaDocker, FaAws, FaDatabase, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaLinux, FaJsSquare } from "react-icons/fa";
import { SiDjango, SiFastapi, SiFirebase, SiSupabase, SiVercel, SiRender, SiExpo, SiTypescript, SiCplusplus } from "react-icons/si";

// Icon mapping for technologies 
const techIcons = {
  Python: <FaPython title="Python" />,
  Java: <FaJava title="Java" />,
  JavaScript: <FaJsSquare title="JavaScript" />,
  TypeScript: <SiTypescript title="TypeScript" />,
  Cplusplus: <SiCplusplus title="C++" />,
  React: <FaReact title="React" />,
  "React Native": <FaReact title="React Native" />,
  ReactNative: <FaReact title="React Native" />,
  Django: <SiDjango title="Django" />,
  FastAPI: <SiFastapi title="FastAPI" />,
  Nodejs: <FaNodeJs title="Node.js" />,
  Expo: <SiExpo title="Expo" />,
  Docker: <FaDocker title="Docker" />,
  AWS: <FaAws title="AWS" />,
  PostgreSQL: <FaDatabase title="PostgreSQL" />,
  Firebase: <SiFirebase title="Firebase" />,
  Supabase: <SiSupabase title="Supabase" />,
  Vercel: <SiVercel title="Vercel" />,
  Render: <SiRender title="Render" />,
  HTML: <FaHtml5 title="HTML5" />,
  CSS: <FaCss3Alt title="CSS3" />,
  Git: <FaGitAlt title="Git" />,
  Linux: <FaLinux title="Linux" />,
  HTML5: <FaHtml5 title="HTML5" />,
  CSS3: <FaCss3Alt title="CSS3" />,
};

export default function Projects() {
  return (
    <section style={{ maxWidth: '1350px', margin: '0 auto', padding: '0 1.5rem' }}>
      
      <h2 className="big-section-heading" style={{ textAlign: "center" }} data-aos="fade-up">Projects.</h2>
      <div className="section-subtitle" style={{
        color: "#8da1c7",
        fontSize: "1.22rem",
        marginBottom: "2.4rem",
        marginTop: "-2.1rem",
        textAlign: "center"
      }}>
        A selection of my work and experiments.
      </div>
      <div className="projects-pill-bg">
        <div className="project-grid">
          {projects.map((project, i) => (
            <Link
              to={`/projects/${project.id}`}
              className={`project-card gradient-${(i % 3) + 1}`}
              data-aos="fade-up"
              key={project.id}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech-icons" style={{ marginTop: '1rem', display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
                {project.technologies.map(tech => {
                  // Convert "C++" to "Cplusplus" for icon lookup
                  const normalized = tech.replace(/\s+/g, "").replace("C++", "Cplusplus");
                  return (
                    <span key={tech} style={{ fontSize: '1.4rem', opacity: 0.85 }}>
                      {techIcons[normalized] || techIcons[tech] || <span style={{ fontSize: '1rem' }}>{tech}</span>}
                    </span>
                  );
                })}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
