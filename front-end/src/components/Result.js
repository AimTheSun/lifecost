import React from "react";
import "../styles/result.css";

const Result = ({ message }) => {
  return (
    <div className="result">
      <h3>Result:</h3>
      <p>{message}</p>
    </div>
  );
};

export default Result;
