// src/components/Navbar.js
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { FaHome, FaTasks, FaUserAstronaut, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { createPortal } from "react-dom";
import './Navbar.css';

const navLinks = [
  { to: "/", label: "Home", icon: <FaHome size={19} /> },
  { to: "/projects", label: "Projects", icon: <FaTasks size={19} /> },
];

export default function Navbar({ handleSkillsNav, handleContactNav }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close menu on link click (on mobile)
  const handleNavClick = (fn) => (e) => {
    setOpen(false);
    if (fn) fn(e);
  };

  // Hamburger drawer and backdrop as a portal
  const drawerPortal = open
    ? createPortal(
        <>
          <div className="mobile-nav-backdrop" onClick={() => setOpen(false)} />
          <div className="mobile-nav-slide open">
            <div className="mobile-nav-links">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link${location.pathname === link.to ? " active" : ""}`}
                  onClick={handleNavClick()}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
              <a
                href="/?scroll=skills"
                className="nav-link"
                onClick={handleNavClick(handleSkillsNav)}
              >
                <FaUserAstronaut size={18} style={{ marginRight: 6, marginBottom: -3 }} />
                Skills
              </a>
              <a
                href="/?scroll=contact"
                className="nav-link"
                onClick={handleNavClick(handleContactNav)}
              >
                <FaEnvelope size={18} style={{ marginRight: 6, marginBottom: -3 }} />
                Contact
              </a>
              <Link
                to="/resume"
                className={`nav-link${location.pathname === "/resume" ? " active" : ""}`}
              >
                <FaFileAlt style={{ marginRight: 8 }} />
                Resume
              </Link>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

  return (
    <nav className="navbar">
      <div className="nav-left" style={{ display: "flex", alignItems: "center", gap: "1.1rem" }}>
        <Link to="/" className="nav-brand" style={{ textDecoration: "none" }}>
          Bishesh Khanal
        </Link>
        <div className="nav-icons">
          <GoDotFill color="#3A86FF" size={18} className="dot-pulse" />
          <GoDotFill color="#fd2832" size={18} className="dot-pulse" />
          <GoDotFill color="#32ca46" size={18} className="dot-pulse" />
          <GoDotFill color="#FFEA00" size={18} className="dot-pulse" />
        </div>
      </div>
      <div className="desktop-nav-links nav-links">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`nav-link${location.pathname === link.to ? " active" : ""}`}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
        <a
          href="/?scroll=skills"
          className="nav-link"
          onClick={handleSkillsNav}
        >
          <FaUserAstronaut size={18} style={{ marginRight: 6, marginBottom: -3 }} />
          Skills
        </a>
        <a
          href="/?scroll=contact"
          className="nav-link"
          onClick={handleContactNav}
        >
          <FaEnvelope size={18} style={{ marginRight: 6, marginBottom: -3 }} />
          Contact
        </a>
        <Link
          to="/resume"
          className={`nav-link${location.pathname === "/resume" ? " active" : ""}`}
        >
          <FaFileAlt style={{ marginRight: 8 }} />
          Resume
        </Link>
      </div>
      {/* Hamburger Icon (Mobile Only) */}
      <div className="hamburger-menu" onClick={() => setOpen(o => !o)}>
        {open ? <IoCloseSharp size={32} /> : <GiHamburgerMenu size={29} />}
      </div>
      {/* Drawer/backdrop via portal */}
      {drawerPortal}
    </nav>
  );
}
