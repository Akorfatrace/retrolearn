// CustomButton.jsx

import React from "react";
import "./CustomButton.css"; // Import your CSS file

const CustomButton = ({ onClick, children }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
