import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-icon-title">
          <div className="header-icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="8" fill="white" opacity="0.9" />
              <circle cx="28" cy="28" r="8" fill="white" opacity="0.5" />
              <line
                x1="20"
                y1="20"
                x2="22"
                y2="22"
                stroke="white"
                strokeWidth="2"
                strokeOpacity="0.7"
              />
            </svg>
          </div>
          <div className="header-text">
            <h1 className="header-title">Color Contrast Calculator</h1>
            <p className="header-subtitle">WCAG Compliance Made Easy</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
