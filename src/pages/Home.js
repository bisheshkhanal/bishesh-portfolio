import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.jpg"; // replace with your image path
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPython, FaReact, FaJava, FaDocker, FaAws, FaDatabase, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaLinux, FaJsSquare } from "react-icons/fa";
import { SiDjango, SiFastapi, SiFirebase, SiSupabase, SiVercel, SiRender, SiExpo, SiTypescript, SiCplusplus } from "react-icons/si";
import { useLocation, useNavigate } from 'react-router-dom';

const subheaders = [
  "Backend. Systems. AI. Impact.",
  "Distributed Systems. Network Protocols.",
  "Cloud. Security. Scale.",
  "Full-stack. Real-world. Results."
];

const skills = [
  {
    title: "Languages",
    icons: [
      { icon: <FaPython size={32} />, label: "Python" },
      { icon: <FaJava size={32} />, label: "Java" },
      { icon: <FaJsSquare size={32} />, label: "JavaScript" },
      { icon: <SiTypescript size={32} />, label: "TypeScript" },
      { icon: <SiCplusplus size={32} />, label: "C++" },
    ]
  },
  {
    title: "Frameworks",
    icons: [
      { icon: <FaReact size={32} />, label: "React" },
      { icon: <SiDjango size={32} />, label: "Django" },
      { icon: <SiFastapi size={32} />, label: "FastAPI" },
      { icon: <FaNodeJs size={32} />, label: "Node.js" },
      { icon: <SiExpo size={32} />, label: "Expo" },
    ]
  },
  {
    title: "Infra & Tools",
    icons: [
      { icon: <FaDocker size={32} />, label: "Docker" },
      { icon: <FaAws size={32} />, label: "AWS" },
      { icon: <FaDatabase size={32} />, label: "PostgreSQL" },
      { icon: <SiFirebase size={32} />, label: "Firebase" },
      { icon: <SiSupabase size={32} />, label: "Supabase" },
      { icon: <SiVercel size={32} />, label: "Vercel" },
      { icon: <SiRender size={32} />, label: "Render" },
      { icon: <FaGitAlt size={32} />, label: "Git" },
      { icon: <FaLinux size={32} />, label: "Linux" },
    ]
  },
  {
    title: "Web",
    icons: [
      { icon: <FaHtml5 size={32} />, label: "HTML5" },
      { icon: <FaCss3Alt size={32} />, label: "CSS3" },
    ]
  }
];

