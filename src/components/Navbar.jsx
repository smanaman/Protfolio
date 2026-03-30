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
            <span className="logo-main">AM<span className="accent">A</span>N</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav">

          <a href="#hero">Home</a>

          <a href="#">About Me</a>

          <a href="#services" className="dropdown">
            Services
          </a>
          <a href="#projects">Projects</a>


        </nav>

        {/* CTA Button */}
        <div className="cta">

       <a href="#contact" style={{ textDecoration: 'none' }}>
        <button className="start-btn">
            Start Project
            <ArrowRight size={18} />
          </button>
        </a>   

        </div>

      </div>

    </header>
  );
};

export default Navbar;