import "./styles/App.css";
import React, { useState } from "react";
import Examform from "./components/Examform";
import DockDemo from "./components/dockDemo";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Controle de tema no App

  const handleThemeToggle = () => {
    setIsDarkMode((prevState) => !prevState); // Alterna entre light/dark mode
  };

  return (
    <div className={`app ${isDarkMode ? "dark-theme" : ""}`}>
      <Examform />
      <DockDemo onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
