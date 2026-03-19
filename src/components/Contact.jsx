import React, { useEffect, useRef } from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Background Text Animation
      gsap.from(".bg-text-overlay", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
        }
      });

      // Info Cards Animation
      gsap.from(".info-item", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 80%",
        }
      });

      // Form Animation
      gsap.from(".contact-form", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-section" ref={sectionRef}>
      {/* Background Overlay Text */}
      <div className="bg-text-overlay">CONTACT</div>

      <div className="contact-container">
        {/* Header matching Projects/Services style */}
        <div className="contact-header">
          <div className="expertise-tag">
            <span className="dot"></span>
            Let's Collaborate
          </div>
          <div className="header-right">
            <h2 className="section-main-title">Get In <span>Touch</span></h2>
            <p className="header-text">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I'm always open to discussing new projects, creative ideas or original visions.
            </p>
          </div>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <div className="info-item">
              <div className="icon-box"><Mail size={24} /></div>
              <div className="info-content">
                <span>Email Me</span>
                <p>hello@yourdomain.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><Phone size={24} /></div>
              <div className="info-content">
                <span>Call Me</span>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><MapPin size={24} /></div>
              <div className="info-content">
                <span>Location</span>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>

            <div className="social-links">
               <a href="#"><Github /></a>
               <a href="#"><Linkedin /></a>
               <a href="#"><Twitter /></a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form className="contact-form" ref={formRef} onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea placeholder="Tell me about your project..." rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;