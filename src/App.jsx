import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Homepage from "./components/Homepage";
import QuizPage from "./components/QuizPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ScoreboardPage from "./components/ScoreboardPage";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/play" element={<QuizPage />} />
        <Route path="/results" element={<ScoreboardPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/quiz/:category" element={<QuizPageWrapper />} />
      </Routes>
    </Router>
  );
}

const QuizPageWrapper = () => {
  const { category } = useParams();
  const difficulty = "easy"; // You can set this dynamically as needed

  return <QuizPage category={category} difficulty={difficulty} />;
};

export default App;
