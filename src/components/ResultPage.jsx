// src/components/ResultPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ResultPage.css";

const ResultPage = () => {
  const score = localStorage.getItem("score");
  const userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];
  const navigate = useNavigate();

  const handleRetry = () => {
    localStorage.removeItem("score");
    localStorage.removeItem("userAnswers");
    navigate("/play");
  };

  return (
    <div className="result-page">
      <h2>Results</h2>
      <p>Your score is {score}</p>
      <button onClick={handleRetry}>Retry Quiz</button>
    </div>
  );
};

export default ResultPage;
