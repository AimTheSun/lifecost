import React from "react";
import "../styles/dockDemo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function DockDemo({ onThemeToggle, isDarkMode }) {
  return (
    <div className="dock">
      <div className="dock-icon">
        <a
          href="https://github.com/AimTheSun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div className="dock-icon">
        <a
          href="https://www.linkedin.com/in/pedromirassol/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <div className="dock-icon">
        <a
          href="mailto:mirassol.pedro7@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
      <div className="dock-icon" onClick={onThemeToggle}>
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          size="2.2x"
          className="theme-toggle"
        />
      </div>
    </div>
  );
}
