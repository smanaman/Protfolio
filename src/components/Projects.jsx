import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // useGSAP hook animation stability ke liye best hai
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "GlowLead",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    description: "Built a MERN-based lead generation system with secure authentication, REST APIs, and a dynamic dashboard for managing and tracking leads efficiently.",
    image: "/image2.png",
    link: "https://growlead.vercel.app/"
  },
  {
    id: 2,
    title: "Industra",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    description: "Developed a MERN stack application to automate inventory, workflows, and reporting with real-time data handling and interactive dashboards.",
    image: "/image1.png",
    link: "https://industra-jet.vercel.app/"


  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    tags: ["React", "GSAP", "JavaScript", "HTML", "CSS"],
    description: "Created a responsive portfolio with React and GSAP featuring smooth animations, modern UI, and optimized performance for better user engagement.",
    image: "/image.png",
    link: "https://protfolio-three-ashy.vercel.app/"
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Refresh ScrollTrigger to ensure correct positions after component mounts
    ScrollTrigger.refresh();

    // Reveal Heading
    gsap.from(".project-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".project-title",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    // Staggered Card Animation - Added 'clearProps' to fix layout shift on refresh
    gsap.from(".project-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      clearProps: "all", // Animation khatam hone ke baad CSS reset kar dega taaki layout na bigde
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 85%",
      },
    });

    // Background Text subtle movement
    gsap.to(".bg-text-overlay", {
      y: -30,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      {/* Background Text Fixed for all screens */}
      <div className="bg-text-overlay">PROJECTS</div>

      <div className="container">
        <h2 className="project-title">Selected <span>Works</span></h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="overlay">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="view-btn">View Case Study</button>
                </a>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;