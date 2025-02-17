import React, { useEffect } from "react";
import "../styles/result.css";

// Component responsible for displaying API results
const Result = ({ message }) => {
  useEffect(() => {
    console.log("Received data in Result component:", message);
  }, [message]);

  if (!message || Object.keys(message).length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <div className="result">
      <h3>Result:</h3>
      {message.priceRange && (
        <p>
          <strong>Price Range:</strong> {message.priceRange}
        </p>
      )}
      {message.waitingTime && (
        <p>
          <strong>Waiting Time:</strong> {message.waitingTime}
        </p>
      )}
      {message.hospitals && message.hospitals.length > 0 ? (
        <>
          <h4>Available Hospitals:</h4>
          <ul>
            {message.hospitals.map((hospital, index) => (
              <li key={index}>
                <strong>{hospital.name}</strong> - {hospital.address}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No hospitals found.</p>
      )}
    </div>
  );
};

export default Result;