export default function Home() {
  const [subheaderIdx, setSubheaderIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubheaderIdx(idx => (idx + 1) % subheaders.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // If we land on /?scroll=skills, scroll to skills-section
    if (location.search.includes("scroll=skills")) {
      const el = document.getElementById("skills-section");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          // Remove the query param from the URL after scrolling
          navigate("/", { replace: true });
        }, 250);
      }
    }
    // If we land on /?scroll=contact, scroll to contact-section
    if (location.search.includes("scroll=contact")) {
      const el = document.getElementById("contact-section");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          navigate("/", { replace: true });
        }, 250);
      }
    }
  }, [location, navigate]);

  // Optional: Close modal on Escape key
  useEffect(() => {
    if (!modalOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [modalOpen]);

  return (
    <>
      <section className="home-about-combined intro-gradient">
        <div className="gradient-border">
          <div className="inner" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center" }}>
            <img
              data-aos="fade-up"
              src={profile}
              alt="Bishesh Khanal"
              style={{ width: "180px", height: "180px", borderRadius: "50%", objectFit: "cover", border: "2px solid var(--accent)", cursor: "pointer" }}
              onClick={() => setModalOpen(true)}
              title="Click to expand"
            />
            <div style={{ minWidth: 0 }}>
              <h1 className="main-hero-heading" data-aos="fade-up">
                Bishesh Khanal
              </h1>
              <div className="hero-underline" />
              <div style={{ fontSize: "1.25rem", color: "var(--text-muted)", marginBottom: "1.1rem" }}>
                Passionate about building practical, impactful systems.
              </div>
              <h2 data-aos="fade-up" className="typewriter" style={{ marginBottom: "1rem" }}>
                Hey, I’m Bishesh. <br /> An aspiring developer.
              </h2>
              <p className="subheader-animation">{subheaders[subheaderIdx]}</p>
              <p data-aos="fade-up" style={{ marginBottom: "1rem" }}>
                I'm a Computer Science and Biology student at the University of Calgary. I'm passionate about learning 
                and building secure, scalable systems and full-stack applications.
              </p>
              <p data-aos="fade-up" style={{ marginBottom: "1rem" }}>
                I like development that goes beyond CRUD, and involves real protocols, networking, distributed logic,
                or low-level control. I aim for work that reflects a drive for practical impact and technical depth.
              </p>
              <p data-aos="fade-up" style={{ marginBottom: "1rem" }}>
                Outside tech, I explore fitness science, personal development, and philosophy as I strive for wholistic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for expanded profile picture */}
      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div className="modal-image-wrapper" onClick={e => e.stopPropagation()}>
            <img
              src={profile}
              alt="Full Bishesh Khanal"
              className="modal-image"
            />
            <div className="modal-close" onClick={() => setModalOpen(false)}>×</div>
          </div>
        </div>
      )}

      {/* Skills/Tech Section */}
      <section className="skills-section" id="skills-section">
        <h2 data-aos="fade-up">Skills & Technologies.</h2>
        <div className="skills-groups" style={{ marginTop: "2.2rem", gap: "2.7rem" }}>
          {skills.map((group, idx) => (
            <div className="skill-group" key={group.title} style={{ minWidth: 210 }}>
              <div className="skill-group-title" style={{
                fontWeight: 700,
                fontSize: "1.12rem",
                color: "#3A86FF",
                marginBottom: "1.1rem"
              }}>
                {group.title}
              </div>
              <div className="skill-icons" style={{ gap: "1.4rem", flexWrap: "wrap" }}>
                {group.icons.map((item, i) => (
                  <div className="skill-icon-label" key={item.label} style={{ fontSize: "1.13rem" }}>
                    {React.cloneElement(item.icon, { size: 38 })}
                    <span style={{ color: "#f5f7fa", fontWeight: 500, fontSize: "1.02rem", marginTop: 4 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section className="contact-section" id="contact-section">
        <h2 data-aos="fade-up" style={{ marginBottom: "2.1rem" }}>Connect with me :)</h2>
        <div className="contact-links" style={{
          display: "flex",
          gap: "2.2rem",
          justifyContent: "center",
          margin: "2.5rem 0"
        }}>
          <a
            href="https://github.com/bisheshkhanal"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            style={{
              background: "#232946",
              color: "#f5f7fa",
              fontWeight: 600,
              borderRadius: "1.7rem",
              padding: "1.3rem 2.6rem",
              fontSize: "1.22rem",
              display: "flex",
              alignItems: "center",
              boxShadow: "0 4px 16px #3A86FF14"
            }}>
            <FaGithub size={34} style={{ marginRight: 12 }} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bishesh-khanal-8a70a621a/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            style={{
              background: "#232946",
              color: "#f5f7fa",
              fontWeight: 600,
              borderRadius: "1.7rem",
              padding: "1.3rem 2.6rem",
              fontSize: "1.22rem",
              display: "flex",
              alignItems: "center",
              boxShadow: "0 4px 16px #3A86FF14"
            }}>
            <FaLinkedin size={34} style={{ marginRight: 12, color: "#3A86FF" }} />
            LinkedIn
          </a>
          <a
            href="mailto:khanalbishesh12@gmail.com"
            className="contact-link"
            style={{
              background: "#232946",
              color: "#f5f7fa",
              fontWeight: 600,
              borderRadius: "1.7rem",
              padding: "1.3rem 2.6rem",
              fontSize: "1.22rem",
              display: "flex",
              alignItems: "center",
              boxShadow: "0 4px 16px #3A86FF14"
            }}>
            <FaEnvelope size={34} style={{ marginRight: 12, color: "#FF6B35" }} />
            Email
          </a>
        </div>
      </section>
    </>
  );
}