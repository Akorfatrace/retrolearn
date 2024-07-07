import React, { useEffect, useState } from "react";
import axios from "axios";

const Quiz = ({ category, difficulty }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://opentdb.com/api.php`, {
          params: {
            amount: 10,
            category: category.id,
            difficulty: difficulty,
          },
        });
        setQuestions(response.data.results);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [category, difficulty]);

  return (
    <div>
      <h2>{category.name} Quiz</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <p>{question.question}</p>
            <ul>
              {question.incorrect_answers.map((answer, i) => (
                <li key={i}>{answer}</li>
              ))}
              <li>{question.correct_answer}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
