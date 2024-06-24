import React from "react";
import "./Homepage.css"; // Import your CSS file
import "./GradientText"; // Ensure this file is included

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <h5 className="logo">RetroLearn</h5>
            <ul className="nav-list">
              <li>
                <a href="#features">Features</a>
              </li>
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
          </nav>
          <div className="hero">
            <h1 className="hero-title">You, my friend, are on go mode!🚀</h1>
            <p className="hero-subtitle">Quiz Your Way Forward.</p>
            <a href="#signup" className="cta-button">
              Get Started
            </a>
          </div>
        </div>
      </header>

      <section id="features" className="section features-section">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature">
              <img
                src="path/to/image1.png"
                alt="Feature 1"
                className="feature-image"
              />
              <div className="feature-content">
                <h3>Teach Flexibly</h3>
                <p>
                  Build instruction for any subject, grade level, lesson,
                  assessment, or activity.
                </p>
              </div>
            </div>
            <div className="feature">
              <img
                src="path/to/image2.png"
                alt="Feature 2"
                className="feature-image"
              />
              <div className="feature-content">
                <h3>Engage Students</h3>
                <p>
                  Motivate learners with Power-Ups, Leaderboards, and more
                  gamified-for-growth elements.
                </p>
              </div>
            </div>
            <div className="feature">
              <img
                src="path/to/image3.png"
                alt="Feature 3"
                className="feature-image"
              />
              <div className="feature-content">
                <h3>Track Progress</h3>
                <p>
                  Adapt instruction with student reporting and data analysis.
                </p>
              </div>
            </div>
            <div className="feature">
              <img
                src="path/to/image4.png"
                alt="Feature 4"
                className="feature-image"
              />
              <div className="feature-content">
                <h3>Collaborate</h3>
                <p>
                  Collaborate with other educators and share resources easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <a href="#features">Features</a>
            </li>
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
