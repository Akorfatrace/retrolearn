import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

const CustomNavbar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [userProfileOpen, setUserProfileOpen] = useState(false);
  const [quizCategories, setQuizCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://opentdb.com/api_category.php");
      const data = await response.json();
      setQuizCategories(data.trivia_categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setUserProfileOpen(false);
  };

  const toggleProfileDropdown = () => {
    setUserProfileOpen(!userProfileOpen);
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#e4b9d5" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          RetroLearn
        </Link>
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Quizzes
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <h6 className="dropdown-header">Quiz Categories</h6>
                </li>
                {quizCategories.map((category) => (
                  <li key={category.id}>
                    <Link
                      className={`dropdown-item ${
                        selectedCategory === category.name ? "active" : ""
                      }`}
                      to={`/quiz/${category.name
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      onClick={() => handleCategorySelect(category.name)}
                    >
                      {category.name}
                      {selectedCategory === category.name && (
                        <RiArrowDropDownLine className="selected-arrow" />
                      )}
                    </Link>
                  </li>
                ))}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/results">
                    Scoreboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/favorites">
                    My RetroLearn Favorites
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/badges">
                Badges
              </Link>
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
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={toggleProfileDropdown}
            >
              Profile
            </Link>
            <ul
              className={`dropdown-menu dropdown-menu-end ${
                userProfileOpen ? "show" : ""
              }`}
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link className="dropdown-item" to="/profile">
                  My Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/settings">
                  Settings
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {selectedCategory && (
        <div className="selected-category">
          <span className="selected-category-label">{selectedCategory}</span>
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;
