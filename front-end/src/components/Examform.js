import React, { useState } from "react";
import "../styles/examForm.css";
import { getEstimateCost } from "../services/apiService";
import Result from "./Result";

// Component responsible for handling the exam search form
const ExamForm = () => {
  const [location, setLocation] = useState(""); // Stores the city input
  const [examType, setExamType] = useState(""); // Stores the exam type input
  const [result, setResult] = useState(null); // Stores API results
  const [error, setError] = useState(null); // Stores error messages
  const [loading, setLoading] = useState(false); // Indicates if the request is in progress

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const estimatedCost = await getEstimateCost(location, examType);
      console.log("Raw estimated cost data:", estimatedCost);

      // Extracts data correctly from API response
      const formattedResult = {
        priceRange:
          estimatedCost.message?.priceRange || "No price range available", 
        waitingTime:
          estimatedCost.message?.waitingTime || "No waiting time available", 
        hospitals:
          estimatedCost.message?.hospitals?.map((hospital) => ({
            name: hospital.name || "No name available", 
            address: hospital.address || "No address available",
            phone: hospital.phone || "No phone number available", 
          })) || [],
      };

      console.log("Updated result state:", formattedResult);
      setResult(formattedResult);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="exam-form">
      <h1>Price Estimator for Health Exams</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="location">City:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="examType">Exam:</label>
          <input
            type="text"
            id="examType"
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Thinking..." : "Get Price Estimate"}
        </button>
      </form>

      {/* Displays error message if an error occurs */}
      {error && (
        <p className="error" style={{ color: "red" }}>
          {error}
        </p>
      )}

      {/* Displays results if data is available */}
      {result && <Result message={result} />}
    </div>
  );
};

export default ExamForm;
