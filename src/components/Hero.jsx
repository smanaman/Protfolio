import React, { useLayoutEffect, useState, useRef } from "react";
import "./Hero.css";
import gsap from "gsap";

const Hero = () => {

  const [scrollY, setScrollY] = useState(0);

  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useLayoutEffect(() => {

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        delay: 0.2 
      });

      tl.from(leftRef.current, {
        x: -120,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(rightRef.current, {
        x: 120,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6");

    }, containerRef);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert(); 
    };

  }, []);

  return (
    <section
      ref={containerRef}
      className="hero"
      id="hero"
      style={{
        filter: `brightness(${1 + scrollY * 0.0008})`
      }}
    >
      <div className="container">

        <div className="hero-main">

          {/* LEFT */}
          <div className="hero-left" ref={leftRef}>
            <h1>Build</h1>
            <h1 className="outline-text">Digital</h1>
            <h1>Futures</h1>
          </div>

          {/* RIGHT */}
          <div className="hero-right" ref={rightRef}>
            <h2>Full Stack Developer | MERN | Automation</h2>

            <p>
               I design and build scalable web applications using the MERN stack, 
              focusing on performance, clean architecture, and real-world usability.
              <br /><br />
              I also integrate powerful automation workflows using n8n to reduce manual work 
              and create intelligent, self-operating systems.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn-quote">
                Get a Free Quote
              </a>

              <a href="#" className="btn-services">
                Our Services
              </a>
            </div>
          </div>

        </div>

        <div className="hero-footer">

          <div className="trusted-box">
            <p>
              Trusted by businesses to build reliable digital products
              that grow.
            </p>
          </div>

          <div className="author-info">
            <div className="dot"></div>
            <span>Maxel Morgan — Founder & Lead Developer</span>
          </div>

          <div className="social-links">
            <a href="#" className="social-item">
              <i className="fab fa-github"></i> GitHub
            </a>

            <a href="#" className="social-item">
              <i className="fab fa-dribbble"></i> Dribbble
            </a>

            <a href="#" className="social-item">
              <i className="fab fa-linkedin-in"></i> Linkedin
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;