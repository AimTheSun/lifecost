import "./styles/App.css";
import React from "react";
import Examform from "./components/Examform.js";
import DockDemo from "./components/dockDemo";

function App() {
  return (
    <div className="app">
      <Examform />
      <DockDemo />
    </div>
  );
}

export default App;
