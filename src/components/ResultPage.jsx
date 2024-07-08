import React from "react";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const score = JSON.parse(localStorage.getItem("userAnswers"))?.filter(
    (answer, index) =>
      answer === JSON.parse(localStorage.getItem("correct_answers"))[index]
  ).length;

  const navigate = useNavigate();

  const handleRetry = () => {
    localStorage.removeItem("score");
    localStorage.removeItem("userAnswers");
    navigate("/play");
  };

  return (
    <div className="result-page">
      <h2>Results</h2>
      <p>Your score is {score} / 10</p>
      <button onClick={handleRetry}>Retry Quiz</button>
    </div>
  );
};

export default ResultPage;
