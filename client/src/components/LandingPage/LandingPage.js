import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="main-container">
      <div className="welcome-container">
        <div className="welcome-title">
          <h1 className="welcome-text">Dogs App</h1>
        </div>
        <div>
          <h4>
            In this page you can search and see the details of numerous dog
            breeds
          </h4>
          <h4>and also create your own dog breed!</h4>
        </div>
        <div className="welcome-btn">
          <Link to="/home">
            <button className="enter-btn">Enter!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
