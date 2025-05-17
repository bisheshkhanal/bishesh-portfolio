// src/data/skillsData.js

import { FaReact, FaNode, FaJava, FaPython, FaGithub, FaDocker, FaAws } from "react-icons/fa";
import { SiDjango, SiMongodb, SiPostgresql, SiTailwindcss, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

export const skillGroups = [
  {
    label: "Languages & Frameworks",
    skills: [
      { name: "Python", icon: <FaPython size={36} title="Python" /> },
      { name: "Java", icon: <FaJava size={36} title="Java" /> },
      { name: "JavaScript", icon: <SiJavascript size={36} title="JavaScript" /> },
      { name: "React", icon: <FaReact size={36} title="React" /> },
      { name: "Node.js", icon: <FaNode size={36} title="Node.js" /> },
      { name: "Django", icon: <SiDjango size={36} title="Django" /> },
    ],
  },
  {
    label: "Frontend Tools",
    skills: [
      { name: "HTML5", icon: <SiHtml5 size={36} title="HTML5" /> },
      { name: "CSS3", icon: <SiCss3 size={36} title="CSS3" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={36} title="Tailwind CSS" /> },
      { name: "React", icon: <FaReact size={36} title="React" /> },
    ],
  },
  {
    label: "Backend & DevOps",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql size={36} title="PostgreSQL" /> },
      { name: "MongoDB", icon: <SiMongodb size={36} title="MongoDB" /> },
      { name: "Docker", icon: <FaDocker size={36} title="Docker" /> },
      { name: "AWS", icon: <FaAws size={36} title="AWS" /> },
      { name: "GitHub", icon: <FaGithub size={36} title="GitHub" /> },
    ],
  },
];
