import React, { useState, useEffect } from "react";

const QuizPage = () => {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchQuestions(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://opentdb.com/api_category.php"); // Replace with your categories API endpoint
      const data = await response.json();
      setCategories(data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchQuestions = async (category) => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${category}`
      ); // Replace with your questions API endpoint
      const data = await response.json();
      setQuestions(data.questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <div>
      <h1>Quiz App</h1>
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <div>
        {questions.length > 0 && (
          <ul>
            {questions.map((question) => (
              <li key={question.id}>{question.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
