import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiN8N, SiGreensock } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);
  const techRef = useRef(null);

  const skills = [
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'n8n Automation', icon: <SiN8N />, color: '#FF6C37' },
    { name: 'GSAP', icon: <SiGreensock />, color: '#88CE02' },
  ];

useGSAP(() => {

  const isMobile = window.innerWidth < 600;

  // Background text animation
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.current,
      start: isMobile ? "top 95%" : "top 90%",
      end: "bottom 20%",
      scrub: 1.5,
    }
  });

  tl.from(".web-text", { 
      x: isMobile ? -50 : -800,
      opacity: 0,
      duration: 1.5
    })
    .from(".dev-text", { 
      x: 800,
      opacity: 0,
      duration: 1.5 
    }, "-=1.2");

  // Content reveal
  gsap.from(".reveal-text", {
    y: 50,
    opacity: 0,
    stagger: 0.25,
    duration: 1,
    scrollTrigger: {
      trigger: ".about-wrapper",
      start: isMobile ? "top 85%" : "top 75%",
    }
  });

  // Tech cards
  gsap.fromTo(
    ".tech-card",
    { scale: 0.85, opacity: 0, y: 30 },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: "back.out(1.6)",
      scrollTrigger: {
        trigger: ".skills-container",
        start: "top 90%",
        once: true
      }
    }
  );

}, { scope: container });
  return (
    <>

      <section id="about" className="about-main" ref={container}>
        {/* Background text upar wala */}
        <h1 className="web-text">Web</h1>
        
        <div className="about-wrapper">
          <div className="about-content-main">
            <div className="reveal-text tag">
              <span className="line"></span>
              WHO IS BEHIND THE CODE
            </div>

            <h2 className="reveal-text main-quote">
              I don't just build websites <br />
              I build <span className="gradient-text">Autonomous Systems</span>
            </h2>

            <div className="about-split">
              <div className="reveal-text bio-text">
                <p>
                  I specialize in the <strong>MERN Stack</strong>. 
                  Building powerful frontend experiences and 
                  scalable backend systems. 
                  My secret weapon is 
                  <strong> automation using n8n workflows.</strong>
                  <br /><br />
                  Main complex logic ko simple components mein todne aur users ke liye ek smooth experience create karne mein believe rakhta hu.
                </p>
              </div>

              <div className="skills-container" ref={techRef}>
                {skills.map((skill, i) => (
                  <div key={i} className="tech-card" style={{ "--hover-clr": skill.color }}>
                    <div className="icon-circle">
                      {skill.icon}
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Background text niche wala */}
        <h1 className="dev-text">Developer</h1>
      </section>

    </>
  );
};

export default About;