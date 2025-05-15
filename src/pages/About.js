// src/pages/About.js

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        I'm pursuing a BSc in Computer Science and Biology at the University of Calgary,
        with interests in backend engineering, systems programming, and AI integration.
        Beyond tech, I'm passionate about understanding fitness science, exploring the outdoors,
        reading philosophy, and approaching personal growth holistically.
      </p>
      <p>Connect with me:</p>
      <div className="flex gap-6 pt-2">
        <a
          href="https://github.com/bisheshkhanal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/bishesh-khanal-8a70a621a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
    </section>
  );
}
