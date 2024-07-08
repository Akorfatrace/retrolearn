import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Homepage from "./components/Homepage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/play" element={<QuizPage />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/quiz/general-knowledge"
          element={
            <QuizPage category="General Knowledge" difficulty="medium" />
          }
        />
        <Route
          path="/quiz/mythology"
          element={<QuizPage category="Mythology" difficulty="easy" />}
        />
        <Route
          path="/quiz/history"
          element={<QuizPage category="History" difficulty="medium" />}
        />
        <Route
          path="/quiz/science-nature"
          element={
            <QuizPage category="Science and Nature" difficulty="medium" />
          }
        />
        <Route
          path="/quiz/books"
          element={<QuizPage category="Books" difficulty="medium" />}
        />
        <Route
          path="/quiz/film"
          element={<QuizPage category="Film" difficulty="medium" />}
        />
        <Route
          path="/quiz/music"
          element={<QuizPage category="Music" difficulty="medium" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
