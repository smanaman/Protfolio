import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Quantum E-Commerce",
    tags: ["React", "Node.js", "MongoDB"],
    description: "A high-performance e-commerce platform with real-time analytics.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "AI Dashboard",
    tags: ["Python", "Next.js", "TensorFlow"],
    description: "Neural network visualization tool for machine learning models.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Crypto Vault",
    tags: ["Solidity", "Web3.js", "Ether.js"],
    description: "Secure decentralized finance application with multi-sig wallet.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal Heading
      gsap.from(".project-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".project-title",
          start: "top 90%",
        },
      });

      // Staggered Card Animation
      gsap.from(".project-card", {
        y: 150,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects-section" ref={sectionRef}>
      {/* Background Text (Connecting with your previous style) */}
      <div className="bg-text-overlay">PROJECTS</div>

      <div className="container" ref={containerRef}>
        <h2 className="project-title">Selected <span>Works</span></h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="card-inner">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="overlay">
                    <button className="view-btn">View Case Study</button>
                  </div>
                </div>
                
                <div className="project-info">
                  <div className="tags">
                    {project.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;