import React from "react";
import "./Header.css";
import { ChevronDown, ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <header className="header">

      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <div className="logo-circle"></div>
          <div className="logo-text">
            <span className="logo-main">Ma<span className="accent">X</span>el</span>
            <span className="logo-sub">web agency</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav">

          <a href="#">Home</a>

          <a href="#">About Me</a>

          <a href="#" className="dropdown">
            Services <ChevronDown size={16} />
          </a>

          <a href="#" className="dropdown">
            Portfolio <ChevronDown size={16} />
          </a>

          <a href="#" className="dropdown">
            Pages <ChevronDown size={16} />
          </a>

          <a href="#">Contact</a>

        </nav>

        {/* CTA Button */}
        <div className="cta">

          <button className="start-btn">
            Start Project
            <ArrowRight size={18} />
          </button>

        </div>

      </div>

    </header>
  );
};

export default Navbar;