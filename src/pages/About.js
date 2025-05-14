// src/pages/About.js

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        I'm currently completing my BSc at the University of Calgary, majoring in Natural Sciences
        in Computer Science and Biological Sciences. My interests lie in backend engineering,
        systems programming, network protocols, data science & analysis, and AI integration.
      </p>
      <p>
        Outside class, I spend time learning about information technology from a wholistic lens, applying what I learn to my projects.
        Alongside my studies, I am passionate about: 
        <ul className="list-disc pl-6">
          <li>Researching into health and fitness science</li>
          <li>Exploring the outdoors with hikes, mountain biking, boating.etc.</li>
          <li>Reading about philosophy and politics.</li>
          <li>Self-development in a wholistic lens, and actively pursuing fulfillment in life.</li>
        </ul>
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
