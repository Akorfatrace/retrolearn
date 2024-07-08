import React, { useState } from "react";
import { BsSearch } from "react-icons/bs"; // Importing BsSearch icon from react-icons/bs
import { RiArrowDropDownLine } from "react-icons/ri"; // Importing RiArrowDropDownLine icon from react-icons/ri
import "./CustomNavbar.css";

const CustomNavbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // State to manage selected category
  const [userProfileOpen, setUserProfileOpen] = useState(false); // State to manage profile dropdown

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Update state with selected category
    // Close profile dropdown when category selected
    setUserProfileOpen(false);
  };

  const toggleProfileDropdown = () => {
    setUserProfileOpen(!userProfileOpen); // Toggle profile dropdown state
  };

  // Dummy data for quiz categories
  const quizCategories = [{ id: 1, name: "Take a quiz" }];

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#e4b9d5" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          RetroLearn
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dashboard
              </a>
              <ul className="dropdown-menu">
                <li>
                  <h6 className="dropdown-header">Quizzes</h6>
                </li>
                {quizCategories.map((category) => (
                  <li key={category.id}>
                    <a
                      className={`dropdown-item ${
                        selectedCategory === category.name ? "active" : ""
                      }`}
                      href="#"
                      onClick={() => handleCategorySelect(category.name)}
                    >
                      {category.name}
                      {selectedCategory === category.name && (
                        <RiArrowDropDownLine className="selected-arrow" />
                      )}
                    </a>
                  </li>
                ))}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Scoreboard
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    My RetroLearn Favorites
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Badges
              </a>
            </li>
          </ul>
          <form className="d-flex me-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <BsSearch />
            </button>
          </form>
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={toggleProfileDropdown}
            >
              Profile
            </a>
            <ul
              className={`dropdown-menu dropdown-menu-end ${
                userProfileOpen ? "show" : ""
              }`}
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a className="dropdown-item" href="#">
                  My Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Render the selected quiz category */}
      {selectedCategory && (
        <div className="selected-category">
          <span className="selected-category-label">{selectedCategory}</span>
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;
