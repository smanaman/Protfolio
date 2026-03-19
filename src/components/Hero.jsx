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

    // ✅ GSAP SAFE CONTEXT
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        delay: 0.2 // 🔥 ensures DOM ready after refresh
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
      ctx.revert(); // 🔥 cleanup
    };

  }, []);

  return (
    <section
      ref={containerRef}
      className="hero"
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
            <h2>Innovate. Develop. Succeed. Fast.</h2>

            <p>
              Transform your ideas into cutting-edge web solutions.
              We craft high-performance websites and applications tailored
              to your business.
            </p>

            <div className="hero-buttons">
              <a href="#" className="btn-quote">
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