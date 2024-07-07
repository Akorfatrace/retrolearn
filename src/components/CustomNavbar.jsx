import React from "react";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";

const CustomNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#e4b9d5" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          RetroLearn
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/quiz/general-knowledge" className="nav-link">
              General Knowledge
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quiz/mythology" className="nav-link">
              Mythology
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quiz/history" className="nav-link">
              History
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quiz/science-nature" className="nav-link">
              Science and Nature
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Entertainment
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link to="/quiz/books" className="dropdown-item">
                  Books
                </Link>
              </li>
              <li>
                <Link to="/quiz/film" className="dropdown-item">
                  Film
                </Link>
              </li>
              <li>
                <Link to="/quiz/music" className="dropdown-item">
                  Music
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Profile
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
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
    </nav>
  );
};

export default CustomNavbar;
