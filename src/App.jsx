import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Import Navigate from react-router-dom
import Homepage from "./components/Homepage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />{" "}
        {/* Correct the path to '/homepage' */}
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/play" element={<QuizPage />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/login" element={<Login setUsers={setUsers} />} />
        <Route path="/signup" element={<SignUp setUsers={setUsers} />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
