import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import GradientText from "./GradientText";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

function LandingPage({ onAnimationEnd }) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showText, setShowText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onAnimationEnd(); // Call onAnimationEnd function passed as prop
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onAnimationEnd]);

  useEffect(() => {
    if (!isAnimating) {
      // If animation is complete, show the text after a delay
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 1000);

      // Show button after another delay
      const buttonTimer = setTimeout(() => {
        setShowButton(true);
      }, 2000);

      return () => {
        clearTimeout(textTimer);
        clearTimeout(buttonTimer);
      };
    }
  }, [isAnimating]);

  const handleGetStarted = () => {
    navigate("/homepage"); // Navigate to "/homepage" page
  };

  return (
    <div className={`landing-page ${isAnimating ? "spiral-out" : ""}`}>
      <div className="intro-section">
        <div className={`opening-message ${showText ? "show" : ""}`}>
          <h1>
            Hey Buddy! Welcome to <GradientText>RetroLearn</GradientText> : )
          </h1>
        </div>
      </div>
      {showButton && (
        <div className="button-container">
          <CustomButton onClick={handleGetStarted}>Get Started</CustomButton>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
