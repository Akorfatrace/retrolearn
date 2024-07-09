import React, { useState } from "react";
import "./ScoreboardPage.css";

const ScoreboardPage = () => {
  const [quizResults, setQuizResults] = useState(
    JSON.parse(localStorage.getItem("quizResults")) || []
  );

  // Function to delete a quiz result
  const handleDeleteResult = (index) => {
    const updatedResults = [...quizResults];
    updatedResults.splice(index, 1); // Remove the result at the specified index
    setQuizResults(updatedResults);
    localStorage.setItem("quizResults", JSON.stringify(updatedResults)); // Update local storage
  };

  return (
    <div className="scoreboard-page">
      <h2>Scoreboard</h2>
      <div className="quiz-results">
        {quizResults.length > 0 ? (
          quizResults.map((result, index) => (
            <div key={index} className="quiz-result">
              <p>Quiz Name: {result.quizName}</p>
              <p>Score: {result.score} / 10</p>
              <p>Date: {result.date}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteResult(index)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No quiz results found.</p>
        )}
      </div>
    </div>
  );
};

export default ScoreboardPage;
