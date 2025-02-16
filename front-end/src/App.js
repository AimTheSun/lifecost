import React, { useState } from "react";
import ExamForm from "./components/ExamForm";
import DockDemo from "./components/dockDemo";
import "./styles/App.css"; 

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handles theme toggle
  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark-theme");
  };

  return (
    <div className={`app ${isDarkMode ? "dark-theme" : ""}`}>
      <ExamForm />
      <DockDemo onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
