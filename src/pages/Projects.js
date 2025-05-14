// src/pages/Projects.js

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>SecureWebSuite</h3>
          <p>
            Multi-threaded Java HTTP/HTTPS server with SHA256 handshake auth
            and Stop-and-Wait UDP file transfer. Written from scratch.
          </p>
        </div>

        <div className="project-card">
          <h3>
            <a 
              href="https://indie-bunny-marketplace.vercel.app/home"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              Indie Bunny Marketplace
            </a>
          </h3>
          <p>
            Full-stack platform with Django, React, Firebase, and PostgreSQL.
            Supports tipping, game approval, mystery redemption, and more.
          </p>
        </div>

        <div className="project-card">
          <h3>ZenMate Meditation App</h3>
          <p>
            Mobile app (React Native + Django) with Supabase-backed PostgreSQL,
            user streaks, and an AI chatbot hosted on AWS EC2 using phi-2.
          </p>
        </div>

        <div className="project-card">
          <h3>Quiplash-inspired Chat Game</h3>
          <p>
            Real-time multiplayer game using custom distributed backend with FastAPI containers,
            synchronized master clock, and React-based frontend.
          </p>
        </div>
      </div>
    </section>
  );
}
