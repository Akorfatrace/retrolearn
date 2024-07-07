import React from "react";
import "./Homepage.css"; // Import your CSS file
import { Link } from "react-router-dom";
import Retro from "../components/Assets/Retro.png";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Full-width image section */}
      <div>
        <img src={Retro} alt="Full Width Image" className="full-width-image" />
      </div>
      <div className="header-wrapper">
        <header className="header">
          <div className="container">
            <div className="hero">
              <p className="hero-subtitle">
                Buckle up! You are entering go mode🚀
              </p>
              <Link to="/login" className="cta-button">
                Get Started
              </Link>
            </div>
          </div>
        </header>
      </div>

      {/* Try these features section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title gradient-text">
            Try these updated features
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>More powerful search</h3>
              <p>Find it faster with advanced search capabilities.</p>
            </div>
            <div className="feature-card">
              <h3>Improve grades with Learn</h3>
              <p>Personalized learning modes tailored to your needs.</p>
            </div>
            <div className="feature-card">
              <h3>Be ready for the exam</h3>
              <p>Track your progress and performance effortlessly.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="section pricing-section">
        <div className="container">
          <h2 className="section-title">Pricing Plans</h2>
          <div className="pricing-plans">
            <div className="pricing-plan">
              <h3>Starter</h3>
              <p className="price">$9.99/month</p>
              <ul className="plan-features">
                <li>Basic features included</li>
                <li>Up to 100 transactions per month</li>
                <li>Email support</li>
              </ul>
              <Link to="#signup" className="btn">
                Choose Plan
              </Link>
            </div>
            <div className="pricing-plan">
              <h3>Pro</h3>
              <p className="price">$29.99/month</p>
              <ul className="plan-features">
                <li>All Starter features</li>
                <li>Up to 1000 transactions per month</li>
                <li>24/7 support</li>
              </ul>
              <Link to="#signup" className="btn">
                Choose Plan
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">RetroLearn</div>
          <ul className="footer-nav">
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
          <p>
            &copy; {new Date().getFullYear()} RetroLearn. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
