// Root: src/App.js

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';
import FlappyGame from './pages/FlappyGame';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // cleanup to avoid CPU buildup
        }
      });
    });

    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect(); // clean up on unmount
  }, []);

  // Scroll to skills section handler
  const handleSkillsNav = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/?scroll=skills");
    } else {
      const el = document.getElementById('skills-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to contact section handler
  const handleContactNav = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/?scroll=contact");
    } else {
      const el = document.getElementById('contact-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <Navbar handleSkillsNav={handleSkillsNav} handleContactNav={handleContactNav} />
      <div style={{ height: "80px" }} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/projects/flappy-bird" element={<FlappyGame />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
