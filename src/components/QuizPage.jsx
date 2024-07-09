import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import he from "he";
import "./QuizPage.css";

const QuizPage = ({ category, difficulty }) => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(10).fill(null));
  const [score, setScore] = useState(0);
  const [funnyMessage, setFunnyMessage] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true); // Start loading

      try {
        const categoryId = await fetchCategoryId(category);
        const response = await fetch(
          `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty}&type=multiple`
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const decodedQuestions = data.results.map((question) => ({
            ...question,
            question: he.decode(question.question),
            incorrect_answers: question.incorrect_answers.map((answer) =>
              he.decode(answer)
            ),
            correct_answer: he.decode(question.correct_answer),
          }));
          setQuestions(decodedQuestions);
        } else {
          setQuestions([]);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
        // Handle error state if needed
      } finally {
        setLoading(false); // End loading
      }
    };

    if (category) {
      fetchQuestions();
    }
  }, [category, difficulty]);

  const fetchCategoryId = async (categoryName) => {
    try {
      const response = await fetch("https://opentdb.com/api_category.php");
      const data = await response.json();
      const categoryObject = data.trivia_categories.find(
        (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
      );
      return categoryObject ? categoryObject.id : "";
    } catch (error) {
      console.error("Error fetching category ID:", error);
      return "";
    }
  };

  const handleAnswerSelection = (answerIndex) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const handleNextQuestion = () => {
    const correctAnswer = questions[currentQuestionIndex].correct_answer;

    if (
      selectedAnswers[currentQuestionIndex] !== null &&
      selectedAnswers[currentQuestionIndex] === answers.indexOf(correctAnswer)
    ) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleQuizCompletion();
    }
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(10).fill(null));
    setScore(0);
    setFunnyMessage("");
  };

  const handleGoToScoreboard = () => {
    navigate("/results");
  };

  const handleQuizCompletion = () => {
    const quizResult = {
      quizName: category,
      score: score,
      date: new Date().toLocaleDateString(),
    };

    // Save the quiz result to local storage
    const existingResults =
      JSON.parse(localStorage.getItem("quizResults")) || [];
    existingResults.push(quizResult);
    localStorage.setItem("quizResults", JSON.stringify(existingResults));

    if (score >= 8 && score <= 10) {
      setFunnyMessage(
        "This Retrolearner's steeze is through the roof. Way to go!"
      );
    } else if (score >= 5 && score < 8) {
      setFunnyMessage("You almost pulled off what Napoleon couldn't!");
    } else {
      setFunnyMessage("Oops! This Retrolearner ruined their steeze...");
    }

    setCurrentQuestionIndex(questions.length); // Mark quiz as completed
  };

  useEffect(() => {
    if (score >= 8 && score <= 10) {
      setFunnyMessage(
        "This Retrolearner's steeze is through the roof. Way to go!"
      );
    } else if (score >= 5 && score < 8) {
      setFunnyMessage("You almost pulled off what Napoleon couldn't!");
    } else {
      setFunnyMessage("Oops! This Retrolearner ruined their steeze...");
    }
  }, [score]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (questions.length === 0) {
    return (
      <div style={{ color: "white" }}>
        Kindly hold on or select another category. We are still setting things
        up for you...
      </div>
    );
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="quiz-container quiz-complete">
        <h2>Quiz Complete</h2>
        <p>
          Your score: {score} / {questions.length}
        </p>
        <p>{funnyMessage}</p>
        <div className="quiz-buttons">
          <button className="quiz-button" onClick={handleRetakeQuiz}>
            Retake Quiz
          </button>
          <button className="quiz-button" onClick={handleGoToScoreboard}>
            Go to Scoreboard
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ];
  answers.sort();

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>
          Question {currentQuestionIndex + 1} of {questions.length}
        </h2>
      </div>
      <div className="quiz-question">
        <h3>{currentQuestion.question}</h3>
      </div>
      <ul className="quiz-answers">
        {answers.map((answer, idx) => (
          <li
            key={idx}
            className={
              idx === selectedAnswers[currentQuestionIndex] ? "selected" : ""
            }
            onClick={() => handleAnswerSelection(idx)}
          >
            <label>
              <input
                type="radio"
                name="answer"
                value={answer}
                checked={selectedAnswers[currentQuestionIndex] === idx}
                onChange={() => {}}
              />
              {answer}
            </label>
          </li>
        ))}
      </ul>
      <div className="quiz-controls">
        <button
          className="quiz-button"
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          className="quiz-button next-button"
          onClick={handleNextQuestion}
          disabled={selectedAnswers[currentQuestionIndex] === null}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
