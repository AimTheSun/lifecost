import React from "react";
import "../styles/dockDemo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function DockDemo() {
  return (
    <div className="dock">
      <div className="dock-icon">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </div>
      <div className="dock-icon">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </div>
      <div className="dock-icon">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </div>
      <div className="dock-icon">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </div>
    </div>
  );
}
