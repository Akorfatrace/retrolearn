import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Homepage from "./components/Homepage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/play" element={<QuizPage />} />
        <Route path="/results" element={<ResultPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
