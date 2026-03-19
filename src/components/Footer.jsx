import React, { useRef } from "react";
import "./Footer.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaInstagram, 
  FaArrowUp,
  FaEnvelope,
  FaMapMarkerAlt 
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".footer-cta-content h2", {
      y: 50,
      opacity: 0,
      duration: 0.8
    })
    .from(".footer-column", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6
    }, "-=0.4")
    .from(".footer-bottom", {
      opacity: 0,
      duration: 1
    }, "-=0.2");

  }, { scope: footerRef });

  return (
    <footer className="footer-main" ref={footerRef}>
      {/* 1. BIG CTA SECTION */}
      <div className="footer-cta">
        <div className="footer-cta-content">
          <span className="cta-tag">HAVE A PROJECT IN MIND?</span>
          <h2>Let’s create something <span className="gradient-text">Extraordinary</span></h2>
          <a href="#contact" className="cta-btn">
            Get in Touch <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="footer-container">
        {/* 2. MAIN FOOTER CONTENT */}
        <div className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-column brand-col">
            <h3 className="footer-logo">MAXEL<span>.</span></h3>
            <p className="brand-desc">
              Building high-performance autonomous systems and 
              immersive digital experiences with the modern tech stack.
            </p>
            <div className="social-links-footer">
              <a href="https://github.com/smanaman" className="social-circle"><FaGithub /></a>
              <a href="#" className="social-circle"><FaLinkedinIn /></a>
              <a href="#" className="social-circle"><FaTwitter /></a>
              <a href="#" className="social-circle"><FaInstagram /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-column">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <span>amansanvat@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <span>Remote /On Side</span>
            </div>
            <div className="status-indicator">
              <span className="dot"></span>
              Available for new projects
            </div>
          </div>

        </div>

        {/* 3. FOOTER BOTTOM */}
        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} Maxel Morgan. All Rights Reserved.
          </div>
          
          <button className="scroll-top-btn" onClick={scrollToTop}>
            Back to top <FaArrowUp />
          </button>

          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="footer-bg-text">CREATIVE</div>
    </footer>
  );
};

export default Footer;