// Root: src/App.js

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import './App.css';
import { useEffect } from 'react';
import ProjectDetail from './pages/ProjectDetail';
import FlappyGame from './pages/FlappyGame';

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    });

    revealElements.forEach(el => observer.observe(el));
  }, []);

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <h1 className="nav-brand">Bishesh Khanal</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/projects/flappy-bird" element={<FlappyGame />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
