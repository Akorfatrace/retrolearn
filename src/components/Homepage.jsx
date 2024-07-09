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
            Explore Exciting Features with Premium
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>More powerful search</h3>
              <p>
                Discover effortlessly! Experience our enhanced search feature
                that allows you to find quizzes, topics, and categories quickly
                and accurately. Tailor your learning journey with precision and
                ease.
              </p>
            </div>
            <div className="feature-card">
              <h3>Instructor/Professional Mode</h3>
              <p>
                Tailored for educators and professionals. Enjoy advanced
                analytics, customizable quizzes, and seamless integration with
                your teaching or professional workflow.
              </p>
            </div>
            <div className="feature-card">
              <h3>Gamified Mode</h3>
              <p>
                Team up for ultimate fun! Challenge your friends in timed
                quizzes or collaborate on quizzes together in real-time. Engage
                in RetroLearn™ Co-op Challenges and embark on interactive
                learning quests with your friends, earning real rewards along
                the way!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans section */}
      <section id="pricing" className="section pricing-section">
        <div className="container">
          <h2 className="section-title">Pricing Plans</h2>
          <div className="pricing-plans">
            <div className="pricing-plan">
              <h3>Starter</h3>
              <p className="price">$0.00/month</p>
              <ul className="plan-features">
                <li>Access to basic quizzes</li>
                <li>Limited Quiz Categories</li>
                <li>Join our community</li>
                <li>Email support</li>
              </ul>
              <Link to="/login" className="btn">
                Choose Plan
              </Link>
            </div>
            <div className="pricing-plan">
              <h3>Pro</h3>
              <p className="price">$5.99/month</p>
              <ul className="plan-features">
                <li>All Starter features</li>
                <li>Compete and earn real-time rewards </li>
                <li>Create 10000+ customized quizzes</li>
                <li>Priority support</li>
              </ul>
              <Link to="/login" className="btn">
                Choose Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Log a Complaint section */}
      <section id="complaint" className="section complaint-section">
        <div className="container">
          <h2 className="section-title">Log a Complaint</h2>
          <form className="complaint-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Describe your complaint"></textarea>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">RetroLearn</div>
          <ul className="footer-nav">
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#complaint">Complaint</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
          <div className="divider"></div>
          <p>
            Join our community on <a href="#community">X</a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} RetroLearn. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
