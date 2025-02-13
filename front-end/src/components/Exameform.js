import React, { useState } from "react";
import "../services/apiService";
import "../styles/exameForm.css";
import Result from "./Result";
import { getEstimateCost } from "../services/apiService";

// arrow function to handle the Exam form
const ExameForm = () => {
  const [location, setLocation] = useState(""); // state to store location
  const [examType, setExamType] = useState(""); // state to store exam type
  const [result, setResult] = useState(null); // result starts null
  const [error, setError] = useState(null); // error starts null
  const [loading, setLoading] = useState(false); // loading starts false

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submission behavior
    setLoading(true); // set loading to true
    setError(null); // reset error state

    try {
      const estimatedCost = await getEstimateCost(location, examType);
      setResult(estimatedCost); // update result state with estimated cost
    } catch (error) {
      setError(error.message); // set error message
    } finally {
      setLoading(false); // set loading to false after the request is done
    }
  };

  return (
    <div className="exam-form">
      <h1> Price Estimator about Health Exams </h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="location">Cidade:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="examType">Exame:</label>
          <input
            type="text"
            id="examType"
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Thinking..." : "Getting price range"}
        </button>
      </form>
      {error && (
        <p className="error" style={{ color: "red" }}>
          {error}
        </p>
      )}
      {result && <Result message={result} />}
    </div>
  );
};

export default ExameForm;
