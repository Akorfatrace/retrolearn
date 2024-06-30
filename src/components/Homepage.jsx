import React from "react";
import "./Homepage.css"; // Import your CSS file
import { Link } from "react-router-dom";
import Retro from "../components/Assets/Retro.png";

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="container">
          <div className="hero">
            <h1 className="hero-title">RetroLearn</h1>
            <p className="hero-subtitle">
              Buckle up! You are entering go mode🚀
            </p>
            <Link to="/login" className="cta-button">
              Get Started
            </Link>
          </div>
        </div>
      </header>
      {/* Replace the features section with a full-width image */}
      <div className="full-width-image">
        <img src={Retro} alt="Full Width Image" className="full-width-image" />
      </div>
      <section id="pricing" className="section pricing-section">
        <div className="container">
          <h2 className="section-title">Pricing</h2>
          <div className="pricing-plans">
            <div className="pricing-plan">
              <h3>Starter</h3>
              <p className="price">$9.99/month</p>
              <ul className="plan-features">
                <li>Basic features</li>
                <li>Up to 100 transactions</li>
                <li>Email support</li>
              </ul>
              <a href="#signup" className="btn">
                Choose Plan
              </a>
            </div>
            <div className="pricing-plan">
              <h3>Pro</h3>
              <p className="price">$29.99/month</p>
              <ul className="plan-features">
                <li>All Starter features</li>
                <li>Up to 1000 transactions</li>
                <li>24/7 support</li>
              </ul>
              <a href="#signup" className="btn">
                Choose Plan
              </a>
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
          <div className="footer-logo">Your App Name</div>
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
          <p>&copy; 2024 Your App Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
